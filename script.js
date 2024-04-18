const listek = 12
const pocetNavstevnik = 174
const pocetPredstaveni = 15

const prijem = listek * pocetNavstevnik * pocetPredstaveni

document.body.innerHTML = "<p>Příjem divadla činí: " + prijem + " eur.</p>"

const pocetStudent = pocetNavstevnik * 0.4
const listekStudent = listek * 0.65 

const prijemSlevy = (pocetNavstevnik - pocetStudent) * listek * pocetPredstaveni + pocetStudent * listekStudent * listek

document.body.innerHTML += "<p>Měsíční příjem divadla, pokud je 40 % návštěvníků studentů platících 65 % ceny celého lístku, činí: " + prijemSlevy + " eur.</p>"