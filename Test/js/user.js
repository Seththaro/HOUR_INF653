document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profile-form');
    const profilePicUpload = document.getElementById('profile-pic-upload');

    const displayName = document.getElementById('display-name');
    const displayEmail = document.getElementById('display-email');
    const displayBudget = document.getElementById('display-budget');
    const profilePic = document.getElementById('profile-pic');

    // Load existing profile data
    function loadProfileData() {
        const profileData = JSON.parse(localStorage.getItem('userProfile')) || {};

        document.getElementById('profile-name').value = profileData.name || '';
        document.getElementById('profile-email').value = profileData.email || '';
        document.getElementById('monthly-budget').value = profileData.budget || '';
        profilePic.src = profileData.profilePic || 'images/default-avatar.png';

        // Update display
        displayName.textContent = profileData.name || 'Your Name';
        displayEmail.textContent = profileData.email || 'your.email@example.com';
        displayBudget.textContent = `Monthly Budget: $${profileData.budget || '0.00'}`;
    }

    // Save profile data
    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const profileData = {
            name: document.getElementById('profile-name').value,
            email: document.getElementById('profile-email').value,
            budget: document.getElementById('monthly-budget').value,
            profilePic: profilePic.src
        };

        // Validate profile data
        const errors = [];
        if (profileData.name.trim().length < 2) {
            errors.push('Name must be at least 2 characters long.');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(profileData.email)) {
            errors.push('Please enter a valid email address.');
        }

        if (parseFloat(profileData.budget) <= 0) {
            errors.push('Monthly budget must be a positive number.');
        }

        if (errors.length === 0) {
            localStorage.setItem('userProfile', JSON.stringify(profileData));
            alert('Profile updated successfully!');
            loadProfileData();
        } else {
            alert(errors.join('\n'));
        }
    });

    // Handle profile picture upload
    profilePicUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                profilePic.src = reader.result;
            };

            reader.onerror = () => {
                alert('Failed to load image. Please try again.');
            };

            reader.readAsDataURL(file);
        }
    });

    // Initial load
    loadProfileData();
});
