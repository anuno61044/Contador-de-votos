const number = 3;

window.addEventListener('load', () => {
    const h1 = document.getElementsByTagName('h1')[0];
    if (number == 1) {
        h1.innerText = `Marque solo un candidato`;
    }
    else{
        h1.innerText = `Marque a lo máximo ${number} candidatos`;
    }

    const candidatos = document.getElementById('candidatos');

    for (let index = 0; index < localStorage.length; index++) {
        
        const cand = localStorage.key(index);

        const div = document.createElement('div');
        div.className = 'element h5';
        const p = document.createElement('p');
        const select = document.createElement('input');
        select.type = 'checkbox';
        select.className = 'w-l';
        p.innerText = cand;

        div.appendChild(p);
        div.appendChild(select);
        candidatos.appendChild(div);
    }
})

function votar() {
    console.clear();

    var count = 0;
    for (const cand of document.getElementsByClassName('element')) {    
        if (cand.lastChild.checked) {
            count += 1;
        }
    }

    if (count > number) {
        window.alert(`Debes seleccionar a lo máximo ${number} candidatos`);
        return;
    }

    for (const cand of document.getElementsByClassName('element')) {
        if (cand.lastChild.checked) {
            const vote = JSON.parse(localStorage.getItem(cand.firstChild.innerText));
            vote.numero = vote.numero + 1;
            localStorage.removeItem(cand.firstChild.innerText);
            localStorage.setItem(cand.firstChild.innerText, JSON.stringify(vote));
        }

        // console.log(cand.firstChild.innerText);
        // console.log(JSON.parse(localStorage.getItem(cand.firstChild.innerText)).numero);
        // console.log(" ");

        cand.lastChild.checked = false;
    }
}

function reset() {
    for (let index = 0; index < localStorage.length; index++) {
        localStorage.clear();
        
    }
}