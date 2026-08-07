import readlineSync from 'readline-sync';


export default function progression(name) {
    let count;
    let count2 = 0;
    let start;
    let guest;
    let rightAnswer;
    let answer;
    const cont = [];




    while (count2 < 3) {

        count = Math.floor(Math.random() * 10) + 1;
        guest = Math.floor(Math.random() * 10);
        start = Math.floor(Math.random() * 100);

        for (let i = 0; i < 10; i++) {
            start += count;
            if (i === guest) {
                cont[i] = "..";
                rightAnswer = start;
            } else {
                cont[i] = start;
            }
        }

        console.log('¿Qué número falta en la progresión?')
        console.log(`Pregunta: ${cont.join(' ')}`);
        answer = readlineSync.question('Tu respuesta:');
        if (answer == rightAnswer) {
            console.log("¡Correcto!");
            count2++;
        } else {
            console.log(`${answer} es una respuesta incorrecta ;(. La respuesta correcta era ${rightAnswer}.`)
            break;
        }
    }
    count2 > 2 ? console.log(`¡Felicidades, ${name}!`) : console.log(`¡Intentémoslo de nuevo, ${name}!`)
}

