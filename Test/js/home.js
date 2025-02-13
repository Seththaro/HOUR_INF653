document.addEventListener("DOMContentLoaded", () => {
    const greetingMessage = document.getElementById("greeting-message");

    // Get current time and display a personalized message
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Good Morning! Start your day by tracking your expenses.";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon! Ready to manage your finances?";
    } else {
        greeting = "Good Evening! Let's keep your spending in check.";
    }

});