const loginForm = document.getElementById('login');
const feedbackCard = document.querySelector('.feedback');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (loginForm.email.value == 'deneme@gmail.com' && loginForm.psword.value == 12345) {
        window.location = 'dashboard.html';
    }
    else {
        feedback()
    }
    
});

function feedback() {
    feedbackCard.classList.remove('remove');
    setTimeout(() => {
        feedbackCard.classList.add('remove');
    }, 3000);
}




