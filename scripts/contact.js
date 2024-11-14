const messageField = document.getElementById('message');
messageField.addEventListener('input', autoResize);

function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

const emailField = document.getElementById('email');
const errorField = document.getElementById('error');

// Регулярний вираз для перевірки формату електронної пошти
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

emailField.addEventListener('input', () => {
    if (emailField.value === "") {
        emailField.classList.remove('correct', 'incorrect'); 
        errorField.style.display = "none";
    } else if (!emailPattern.test(emailField.value)) {
        emailField.classList.add('incorrect');
        emailField.classList.remove('correct');
        errorField.style.display = "inline"; 
    } else {
        emailField.classList.add('correct');
        emailField.classList.remove('incorrect');
        errorField.style.display = "none"; 
    }
});

