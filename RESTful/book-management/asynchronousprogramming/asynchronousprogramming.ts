
class Meditation{
    private duration: number;

    constructor(duration: number){
        this.duration = duration;
    }
    async start(){
        for (let i = this.duration; i > 0; i--) {
            console.log(i);
            await this.sleep(1000);
    }
    console.log("Jay Guru Dev")
}
private sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}}


const morning_meditation = new Meditation(5);
morning_meditation.start();
console.log("Start meditation");




////codingExercice2/////

const isPrime = (n:number):Promise<{prime:boolean}> =>{return new Promise((resolve, reject) => {
    if (n<=1){reject({prime:false});}
    for (let i=2, s=Math.sqrt(n);i<=s;i++){
        if (n % i === 0) {reject({prime:false});
        return;
    }
    }
    resolve({prime: true});    
});
};

// Test using .then() and .catch()
console.log('start');
isPrime(7)
    .then(result => console.log(result)) // { prime: true }
    .catch(error => console.error(error));
console.log('end');