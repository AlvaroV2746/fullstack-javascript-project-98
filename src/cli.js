import readlineSync from 'readline-sync';


export const bienvenida = () => {
    console.log("Bienvenido a Brain games");
    const name = readlineSync.question('¿Cuál es tu nombre? ');
    console.log(`¡Hola, ${name}!`)
    return name
}


