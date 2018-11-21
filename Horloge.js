var date;
var hours;
var sec;
var min;


var heures= document.getElementById("heures");
var secondes= document.getElementById("secondes");
var minutes= document.getElementById("minutes");

function time () {
    //recuperer les dates
     date= new Date();
    hours= date.getHours();
    sec= date.getSeconds();
    min= date.getMinutes();

    aiguilles();

    //COMPTER LES SECONDES EN FONCTION DE LA DATE
    setTimeout(function() {
        time();
    }, 1000);
}

function aiguilles(){

    date= new Date();
    hours= date.getHours();
    sec= date.getSeconds();
    min= date.getMinutes();

    //faire tourner les aiguilles


    var Asec= 6*sec; //(360 degres/60positions sur horloge = 6)
    secondes.style.transform= "rotate("+ Asec + "deg)";
    console.log(Asec);

    var Amin= 6*min; //(360 degres / 60 positions sur l'horloge= 6)
    minutes.style.transform= "rotate("+Amin+ "deg)";

    var Aheure= 360/12*hours;//(360degres/ 12 positions sur l'horloge)
    heures.style.transform= "rotate("+ Aheure+ "deg)";
    console.log(Aheure);
}
time();