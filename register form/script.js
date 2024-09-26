document.getElementById('HOGWARTS SCHOOL REGISTER FORMHOGWARTS SCHOOL REGISTER FORM').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Here you can handle the form submission, e.g., send data to a server
    alert('Registration successful!');
    this.reset(); // Reset the form
});
