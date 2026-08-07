import readlineSync from 'readline-sync';


export default function prime(name) {
    let count = 0;
    let number;

    console.log('Responde "yes" si el número dado es primo. De lo contrario, responde "no".')

    while (count < 3) {
        number = Math.floor(Math.random() * 100);
        let comp = isPrime(number) ? "yes" : "no";

        console.log(`Pregunta: ${number}`);
        let answer = readlineSync.question('Tu respuesta:');
        if (answer === comp) {
            console.log("¡Correcto!")
            count++
        } else {
            console.log(`${answer} es una respuesta incorrecta ;(. La respuesta correcta era ${comp}.`)
            break;
        }
    }
    count > 2 ? console.log(`¡Felicidades, ${name}!`) : console.log(`¡Intentémoslo de nuevo, ${name}!`)
}


const isPrime = (num) => {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};
