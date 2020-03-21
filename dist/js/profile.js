const btnSave = document.querySelector('.profile-btn-social');
const profileLinkForm = document.querySelector('.profile-link-form');


function urlFormShow() {
    profileLinkForm.classList.toggle('remove');
}
btnSave.addEventListener('click', urlFormShow);


