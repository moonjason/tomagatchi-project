// const name = prompt('What would you like to name your pet?')
const buttonsHandler = () =>{
    $('.create').on('click', () => {
        $('#pet').css('display', 'block');
    });
    game.buttons(userPet);
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
            console.log(this.time);
            console.log(pet);
            if(this.isDead(pet)){
                clearInterval(timer);
                console.log('Your pet died');
            };
            
            // if (pet.age === 2 || pet.age === 4)
            //  run can morph 
            
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
        if (pet.boredom === 2 || pet.sleepiness === 2 || pet.hunger === 2) {
            return true;
        };
    },
    canMorph(pet){
        if (pet.age === 2) {
           // manipulate to one pic 
        } else {
           // manipulate to other pic
        }
    },
    buttons(pet){  
        $('.btns').on('click', (e) => {
            if ($(e.target).text() === 'Feed' && pet.hunger > 0) {
                pet.hunger--;
                $('#pet .hunger').text(`Hunger: ${pet.hunger}`);
            } else if ($(e.target).text() === 'Rest' && pet.sleepiness > 0) {
                pet.sleepiness--;
                $('#pet .sleepiness').text(`Sleepiness: ${pet.sleepiness}`);
            } else if ($(e.target).text() === 'Play' && pet.boredom > 0) {
                pet.boredom--;
                $('#pet .boredom').text(`Boredom: ${pet.boredom}`);
            }
        })
    }
}


const userPet = new Pet('jason');
buttonsHandler();

// map the buttons 
