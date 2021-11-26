let lomake = document.forms['formNewKaveri'];
let kaveriList = document.getElementById('kaveriList');
let nimet = document.getElementById['kaveriList'];

lomake.addEventListener('submit', uusiListaElementti)
kaveriList.addEventListener('click', kaverinKlikkaus)
button.addEventListener('submit', jarjestaKaverit)

function uusiListaElementti(event){
    
    event.preventDefault()

    // Haetaan elementille nimi input-kentästä
    let elementinNimi = document.querySelector('#main input[type="text"]').value;

    if(elementinNimi.length < 1){
        alert('Pitää antaa nimi');
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
    console.log('Klikkasit listaa')
    console.log(event.target)
    let parentti = event.target.parentElement;
    poistaKlikattuKaveri(event.target, parentti)
}

function poistaKlikattuKaveri(poistettavaKaveri, kaverinParentti){
    kaverinParentti.removeChild(poistettavaKaveri);
}

function jarjestaKaverit(event){
    event.preventDefault()
    nimet.sort()
}