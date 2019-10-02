// const name = prompt('What would you like to name your pet?')

class Pet {
    constructor(name){
        this.name = name; 
    }
    boredom = 0;
    sleepiness = 0;
    hunger = 0;
    age = 0; // increase every x minutes  & at certain ages morph your pet 
}

const game = {
    time: 30,
    setTime(pet) {
        const timer = setInterval(() => {
            this.time--;
            console.log(this.time);
            console.log(pet);
            if(this.isDead(pet)){
                clearInterval(timer);
                console.log('Your pet died');
            };
            
            if (this.time === 25) {
                pet.hunger++; 
            } else if (this.time === 20) {
                pet.boredom++;
            } else if (this.time === 10) {
                pet.sleepiness++;
            } else if(this.time === 5) {
                pet.age++;
            } else if (this.time === 0) {
                this.time = 30;
            };
    
        }, 1000)
    },
    isDead(pet){
        if (pet.boredom === 2 || pet.sleepiness === 2 || pet.hunger === 2) {
            return true;
        };
    }
}

const userPet = new Pet('jason');


