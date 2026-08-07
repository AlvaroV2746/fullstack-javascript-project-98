import readlineSync from 'readline-sync';


export default function gcd(name) {
    let count = 0;
    let number1;
    let number2;
    let rightAnswer;
    let answer;



    while (count < 3) {
        console.log('Encuentra el máximo común divisor de los números dados.')
        number1 = Math.floor(Math.random() * 100)
        number2 = Math.floor(Math.random() * 100)
        rightAnswer = MCD(number1, number2);

        console.log(`Pregunta: ${number1} ${number2}`);
        let answer = readlineSync.question('Tu respuesta:');
        if (answer == rightAnswer) {
            console.log("¡Correcto!")
            count++
        } else {
            console.log(`${answer} es una respuesta incorrecta ;(. La respuesta correcta era ${rightAnswer}.`)
            break;
        }
    }
    count > 2 ? console.log(`¡Felicidades, ${name}!`) : console.log(`¡Intentémoslo de nuevo, ${name}!`)

}



const MCD = (a, b) => {
while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};