//This is for the rating selection
//assigns all rating classes to a constant variable
const choices = document.querySelectorAll('.one, .two, .three, .four, .five');
const submit = document.querySelector('.submit-button');
const mainCard = document.querySelector('.main-card');
const thankYou = document.querySelector('.thank-you');
const span = document.getElementById('#rating-selection');
let rating;


//loops through all the items in variable
for (let choice of choices){
    choice.addEventListener('click', function handleClick() {
        //on click, loops through all choices and removes .active class
        for(let choice of choices){
            choice.classList.remove('active');
            console.log('active class removed');
        }

        //on click, adds active to selected choice
        this.classList.add('active');
        console.log('active class added');
        rating = Number(this.textContent);
        console.log(rating);
        return rating;
    });
}

//For the submit button
submit.addEventListener('click', function(){
    if(rating){
        span.textContent = 'TEST'; //fails here
    }

    else {
        alert('Please make a selection');

    }
});



//Not my code
// 'use strict';

// const ratingCard = document.querySelector('.rating-card');
// const thankYouCard = document.querySelector('.thank-you-card');
// const submitButton = document.querySelector('.submit');
// const paragraphText = document.querySelector('.printed-result');
// let rating = "";

// submitButton.addEventListener('click', function () {
//   if (!rating) {
//     alert('Please select a rating before proceeding');
//   } else {
//     ratingCard.classList.add('hidden');
//     thankYouCard.classList.remove('hidden');
//     paragraphText.textContent = `You selected ${rating} out of 5`;
//   }
// });