let next = 0; 
let contenitore = document.getElementById("tabella");
let inputNome = document.querySelector("#ricercaCantante");
let inputNumero = document.querySelector("#ricercaQuantita");
let titolo = document.querySelector("h2");

function cercaBrani(){ //cerca brano musicale
    contenitore.innerHTML = ""
    titolo.innerHTML = ""
    next = 0;

    if(inputNome.value.trim().toLowerCase().length == 0){ 
        alert ("inserisci un nome")
    }else{
        if(inputNumero.value.trim().length == 0){ 
            alert ("inserisci un numero")
        }
        else{
        fetch(`https://iTunes.apple.com/search/results?term=${encodeURI(inputNome.value)}&media=music&limit=${inputNumero.value}&offset=${next}`)
        .then( risposta => risposta.json())
        .then(elenco => {
            next += elenco.resultCount
            generaHTML(elenco, inputNome.value, inputNumero.value)
        }
    )
        .catch( errore => console.log(errore))
    }}
}

function generaHTML (brani, artista, numero){ //genera tabella e titolo
    titolo.innerHTML = `<p>Trovati ${numero} brani dei/di <span style="color: rgb(114, 45, 114)">${artista}</span></p>`

    let contenitore = document.getElementById("tabella");

    contenitore.innerHTML = `<thead>
    <tr>
        <th>Track Name</th>
        <th>Track Price</th>
        <th>Track Audio</th>
        <th>Track Image</th>
    </tr>
</thead>
<tbody>`

    for(const brano of brani.results){
        contenitore.innerHTML += `<tr>
        <td>${brano.trackName}</td>
        <td>€ ${brano.trackPrice}</td>
        <td>
        <audio controls>
        <source src="${brano.previewUrl}" type="audio/mpeg">
        </audio></td>
        <td><img src="${brano.artworkUrl100}" alt="copertina"></td>
    </tr>`
    }

    contenitore.innerHTML += `
    </tbody>
    <button type="button" id="bottone2" onclick="prossimiBrani()">Successivi</button>
    `
}

function prossimiBrani(){ //tasto successivo che mostra altri risultati
        fetch(`https://iTunes.apple.com/search/results?term=${inputNome.value}&media=music&limit=${inputNumero.value}&offset=${next}`)
        .then( risposta => risposta.json())
        .then(elenco => {
            next += elenco.resultCount
            generaHTML(elenco, inputNome.value, inputNumero.value)
        }
    )
        .catch( errore => console.log(errore))
    }