
function uppg5() {
    // skriv en if-sats som jämför två tal
    // om det första talet är större än det andra, skriv ut "Det första talet är större än det andra"
    // annars skriv ut "Det andra talet är större än det första"

    const firstNumber = 25;
    const secondNumber = 20;
    if (firstNumber > secondNumber) {
        console.log("Det första talet är större än det andra");
    } else {
        console.log("Det andra talet är större än det första");
    }

}

module.exports = { uppg5 };