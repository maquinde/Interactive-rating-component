//Variables
const choices = document.querySelectorAll('.one, .two, .three, .four, .five');
const submit = document.querySelector('.submit-button');
const mainCard = document.querySelector('.main-card');
const thankYou = document.querySelector('.thank-you');
const span = document.querySelector('.rating-selection');
let rating;


//This is for the rating selection
//assigns all rating classes to a constant variable

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
    });
}




//For the submit button
submit.addEventListener('click', function(){
    if(rating){
        span.textContent = rating;
        mainCard.classList.add('display');
        thankYou.classList.remove('display');
    }

    else {
        alert('Please make a selection');
    }
});