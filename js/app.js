'use strict';
let count = 0

// eslint-disable-next-line no-undef
data.forEach(function (item) {
    $('.container').append(`<div class="flip-card ${count}"></div>`);
    $(`.flip-card.${count}`).append(`<div class="flip-card-inner"></div>`);
    $(`.flip-card.${count} .flip-card-inner`).append(`<div class="flip-card-front"><p class="hidden">${item.title}</p></div>`);
    $(`.flip-card.${count} .flip-card-inner`).append(`<div class="flip-card-back">${item.explanation}</div>`);
    count++;
});

// eslint-disable-next-line no-unused-vars
function revealAnswer(e) {
    count = 0;
    // eslint-disable-next-line no-undef
    data.forEach(function (item) {
        if (item.title.toLowerCase() === $('#question input[name="answer"]').val()) {
            console.log(item.title.toLowerCase());
            $(`.${count} p`).removeClass('hidden');
        }
        count++;
    });
}
