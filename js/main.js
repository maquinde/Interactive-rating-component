function submission(this){
    let content = this.textContent;
    //eventListener on button
    //check if user selected an option
        //if no option, show error message
        //if option, proceed
    //add textContent to span
    //add display class to card
    //remove display class from thank-you
}



//This is for the rating selection

//assigns all rating classes to a constant variable
const choices = document.querySelectorAll('.one, .two, .three, .four, .five');

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
        //try getting the 'this' element contents and store in variable
        console.log('active class added');
    });
}
