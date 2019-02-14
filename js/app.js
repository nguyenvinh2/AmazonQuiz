'use strict';
let count = 0;
let score = 0;

var modal = document.getElementById('myModal');

// Get the button that opens the modal

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

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
        if (item.title.toLowerCase() === $('#question input[name="answer"]').val().toLowerCase()) {
            console.log(item.title.toLowerCase());
            $(`.${count} p`).removeClass('hidden');
            score = 14 - $('.hidden').length;
            $(`h6`).text(`Can You Guess All of Amazon's 14 Leadership Principles? ${score}/14`);
        }
        count++;
    });
    e.preventDefault();
}

$('input[name=answer]').on('keydown', function(e) {
    if (e.which === 13) {
        revealAnswer(e);
        e.preventDefault();
    }
});
function show(){
    modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
