document.addEventListener('DOMContentLoaded', () => {
    const expenseData = JSON.parse(localStorage.getItem('expenseData')) || { expenses: [], categoryGoals: {} };
    const { expenses, categoryGoals } = expenseData;

    // Calculate total expenses
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    const totalExpenseElement = document.getElementById('total-expense');
    totalExpenseElement.textContent = `$${totalExpenses.toFixed(2)}`;

    // Populate category options in the expense form
    const categorySelect = document.getElementById('category');
    const categoryFilter = document.getElementById('category-filter');
    Object.keys(categoryGoals).forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);

        const filterOption = document.createElement('option');
        filterOption.value = category;
        filterOption.textContent = category;
        categoryFilter.appendChild(filterOption);
    });

    // Filter expenses by category
    categoryFilter.addEventListener('change', () => {
        const selectedCategory = categoryFilter.value;
        const filteredExpenses = selectedCategory === 'All'
            ? expenses
            : expenses.filter(expense => expense.category === selectedCategory);
        renderExpenses(filteredExpenses);
    });

    // Add new category to the list
    const categoryForm = document.getElementById('category-form');
    categoryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newCategory = document.getElementById('new-category').value;
        if (newCategory && !categoryGoals[newCategory]) {
            categoryGoals[newCategory] = 0;
            localStorage.setItem('expenseData', JSON.stringify({ expenses, categoryGoals }));
            location.reload();
        }
    });

    // Handle expense form submission
    const expenseForm = document.getElementById('expense-form');
    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const amount = parseFloat(document.getElementById('amount').value);
        const category = document.getElementById('category').value;
        const date = document.getElementById('date').value;
        const description = document.getElementById('description').value;

        if (category && amount && date) {
            expenses.push({ amount, category, date, description });
            localStorage.setItem('expenseData', JSON.stringify({ expenses, categoryGoals }));
            location.reload(); // Refresh the page to show the new data
        }
    });

    // Render expenses in the table
    const expensesList = document.getElementById('expenses-list');
    function renderExpenses(expensesToRender) {
        expensesList.innerHTML = ''; // Clear the table before rendering

        expensesToRender.forEach(expense => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${expense.date}</td>
                <td>${expense.category}</td>
                <td>$${expense.amount.toFixed(2)}</td>
                <td>${expense.description}</td>
                <td><button class="delete-btn">Delete</button></td>
            `;
            expensesList.appendChild(row);
        });
    }

    // Handle delete button click
    expensesList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const rowIndex = e.target.closest('tr').rowIndex;
            expenses.splice(rowIndex - 1, 1); // Delete the expense from the array
            localStorage.setItem('expenseData', JSON.stringify({ expenses, categoryGoals }));
            location.reload();
        }
    });

    // Sort table columns
    const sortButtons = document.querySelectorAll('.sort-btn');
    sortButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sortBy = button.dataset.sort;
            const sortedExpenses = [...expenses].sort((a, b) => {
                if (sortBy === 'date') {
                    return new Date(a.date) - new Date(b.date);
                } else if (sortBy === 'category') {
                    return a.category.localeCompare(b.category);
                } else if (sortBy === 'amount') {
                    return a.amount - b.amount;
                }
                return 0;
            });
            renderExpenses(sortedExpenses);
        });
    });

    // Initialize the page with all expenses
    renderExpenses(expenses);

    // Create Bar and Pie charts
    const categories = Object.keys(categoryGoals);
    const amounts = categories.map(category => expenses.filter(e => e.category === category).reduce((total, expense) => total + expense.amount, 0));

    // Bar Chart
    const ctxBar = document.getElementById('expense-bar-chart').getContext('2d');
    new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: categories,
            datasets: [{
                label: 'Expenses by Category',
                data: amounts,
                backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)']
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: { display: true, text: 'Amount ($)' }
                }
            }
        }
    });

    // Pie Chart
    const ctxPie = document.getElementById('expense-pie-chart').getContext('2d');
    new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: categories,
            datasets: [{
                data: amounts,
                backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)']
            }]
        },
        options: { responsive: true }
    });

    // Export CSV functionality
    const exportCsvButton = document.getElementById('export-csv-btn');
    exportCsvButton.addEventListener('click', () => {
        const csvRows = [];
        const headers = ['Date', 'Category', 'Amount ($)', 'Description'];
        csvRows.push(headers.join(',')); // Add headers

        // Add each expense to the CSV
        expenses.forEach(expense => {
            const row = [
                expense.date,
                expense.category,
                expense.amount.toFixed(2),
                expense.description
            ];
            csvRows.push(row.join(','));
        });

        // Create a CSV file and trigger download
        const csvData = new Blob([csvRows.join('\n')], { type: 'text/csv' });
        const csvUrl = URL.createObjectURL(csvData);
        const link = document.createElement('a');
        link.href = csvUrl;
        link.download = 'expenses.csv';
        link.click();
    });
});
