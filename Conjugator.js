import regVerbs from "./Words.js";
import regVerbsTranslations from "./Translation.js";


let forms = [ ]; 
let verbIndex = randomNum(regVerbs);
let regVerb = regVerbs[verbIndex];
let translation = regVerbsTranslations[verbIndex];
let score = 0;
let attempt = 1;

function conjugatorPresent(verb){
    forms = [];
    let yo, tu, el, nosotros, vosotros,ellos
    const base = verb.slice(0,-2)

    if (verb.slice(-2) == "ar"){
        yo = base + "o"
        tu = base + "as"
        el = base + "a"
        nosotros = base + "amos"
        vosotros = base + "ais"
        ellos = base + "an"
    }

    else if (verb.slice(-2) == "er"){
        yo = base + "o"
        tu = base + "es"
        el = base + "e"
        nosotros = base + "emos"
        vosotros = base + "eis"
        ellos = base + "en"
    }

    else if (verb.slice(-2) == "ir"){
        yo = base + "o"
        tu = base + "es"
        el = base + "e"
        nosotros = base + "imos"
        vosotros = base + "is"
        ellos = base + "en"
    }

    forms.push(yo,tu, el, nosotros, vosotros, ellos)
    return forms
};// Conjugates in Present

function randomNum(array) {
    return Math.floor(Math.random()*array.length)
};// Creates a random number for an array

function check() {
    //Get the input boxes values
    let yo = document.getElementById("Yo").value.toLowerCase();
    let tu = document.getElementById("Tu").value.toLowerCase();
    let el = document.getElementById("El").value.toLowerCase();
    let nosotros = document.getElementById("Nosotros").value.toLowerCase();
    let vosotros = document.getElementById("Vosotros").value.toLowerCase();
    let ellos = document.getElementById("Ellos").value.toLowerCase();
    let set = 0;

    function answerShower(pronoun, correctForms, formNumber, pronounId) {
        if(pronoun == correctForms[formNumber]){
            document.getElementById(pronounId).innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>';
            set++
            if (set === 6 && score < attempt) {
                score++
            }
        }
        else{
            document.getElementById(pronounId).innerHTML = '<svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" fill="currentColor"></path></svg>';
        }
    }
    answerShower(yo, forms, 0, "Yo_answer")
    answerShower(tu, forms, 1, "Tu_answer")
    answerShower(el, forms, 2, "El_answer")
    answerShower(nosotros, forms, 3, "Nosotros_answer")
    answerShower(vosotros, forms, 4, "Vosotros_answer")
    answerShower(ellos, forms, 5, "Ellos_answer")
    
    
    document.getElementById("score").innerHTML = score + "/" + attempt;
};// Checks the answers


function next() {
    attempt++;
    document.getElementById("score").innerHTML = score + "/" + attempt;
    
    let inputs = document.querySelectorAll("input");
    let correctness = document.querySelectorAll("span")
    
    inputs.forEach(input => input.value = "");
    
    correctness.forEach(correct => correct.innerHTML = "");
    
    verbIndex = randomNum(regVerbs)
    
    regVerb = regVerbs[verbIndex];
    document.getElementById("verb").innerHTML = regVerb.toUpperCase();
    
    translation = regVerbsTranslations[verbIndex];
    document.getElementById("translation").innerHTML = translation.toUpperCase();
    
    conjugatorPresent(regVerb);
}// Gets another verb and nullifies all the fields


conjugatorPresent(regVerb);// Prepares conjugations
document.getElementById("verb").innerHTML = regVerb.toUpperCase();// Shows the verb
document.getElementById("translation").innerHTML = translation.toUpperCase();// Shows translation
document.getElementById("Check").onclick = check;// Starts the check function
document.getElementById("Next").onclick = next;// Starts the next function
console.log(regVerbs)
