'use strict'

let menu = document.querySelector('.menu'),
    menuItems = document.querySelectorAll('.menu-item'),
    fifthItem = document.createElement('menu-item'),
    content = document.createTextNode('Пятый пункт'),
    promotion = document.getElementsByClassName('adv'),
    column = document.querySelectorAll('.column'),
    oldTitle = document.getElementById('title'),
    userAnswer = document.getElementById('prompt'),
    question = prompt('Что вам нравиться из техники эппл?', 'Телефоны');

fifthItem.appendChild(content);
fifthItem.classList.add('menu-item');
menu.insertBefore(fifthItem, menuItems[4]);

menu.insertBefore(menuItems[2], menuItems[1]);

column[1].removeChild(promotion[0]);

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

oldTitle.innerText = 'Мы продаем только подлинную технику Apple';

userAnswer.innerText = question;