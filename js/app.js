'use strict';
let count = 0;
let score = 0;

let modal = document.getElementById('modalElement');
let closeModal = document.getElementsByClassName('close')[0];

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

$( document ).ready(function() {
    let clickButton = document.getElementsByClassName('flip-card');
    Array.from(clickButton).forEach(function(e, index){
        e.onclick = function() {
            // eslint-disable-next-line no-undef
            $(`.modal-content p`).text(`${data[index].explanation}`);
            modal.style.display = 'block';
        };
    });
    // When the user clicks on <span> (x), close the modal
    closeModal.onclick = function() {
        modal.style.display = 'none';
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});

