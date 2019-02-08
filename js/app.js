'use strict';
let count = 0

$('.flip-card .flip-card-inner .flip-card-back p').text(data[5].explanation);


data.forEach(function(item){
    $('.container').append(`<div class="flip-card ${count}"></div>`);
    $(`.flip-card.${count}`).append(`<div class="flip-card-inner"></div>`);
    $(`.flip-card.${count} .flip-card-inner`).append(`<div class="flip-card-front">${item.title}</div>`);
    $(`.flip-card.${count} .flip-card-inner`).append(`<div class="flip-card-back">${item.explanation}</div>`);
    count++;
});
