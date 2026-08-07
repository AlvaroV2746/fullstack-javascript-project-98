import readlineSync from 'readline-sync';


export default function calc(name) {
    let count = 0;
    const operators = ['+', '-', '*'];
    let number1;
    let number2;
    let rightAnswer;
    let answer;


    while (count < 3) {
        console.log('¿Cuál es el resultado de la expresión?')

        const randomOperator = operators[Math.floor(Math.random() * operators.length)];

        rightAnswer = randomOperator === "*"? (number1 = Math.floor(Math.random()*10)) * (number2 = Math.floor(Math.random()*100)) :
        randomOperator === "+"? (number1 = Math.floor(Math.random()*100)) + (number2 = Math.floor(Math.random()*100)) :
        (number1 = Math.floor(Math.random()*100)) - (number2 = Math.floor(Math.random()*100))

        console.log(`Pregunta: ${number1} ${randomOperator} ${number2}`);
        let answer = readlineSync.question('Tu respuesta:');
        if (answer == rightAnswer) {
            console.log("¡Correcto!")
            count++
        } else {
            console.log(`${answer} es una respuesta incorrecta ;(. La respuesta correcta era ${rightAnswer}.`)
            break;
        }
    }
    count > 2? console.log(`¡Felicidades, ${name}!`):console.log(`¡Intentémoslo de nuevo, ${name}!`)
    
}

