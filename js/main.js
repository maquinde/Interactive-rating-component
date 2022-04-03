//This is for the rating selection

//assigns all rating classes to a constant variable
const choices = document.querySelectorAll('.one, .two, .three, .four, .five');

//loops through all the items in variable
for (let choice of choices){
    choice.addEventListener('click', function handleClick() {
        for(let choice of choices){
            choice.classList.remove('active');
            console.log('active class removed');
        }

        this.classList.add('active');
        console.log('active class added');
    });
}


