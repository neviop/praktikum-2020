function zufallszahl() {
    return ((Math.random() * 10) + 1)
}

function blackjack() {
    var sp1 = 0;
    var sp2 = 0;
    var runde = 0;

    while (sp1 <= 21 && sp2 <= 21) {
        if (runde % 2 === 0) {
            sp1 += zufallszahl();
        } else {
            sp2 += zufallszahl();
        }
        runde++;
    }

    if (sp1 > 21) {
        console.log('sp1 lost: ' + sp1)
    }
    if (sp2 > 21) {
        console.log('sp2 lost: ' + sp2)
    }
}

blackjack();