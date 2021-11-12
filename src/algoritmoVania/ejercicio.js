function tickets(cola) {
    let contador25USD = 0;
    let contador50USD = 0;
    for (let i = 0; i < cola.length; i++) {
        if (cola[i] === 25) {
            contador25USD += 1; // tengo 25 usd
        }
        if (cola[i] === 50) {
            contador25USD -= 1; // saco vuelto de 25
            contador50USD += 1; // sumo 50 usd
        }
        if (cola[i] === 100) {
            if (contador50USD === 0 && contador25USD >= 3) { // tengo de 50 o 3 de 25?
                contador25USD -= 3; // de 25
            } else {
                contador25USD -= 1;
                contador50USD -= 1;
            }
        }
        if (contador25USD < 0 || contador50USD < 0) {
            return 'NO';
        }
    }
    return 'SI';
}

console.log(
    'tickets([25, 25, 50]) =>',
    tickets([25, 25, 50])
);

console.log(
    'tickets([25, 100]) =>',
    tickets([25, 100])
);

console.log(
    'tickets([25, 25, 50, 50, 100]) =>',
    tickets([25, 25, 50, 50, 100])
);


