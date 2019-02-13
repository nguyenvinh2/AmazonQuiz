'use strict';
let count = 0;
let score = 0;

// eslint-disable-next-line no-undef
data.forEach(function (item) {
    $('.container').append(`<div class="flip-card ${count}"></div>`);
    $(`.flip-card.${count}`).append(`<div class="flip-card-inner"></div>`);
    $(`.flip-card.${count} .flip-card-inner`).append(`<div class="flip-card-front"><p class="hidden">${item.title}</p></div>`);
    $(`.flip-card.${count} .flip-card-inner`).append(`<div class="flip-card-back">${item.explanation}</div>`);
    count++;
});

// eslint-disable-next-line no-unused-vars
function revealAnswer() {
    count = 0;
    // eslint-disable-next-line no-undef
    data.forEach(function (item) {
        if (item.title.toLowerCase() === $('#question input[name="answer"]').val()) {
            console.log(item.title.toLowerCase());
            $(`.${count} p`).removeClass('hidden');
            score = 14 - $('.hidden').length;
            $(`h6`).text(`Can You Guess All of Amazon's 14 Leadership Principles? ${score}/14`);
        }
        count++;
    });
}
