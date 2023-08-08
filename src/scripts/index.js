const posts = [
    {
        id: 1,
        title:
            "Empresa de Tecnologia da Informação abre vagas para programa de estágio",
        text: "A Framework Digital, empresa mineira especializada em Tecnologia da Informação, irá iniciar o seu sexto programa de estágio, com o prazo de inscrições entre os dias 08 e 28 de agosto. O programa é conhecido como Framework Padawans, com inspiração nos filmes Star Wars. Nas histórias, os iniciantes fazem treinamentos para se tornar cavaleiros Jedi, que compõem o lado bom da força.",
        user: "Iris Silva",
        stack: "Front end Engineer",
        img: "./src/assets/img/user5.svg",
        likes: 25
    },
    {
        id: 2,
        title:
            "Programa de estágio abre vagas em Segurança da Informação com regime remoto",
        text: "Em Segurança da Informação, as vagas são destinadas às áreas de Security Operations Center (SOC), Administração de Dispositivos de Segurança (ADS), Resposta a Incidentes (RI), Segurança e Privacidade e Consultoria Técnica. O candidato interessado deverá estar matriculado em um curso superior em Ciência da Computação, Segurança da Informação, Tecnologia da Informação e afins, com previsão de conclusão do curso de fevereiro de 2023 a fevereiro de 2025.",
        user: "Carla Maria",
        stack: "Back end Engineer",
        img: "./src/assets/img/user6.svg",
        likes: 19
    },
    {
        id: 3,
        title: "O que é programação orientada a objetos e programação funcional",
        text: "A Programação Funcional é uma orientação focada na programação declarativa. Conhecendo mais a programação funcional a partir de códigos podemos nos deparar de primeira com o conceito mais central da programação funcional, que é o conceito de funções puras, isso significa que o retorno de uma função deve depender apenas dos seus parâmetros de entrada. Com classes podemos editar os valores das propriedades dos objetos criados ou ainda criar métodos para essas propriedades, ainda por cima podemos definir se vão ser públicos (vão para o objeto) ou estáticos (não são instanciados, ou seja, não vão para o objeto), e isso tem seu lado bom e ruim.",
        user: "João Carvalho",
        stack: "Devop's",
        img: "./src/assets/img/user7.svg",
        likes: 8
    },
];

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
    closeButton.addEventListener('click', function() {
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



handleModal();