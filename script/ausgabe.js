/* Deklaration der Variabeln */
let index;
let produkt = undefined;

/* Ausgabe */
function showUI() {
    //Produktname
    let htmlObj = document.getElementById("produktName");
    htmlObj.innerHTML =
        `${produkt.name}`;

    //Preis des Produktes
        htmlObj = document.getElementById("produktPreis");
        htmlObj.innerHTML =
            `CHF ${produkt.price}`;

    //Bild des Produktes
        htmlObj = document.getElementById("produktImage");
        htmlObj.src=
            `${produkt.imageFile}`;

    //Beschreibung des Produktes
        htmlObj = document.getElementById("produktText");
        htmlObj.innerHTML =
            `${produkt.beschreibung}`;

    //ein icon, dass eine Zutat des Produkts zeigt
        htmlObj = document.getElementById("produktZutaten");
        htmlObj.src =
            `${produkt.icon}`;
    }

// nächstes Produkt
    function next() {
        //Browser speicher hinauslesen
        index = localStorage.getItem("index");
        //testausgabe
        console.log(index);
        if (index == undefined) {
            index = 0;
        } else {
            if (produktListe.length - 1 > index) {
                index++; //Array wird erhöht
            }
        }
        //Speicherung im Index Browser
        localStorage.setItem("index", index);
        produkt = produktListe[index];
        //zeige es
        showUI();
    }

// vorheriges Produkt
    function back() {
        //Browser speicher hinauslesen
        index = localStorage.getItem("index");
        //testausgabe
        console.log(index);
        if (index == undefined) {
            index = 0;
        } else {
            if (index > 0) {
                index--; //Array wird verkleinert
            }
        }
        //Speicherung im Index Browser
        localStorage.setItem("index", index);
        produkt = produktListe[index];
        //zeige es
        showUI();
    }

//Falls der index nicht definiert ist ...
if (produkt === undefined){
    index = 0;
    localStorage.setItem("index", index);
    //letzte Anzahl holen
    produkt = produktListe[index];
    //zeige den Eintrag
    showUI();
}