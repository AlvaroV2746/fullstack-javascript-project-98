import readlineSync from 'readline-sync';


export default function even(name) {
    let count = 0;
    let number;

    console.log('Responde "yes" si el número es par, de lo contrario responde "no".')

    while (count < 3) {
        number = Math.floor(Math.random() * 100);
        let comp = number % 2 === 0 ? 'yes' : 'no';

        console.log(`Pregunta: ${number}`);
        let answer = readlineSync.question('Tu respuesta:');
        if (answer === comp) {
            console.log("¡Correcto!")
            count++
        } else {
            console.log(`${answer} es una respuesta incorrecta ;(. La respuesta correcta era ${comp}.`)
            console.log(`¡Intentémoslo de nuevo, ${name}!`)
        }
    }
    console.log(`¡Felicidades, ${name}!`)
}

