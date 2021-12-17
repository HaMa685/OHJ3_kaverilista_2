let lomake = document.forms['formNewKaveri'];
let kaveriLista = document.getElementById('kaveriList');
let button = document.getElementById('jarjesta');
let painike = document.getElementById('poista');
const kaveritListalla= new Array ();

lomake.addEventListener('submit', uusiNimiListalle)

button.addEventListener('click', jarjestaKaverit)
painike.addEventListener('click', poistaNimi)


function uusiNimiListalle(event){ 
    event.preventDefault()

    // Haetaan elementille nimi input-kentästä
    let lisattavaNimi = document.querySelector('#main input[type="text"]').value;

     // huomautus
     if(lisattavaNimi.length < 1){
        alert('Kenttä on tyhjä, kirjoita nimi.');
        return;
    }
    //vain 10 nimeä listalle
    if (kaveritListalla.length >=10) {
        alert('Lista on täynnä!');
        return;
    } else {
        kaveritListalla.push(lisattavaNimi); // lisää nimen
        console.log(kaveritListalla);
    }
    // käydään lista läpi   
    let kLen= kaveritListalla.length;
    let text= "";
    for (let i= 0; i < kLen; i++) {
        text+=  kaveritListalla[i] + "<br>";
        document.getElementById('kaveriList').innerHTML= text;
    }
}

function jarjestaKaverit(event){
   event.preventDefault()
    
    document.getElementById('kaveriList').innerHTML = kaveritListalla;
    console.log(kaveritListalla);
    kaveritListalla.sort();
    
    let kLen= kaveritListalla.length;
    let text= "";
    for (let i= 0; i < kLen; i++) {
        text+= kaveritListalla[i] + "<br>";
    }
    document.getElementById('kaveriList').innerHTML = text;
    console.log(kaveritListalla);
}


function poistaNimi(event){
    event.preventDefault();

    document.getElementById('kaveriList').innerHTML =kaveritListalla;
    kaveritListalla.pop();

    let kLen= kaveritListalla.length;
    let text= "";
    for (let i= 0; i < kLen; i++) {
        text+= kaveritListalla[i] + "<br>";
    }
    document.getElementById('kaveriList').innerHTML = text;
    console.log(kaveritListalla);

}

