let lomake = document.forms['formNewKaveri'];
lomake.addEventListener('submit', uusiListaElementti)

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

