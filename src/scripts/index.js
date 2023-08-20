import { posts } from "./database.js";

function handleModal(post) {
    const modal = document.querySelector('.modal__controller');
    const modalContainer = document.querySelector('.modal__container');

    const profileDiv = document.createElement('div');
    const profileImg = document.createElement('img');
    const div = document.createElement('div');
    const profileName = document.createElement('h2');
    const userJob = document.createElement('p');
    const postTitle = document.createElement('h2');
    const p = document.createElement('p');
    const closeButton = document.createElement('p');

    modalContainer.innerHTML = '';

    modalContainer.append(profileDiv, postTitle, p, closeButton);
    profileDiv.append(profileImg, div);
    div.append(profileName, userJob);

    profileImg.src = post.img;
    profileImg.alt = post.user;
    profileImg.classList.add("image__profile");

    profileName.innerText = post.user;
    profileName.classList.add("title2");

    userJob.innerText = post.stack;
    userJob.classList.add("text2")

    postTitle.innerText = post.title;
    postTitle.classList.add("title1");

    p.innerText = post.text;
    p.classList.add("text1");

    closeButton.innerText = 'X';
    closeButton.id = 'close'
    closeButton.addEventListener('click', function () {
        modal.close();
    });

    modal.showModal();
}

document.addEventListener('DOMContentLoaded', function () {
    const openPostButtons = document.querySelectorAll('.open_post__button');

    openPostButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            handleModal(posts[index]);
        });
    });
});


const followButtons = document.querySelectorAll('.follow__button');

followButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.innerText === 'Seguir') {
            button.innerText = 'Seguindo';
            button.classList.add('follow__button--focus');
        } else {
            button.innerText = 'Seguir';
            button.classList.remove('follow__button--focus');
        }
    });
});