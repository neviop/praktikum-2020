function rechnen() {
    var zahl1 = 10;
    var zeichen = '*';
    var zahl2 = 2;

    var ergebnis;
    if (zeichen === '+') {
        ergebnis = zahl1 + zahl2;
    }
    if (zeichen === '-') {
        ergebnis = zahl1 - zahl2;
    }
    if (zeichen === '*') {
        ergebnis = zahl1 * zahl2;
    }
    if (zeichen === '/') {
        ergebnis = zahl1 / zahl2;
    }

    console.log('das ergebnis ist: ' + ergebnis)
}

rechnen();