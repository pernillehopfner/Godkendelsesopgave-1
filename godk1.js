let hemmeligBesked = ['hej','klaus','vil','du','med','til','fodbold','i','klubben','i','aften','?','kurt']
//1. Brug en array metode til at slette det sidste element af arrayet hemmeligBesked
hemmeligBesked.pop()
console.log(hemmeligBesked); 

//2. Brug en array metode til at tilføje separate strenge: ‘adressen’,’er’,’Priratvej’ og ’100’til slutningen af hemmeligBeske
hemmeligBesked.push('adressen','er','Priratvej','100')
// console.log(hemmeligBesked);


//3.Ændrer ordet ‘Klaus’ til ‘bro!’ ved at tilgå indekset og erstatte det
hemmeligBesked[1] = 'bro!'
// console.log(hemmeligBesked); 

//4. Brug en array metode til at fjerne det første element af array’et
hemmeligBesked.shift() 
// console.log(hemmeligBesked);

//5. Brug en array metode til at tilføje ‘yo’ til starten af array’et
hemmeligBesked.unshift('yo')
// console.log(hemmeligBesked);

//6.Brug en array metode til at fjerne strengene ‘fodbold’, ‘i’ og ‘klubben’ og erstatte det med en enkelt streng ‘piratfest’
hemmeligBesked.splice(6,3,'piratfest')
// console.log(hemmeligBesked)

//7.Lav en ny variable som hedder faktiskeBesked, hvor du joiner alle strengene til en sætning
var faktiskeBesked = hemmeligBesked.join(' ') 
// console.log(faktiskeBesked)

// 8. console.log() den faktiskeBesked som en sætning
// console.log(faktiskeBesked)


//9. Hjælp Anton med at lave en funktion gørBeskedPersonlig(), som tager et navn som input og erstatter ‘bro’ i den faktiskeBesked med navnet
function gørBeskedPersonlig(besked, navn) {
return besked.replace('bro!', navn)
}

const result = gørBeskedPersonlig(faktiskeBesked, 'Sigurd', 'bro!')
console.log(result)

//10. gørBeskedPersonlig(Sigurd) skal printe følgende besked til consolen: 'yo sigurd vil du med til piratfest på reffen i aften? Adressen er Piratvej 100.

//11.Hjælp Anton med at lave et loop som kan loop gennem et array af objekter og returner en personlig besked for hvert navn og en samlet playliste

const katalog = [{navn:'Sigurd',sang:'Hit me baby one more time'},{navn: 'Tessa', sang:'Ben'},{navn:'Mia', sang:'Love will tear us apart'}]

const playliste = []

for (let index = 0; index < katalog.length; index++) {
    const element = katalog[index];
    const personaleMessage = gørBeskedPersonlig(faktiskeBesked, element.navn)
    console.log(personaleMessage)
    
    playliste.push(element.sang)
}

console.log(playliste)

//færdig