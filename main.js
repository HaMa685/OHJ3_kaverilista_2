let lomake = document.forms['formNewKaveri'];
let kaveriLista = document.getElementById('kaveriList');
let button = document.getElementById('jarjesta');
const kaveritListalla= new Array ();

lomake.addEventListener('submit', uusiListaElementti)
kaveriLista.addEventListener('click', kaverinKlikkaus)
button.addEventListener('click', jarjestaKaverit)

function uusiListaElementti(event){
    
    event.preventDefault()

    // Haetaan elementille nimi input-kentästä
    let elementinNimi = document.querySelector('#main input[type="text"]').value;
    console.log('lisätään kaveri listalle');
    kaveritListalla.push(elementinNimi);
    if(elementinNimi.length < 1){
        alert('Kirjoita nimi');
        return;
    }

    // Luodaan uusi li-elementti ja sille sisältö.
    let uusiElementti = document.createElement('li')
    let uusiElementtiTeksti = document.createTextNode(elementinNimi)
    uusiElementti.appendChild(uusiElementtiTeksti)
    uusiElementti.className = 'kaveri-item';

    // Lisätään uusi li-elementti oikeaan paikkaan.
    document.querySelector('#kaveriList').appendChild(uusiElementti)
}


function kaverinKlikkaus(event){
    console.log('Klikkasit listaa ja poistat kaverin')
    console.log(event.target)
    let parentti = event.target.parentElement;
    poistaKlikattuKaveri(event.target, parentti)
}

function poistaKlikattuKaveri(poistettavaKaveri, kaverinParentti){
    kaverinParentti.removeChild(poistettavaKaveri);
}

function jarjestaKaverit(event){
    event.preventDefault()
    
    document.getElementById('kaveriList').innerHTML = kaveritListalla;
    console.log(kaveritListalla);
    kaveritListalla.sort();

    let kLen= kaveritListalla.length;
    let text= "<ul>";
    for (let i= 0; i < kLen; i++) {
        text+= "<li>" +  kaveritListalla[i] + " </li>";
    }
    text +="</ul>";
    document.getElementById('kaveriList').innerHTML= text;
    console.log(kaveritListalla);
}