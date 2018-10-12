"use strict";

// Declare variables
var student = "Tom Folkers";
var year = 2018;
var group = "MD2A";
var title = "JavaScript Bootcamp " + year;
var currentYear = (new Date()).getFullYear();
var period = getPeriod(2018, currentYear)

// Init
instruction4();
instruction5();


//Instructions

function instruction3() {
    var description = "Nadat op de link 'Click Event' is geklikt worden de header,"
        + " beschrijving en oplossing van de opdracht aangepast";
    var result = "De header en beschrijving zijn aangepast: zie hierboven";

    updateContent("Opdracht 3 - Click Event", description, result);
}

function instruction4() {
    document.title = title;
    document.getElementById("pageHeader").innerText = title;

    document.getElementById("group").innerText = group;

    setValueByClassName("year", year);
    setValueByClassName("student", student);
}

function instruction5() {
    setValueByClassName("period", period);
}

function instruction6() {
    var currentYear = (new Date()).getFullYear();
    var description = "Bepaal de periode op basis van de het startjaar en het huidige jaar en voer een klein testje uit voor verschillende startjaren: vorige jaar, huidige jaar en volgende jaar";

    var result = "Huidige jaar: " + currentYear + "<br/>";
    result += "Startjaren: " + "<br/>";
    for (var i = -1; i <= 1; i++) {
        var startYear = currentYear + i;
        var period = getPeriod(startYear, currentYear);
        result += " - " + startYear + ": " + period + "<br/>";
    }

    updateContent("Opdracht 6 - Periode testen", description, result);
}

function instruction7() {
    var description = "Bepaal de dag van vandaag op drie verschillende manieren: 1)if/else, 2)switch en 3)array";
    var result = instruction7a() + "<br/>";
    result += instruction7b() + "<br/>";
    result += instruction7c() + "<br/>";
    result += "De beste manier is gebruik maken van ..... omdat ......";
    updateContent("Opdracht 7 - Dag in de week", description, result);
}

function instruction7a() {
    var dayNumber = (new Date()).getDay();
    var day = "";
    if (dayNumber === 0) {
        day = "Zondag";
    }
    else if (dayNumber === 1) {
        day = "Maandag";
    }
    else if (dayNumber === 2) {
        day = "Dinsdag";
    }
    else if (dayNumber === 3) {
        day = "Woensdag";
    }
    else if (dayNumber === 4) {
        day = "Donderdag";
    }
    else if (dayNumber === 5) {
        day = "Vrijdag";
    }
    else if (dayNumber === 6) {
        day = "Zaterdag";
    }

    return "Door gebruik te maken van if/else weet ik dat het vandaag " + day + " is.";
}

function instruction7b() {
    var dayNumber = (new Date()).getDay();
    var day = "";
    switch (dayNumber) {
        case 0:
            day = "Zondag";
            break;
        case 1:
            day = "Maandag";
            break;
        case 2:
            day = "Dinsdag";
            break;
        case 3:
            day = "Woensdag";
            break;
        case 4:
            day = "Donderdag";
            break;
        case 5:
            day = "Vrijdag";
            break;
        case 6:
            day = "Zaterdag";
            break;
        default:
            day = "Geen dag";
    }

    return "Ook wanneer ik switch gebruik weet ik dat het vandaag " + day + " is.";
}

function instruction7c() {
    var dayNumber = (new Date()).getDay();
    var days = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"]
    var day = days[dayNumber];
    return "En tenslotte door gebruik te maken van een array weet ik ook dat het vandaag " + day + " is.";
}

function instruction8() {
    var description = "Toon een ongesorteerde array met namen van kleuren. Toon vervolgens de oplopend (A-Z) gesorteerde array en de aflopend (Z-A) gesorteerde array";
    var colors = ["Rood", "Geel", "Blauw", "Groen", "Zwart"];
    var result = "Kleuren: " + colors + "<br />";
    var sorted = colors.sort();
    result += "Gesorteerd (A-Z): " + sorted + "<br />";
    var sortedReverse = colors.reverse();
    result += "Gesorteerd (Z-A): " + sortedReverse + "<br />";
    updateContent("Opdracht 8 - Array sorteren", description, result);
}

// Sub functions

// Example for documentation

var a = exampleFunction(5, 4);


function exampleFunction(a, b) {
    return 'Hello ' + (a * b);
}


function setValueByClassName(className, value) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        elements[i].innerText = value;
    }
}

// Instruction 4
function updateContent(header, description, result) {
    document.getElementById("instructionHeader").innerText = header;
    document.getElementById("instructionDescription").innerHTML = description;
    document.getElementById("instructionResult").innerHTML = result;
}

// Instruction 5
function getPeriod(startYear, currentYear) {
    var result = startYear;
    if (currentYear > startYear) {
        result += "-" + currentYear;
    }
    return result;
}


function instruction9() {
    var description = "Voeg een nieuwe link toe met als tekst ‘9) Elementen toevoegen’ en roep hiermee de functie instruction9 aan. In deze functie maak je nieuwe elementen aan en deze voeg je toe aan de DOM met als resultaat:";
    var result = "<img id='plaatjeVerplaats' style='width: 200px;' src='photo.jpg' alt=''><br><button onclick='document.getElementById(\"plaatjeVerplaats\").style.cssFloat = \"left\"; alert(\"left\");'>links</button><button onclick='document.getElementById(\"plaatjeVerplaats\").style.cssFloat = \"right\"; alert(\"right\");'>rechts</button>";


    updateContent("Opdracht 9 - Elementen toevoegen", description, result);
}






function instruction10() {
    var description = "Voeg een nieuwe link toe met als tekst ‘10) Het object String’ en roep hiermee de functie instruction10 aan. In deze functie voer je bewerkingen uit op een string met als resultaat:";
    var string = "Mediacollege Amsterdam";
    var result = "De string die bewerkt word is " + string +"<br>";
       result += "De lengte van de string is " + string.length + "<br>";
       result += "de eerste letter is vervangen door een spatie: " + string.replace('M',' ') + "<br>";
    var anderestring = string.replace('M',' ');
    result += "De lengte van de string is nog steeds " + anderestring.length + "<br>";
    result += "De spatie van de string is verwijderd " + anderestring.replace(' ', '') + "<br>";



    updateContent("Opdracht 10 - Het object String", description, result);
}



function instruction11() {
    var description = "Voeg een nieuwe link toe met als tekst ‘11) Foutafhandeling’ en roep hiermee de functie instruction11 aan. In deze functie maak je expres een fout die je netjes afvangt met als resultaat:";
    var result = "ete";

    updateContent("Opdracht 11 - Het object String", description, result);
}