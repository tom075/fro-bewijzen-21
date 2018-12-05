"use  strict";

const  studentName  =  "Tom  Folkers";
const  studentGroup  =  "MD2A";
const  year  =  main.year;
const  studentClass  =  document.getElementsByClassName("studentGroup");
const  pageYear  =  document.getElementsByClassName("pageYear");
const  studentNameClass  =  document.getElementsByClassName("studentName");

init();

function  init()  {
        document.getElementById("studentName").innerText  =  studentName;

        main.addContenItem("Inleiding",  intro);
        main.addContenItem("Variabelen",  variables);
        main.addContenItem("object",  objects);
        main.addContenItem("array",  array);
        main.addContenItem("ajax",  ajax);


    myValue();
        intro();
}

function  intro()  {
        var  omschrijving  =  "Je  bent  in  dienst  van  energiemaatschappij  Energy  Solutions  en"  +  "  krijgt  de  opdracht  om  een  webpagina  te  maken  die  de  energiestanden  toont  van  een  aantal  adressen."  +  "  De  data  wordt  via  een  webAPI  beschikbaar  gesteld.  "  +  "  Dit  gebeurt  in  kleine  stapjes  en  uiteindelijk  is  het  de  bedoeling  om  de  data  op  een  nette  manier  te  presenteren."  +  "<p>Succes!!!</p>";
        main.updateContent("Inleiding",  omschrijving);
        var  element  =  document.getElementById("contentPlaceholder");
        var  img  =  document.createElement("img");
        img.src  =  "photo.jpg";
        img.style.width  =  "100px";
        var  label  =  document.createElement("label");
        label.innerHTML  =  studentName;
        var  p  =  document.createElement("p");
        p.appendChild(img);
        p.appendChild(document.createElement("br"));
        p.appendChild(label);
        element.appendChild(p);
}

function  myValue()  {
        for  (var  i  =  0;  i  <  studentClass.length;  i++)  {studentClass[i].innerText  =  studentGroup;}
        for  (var  i  =  0;  i  <  studentNameClass.length;  i++)  {studentNameClass[i].innerText  =  studentName;}
        for  (var  i  =  0;  i  <  pageYear.length;  i++)  {pageYear[i].innerText  =  year;}
}

function  variables()  {
        var  postcode  =  "1234ab";
        var  huisnummer  =  "99";
        var  datum  =  "2018-01-01";
        var  gas  =  300;
        var  water  =  30;
        var  electriciteit  =  [1001,  1002];
        var  slimmeM  =  true;
        var  titel  =  "<p>verslag  van  de  meting</p>  ";
        var  tekst  =  "voor  postcode"  +  postcode  +  "en  huisnummer"  +  huisnummer  +  "zijn  op  "  +  datum  +  "  metingen  gedaan."  +  "en  dit  zijn  de  resultaten:  gas=  "  +  gas  +  ",  water=  "  +  water  +  ",  electriciteitHoog=  "  +  electriciteit[0]  +  "  en  electiciteit  laag=  "  +  electriciteit[1];

        if  (slimmeM)  {tekst  +=  "  dit  is  wel  met  een  slimme  meter";}
        else  {tekst  +=  "  dit  is  niet  met  een  slimme  meter";}

        var  karakters  =  tekst.length;
        var  words  =  tekst.split("  ");
        var  woorden  =  words.length;
        var  tekst2  =  "<p>  nog  wat  eigenschappen  </p>  "  +  "het  verslag  geeft  "  +  karakters  +  '  karakters,  '  +  woorden  +  "woorden,  het  eerste  woord  is  "  +  words[0]  +  "  en  het  laaste  woord  is  "  +  words[woorden  -  1];
        var  omschrijving  =  titel  +  tekst  +  tekst2;
        main.updateContent("variabelen",  omschrijving)
}



function  objects()  {
        var  postcode  =  "1234ab";
        var  huisnummer  =  "99";
        var  date  =  new  Date(2018,  1,  1,  1,  0,  0,  0);
        var  datum  =  date;
        var  gas  =  300;
        var  water  =  30;
        var  electriciteit  =  [1001,  1002];
        var  slimmeM  =  true;
        var  titel  =  "<p>  verslag  van  de  meting</p>";
        var  tekst  =  "voor  postcode  "  +  postcode  +  "  en  huisnumer  "  +  huisnummer  +  "  zijn  op  metingen  gedaan  op  "  +  datum  +  "  en  dit  zij  de  resultaten:  ";
        tekst  +=  "<table>  "  +  "<tr>"  +  "<th>gas:</th>  <th>"  +  gas  +  "</th>"  +  "</tr>"  +  "<tr>"  +  "<th>water:</th><th>"  +  water  +  "</th>"  +  "</tr>"  +  "<tr>"  +  "<th>Electriciteit  Hoog:</th><th>"  +  electriciteit[0]  +  "</th>"  +  "</tr>"  +  "<tr>"  +  "<th>Electriciteit  laag:</th><th>"  +  electriciteit[1]  +  "</th>"  +  "</tr>"  +  "  </table>";

        if  (slimmeM)  {tekst  +=  "  dit  is  gedaan  met  een  slimme  meter";}
        else  {tekst  +=  "  dit  is  niet  gedaan  met  een  slimme  meter";}

        var  omschrijving  =  titel  +  tekst;
        main.updateContent("Object",  omschrijving)
}

function  array()  {
        var  omschrijving;
        var  meting  =   {huisnummer:  99, postcode:  "1234AB", datum:  "2018-01-01", gas:  300, water:  30, elektriciteit:  [1001,  1002], slimmeM:  true};
        var  metting1  =  {huisnummer:  45, postcode:  "1234AB", datum:  "2018-01-01", gas:  130, water:  130, elektriciteit:  [11001,  11002], slimmeM:  false};

        var  metingen  =  [];
        metingen.push(meting);
        metingen.push(metting1);

        omschrijving  =  "<p>  overzicht  van  de  metingen  voor  postcode  1234AB  </p>";
        omschrijving  +=  "<table>"  +  "<tr  id='firstRow'>"  +  "<th>postcode:</th>  <th>huisnummer</th>  <th>datum</th>  <th>gas</th><th>water</th><th>electriciteit</th><th>slimmeM</th>"  +  "</tr>";

        for  (var  i  =  0;  i  <  metingen.length;  i++)  {
                omschrijving  +=  "<tr>  <th>  "  +  metingen[i].postcode  +  "</th>";
                omschrijving  +=  "<th>"  +  metingen[i].huisnummer  +  "</th>";
                omschrijving  +=  "<th>"  +  metingen[i].datum  +  "</th>";
                omschrijving  +=  "<th>"  +  metingen[i].gas  +  "</th>";
                omschrijving  +=  "<th>"  +  metingen[i].water  +  "</th>";
                omschrijving  +=  "<th>"  +  metingen[i].elektriciteit[0]  +  ","  +  metingen[i].elektriciteit[1]  +  "</th>";
                omschrijving  +=  "<th>"  +  metingen[i].slimmeM  + "</th>";
                omschrijving  +=  "</tr>";
        }
        omschrijving  +=  "  </table>";
        main.updateContent("array",  omschrijving)

}

function ajax() {
        let url = "http://gert-rikkers.nl/api/meterstanden";
        let omschrijving;
        let gasVerbruikt;
        let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                omschrijving += " overzicht van de metingen voor poscode 1234AB <br><br>";
                let verbruik = JSON.parse(this.responseText);
                console.log(verbruik);
                omschrijving += "<table>" +
                    "<tr id='firstRow'>" +
                    "<th>postcode:</th>" +
                    "<th>huisnummer</th>" +
                    " <th>datum</th>" +
                    " <th>gas</th>" +
                    "<th>water</th>" +
                    "<th>slimmemeter</th>" +
                    "<th>electriciteit hoog</th>" +
                    "<th>electriciteit laag</th>" +
                    "<th>maand</th>" +
                    "<th>gas verbruik</th> " +
                    "</tr>";

                for (let i = 0; i < verbruik.length; i++) {
                    omschrijving += "<tr><th>" + verbruik[i].postcode + "</th>";
                    omschrijving += "<th>" + verbruik[i].huisnummer + "</th>";
                    omschrijving += "<th>" + verbruik[i].datum + "</th>";
                    omschrijving += "<th>" + verbruik[i].gas + "</th>";
                    omschrijving += "<th>" + verbruik[i].water + "</th>";
                    omschrijving += "<th>" + slimmemeter(verbruik[i].slimmeMeter) + "</th>";
                    omschrijving += "<th>" + verbruik[i].elektriciteit[0] + "</th>";
                    omschrijving += "<th>" + verbruik[i].elektriciteit[1] + "</th>";
                    omschrijving += "<th>" + maand(i) + "</th>";
                    omschrijving += i !== 0 ? "<th>" + verbruikGas(gasVerbruikt, verbruik[i].gas) + "</th>" : "<th>" + verbruik[i].gas + "</th>";
                    gasVerbruikt = verbruik[i].gas;
                    omschrijving += "</tr>";
                }

                omschrijving += " </table>";
                main.updateContent("Ajax-tabel", omschrijving);
            }
             };


    xhttp.open("GET", url, true);
    xhttp.send();

}

function slimmemeter(meter) {
    return meter ? "+" : "";
}

function verbruikGas(a, b) {
    return b - a;
}

function maand(a) {
    a = a % 12;
    let maand = [];

    maand[0] = "jan"; maand[1] = "feb"; maand[2] = "mrt"; maand[3] = "apr"; maand[4] = "mei"; maand[5] = "jun"; maand[6] = "jul"; maand[7] = "aug"; maand[8] = "sep"; maand[9] = "okt"; maand[10] = "nov"; maand[11] = "dec";

    return maand[a];
}