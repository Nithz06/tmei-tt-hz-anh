// 'use strict'

// let image = document.querySelector('#image');
// let title = document.querySelector('#title');
// let btnYes = document.querySelector('#btnYes');
// let btnNo = document.querySelect('#btnNo');

// btnYes.addEventListener('Onclick', () =>{
//     image.src = "https://media.tenor.com/UTrLSr85tYEAAAAM/happy-cat-cat.gif";
//     title.innerHTML = "tos tos!!!";
// });



// btnNo.addEventListener('click', () =>{
//     image.src = "https://th.bing.com/th/id/OIP.tA2Q8w0_N56aAelzNkOCLgHaFj?rs=1&pid=ImgDetMain";
//     title.innerHTML = "Job bat ai!!!";
// });



'use strict'

let image = document.querySelector('#image');
let title = document.querySelector('#title');
let btnYes = document.querySelector('#btnYes');
let btnNo = document.querySelector('#btnNo');

let soundYes = new Audio("");
let soundNo = new Audio("../sound/crying-cat.mp3");


btnYes.addEventListener('click', () => {
    image.src = "https://media.tenor.com/UTrLSr85tYEAAAAM/happy-cat-cat.gif";
    title.innerHTML = "tos tos!!!";
});

btnNo.addEventListener('click', () => {
    image.src = "https://th.bing.com/th/id/OIP.tA2Q8w0_N56aAelzNkOCLgHaFj?rs=1&pid=ImgDetMain";
    title.innerHTML = "Job bat ai!!!";
    soundNo.play();
});
