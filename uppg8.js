

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument
    let people = [ 
        { name: "Lisa", age: 33},
        { name: "Erik", age: 25},
        { name: "Anna", age: 55},
        { name: "Isabelle", age: 28},
        { name: "Hugo", age: 2},
    ]

    function NamesOver30(personArray) { 
        for (let i = 0; i < personArray.length; i++) {
            if (personArray[i].age > 30) {
                console.log(personArray[i].name);
            }
        }
    }
    
    NamesOver30(people);
}

module.exports = { uppg8 };