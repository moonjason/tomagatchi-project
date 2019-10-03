const buttonsHandler = () =>{
    $('.newgame').prop('disabled', true);
    $('.create').on('click', () => {
        $('#game').css('display', 'block');
        const name = prompt('What would you like to name your pet?')
        const userPet = new Pet(name);
        $('.stats h2').text(`${name}`);
        game.buttons(userPet);
        game.setTime(userPet);
        $('.create').prop('disabled', true); 
    });
    $('.newgame').on('click', () => {
        const name = prompt('What would you like to name your pet?')
        const userPet = new Pet(name);
        $('.stats h2').text(`${name}`);
        game.buttons(userPet);
        game.setTime(userPet);
        $('#lbj').attr('src', 'images/lebron1.jpg')
        $('#lbj').css('border', '.6rem solid green')
        $('#pet .hunger').text(`Hunger: 0`);
        $('#pet .boredom').text(`Boredom: 0`);
        $('#pet .sleepiness').text(`Sleepiness: 0`);
        $('#pet .age').text(`Age: 0`);
        $('.newgame').prop('disabled', true);
        $('.btns button').prop('disabled', false);
        $('#lbj').css('animation-duration', '3s, 0s');
        game.time = 30;

    });
}

class Pet {
    constructor(name){
        this.name = name; 
        this.boredom = 0;
        this.sleepiness = 0;
        this.hunger = 0;
        this.age = 0; // increase every x minutes  & at certain ages morph your pet 
    }
    bore(){
        this.boredom++;
        $('#pet .boredom').text(`Boredom: ${this.boredom}`);
    };
    sleepy(){
        this.sleepiness++;
        $('#pet .sleepiness').text(`Sleepiness: ${this.sleepiness}`);
    };
    starve(){
        this.hunger++;
        $('#pet .hunger').text(`Hunger: ${this.hunger}`);
    };
    grow(){
        this.age++;
        $('#pet .age').text(`Age: ${this.age}`);
    };
}

const game = {
    time: 30, //set to 60 later 30 for debugging
    setTime(pet) {
        const timer = setInterval(() => {
            this.time--;
            $('.timer').text(`Timer: ${this.time}`);
            if (this.isDead(pet)) {
                clearInterval(timer);
                $('#lbj').attr('src', 'images/lebron4.png');
                $('#lbj').css('border', '.6rem solid grey');
                $('#lbj').css('animation-duration', '0s');
                alert(`${pet.name} has retired.`);
                $('.btns button').prop('disabled', true);
                $('.newgame').prop('disabled', false); 
            };
            
            if (pet.age === 1 || pet.age === 2) {
                this.canMorph(pet); 
            }            

            if (this.time === 25) {
                pet.starve(); 
            } else if (this.time === 20) {
                pet.bore();
            } else if (this.time === 10) {
                pet.sleepy();
            } else if(this.time === 5) {
                pet.grow();
            } else if (this.time === 0) {
                this.time = 30;
            };
    
        }, 1000)
    },
    isDead(pet){
        if (pet.boredom === 5 || pet.sleepiness === 5 || pet.hunger === 5) {
            return true;
        };
    },
    canMorph(pet){
        if (pet.age === 1) {
            $('#lbj').attr('src', 'images/lebron2.jpg')
            $('#lbj').css('border', '.6rem solid red')
        } else {
            $('#lbj').attr('src', 'images/lebron3.jpg')
            $('#lbj').css('border', '.6rem solid yellow')
        }
    },
    buttons(pet){  
        $('.btns').on('click', (e) => {
            if ($(e.target).text() === 'Feed' && pet.hunger > 0) {
                pet.hunger--;
                $('#pet .hunger').text(`Hunger: ${pet.hunger}`);
                flash();
            } else if ($(e.target).text() === 'Rest' && pet.sleepiness > 0) {
                pet.sleepiness--;
                $('#pet .sleepiness').text(`Sleepiness: ${pet.sleepiness}`);
                flash();
            } else if ($(e.target).text() === 'Play' && pet.boredom > 0) {
                pet.boredom--;
                $('#pet .boredom').text(`Boredom: ${pet.boredom}`);
                flash();
            }

        })
    }
}

function flash () {
    $('#lbj').css('animation-name', 'slidein, flash');
    $('#lbj').css('animation-duration', '3s, .25s');
    $('#lbj').css('animation-iteration-count', 'infinite, 2');

    setTimeout(() => {
        $('#lbj').css('animation-name', 'slidein');
        $('#lbj').css('animation-duration', '3s');
        $('#lbj').css('animation-iteration-count', 'infinite');

    }, 500)
}

buttonsHandler(); 