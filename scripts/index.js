class Numero {
    constructor(numero) {
        this.numero = numero;
    }
}

let id = 0
let a = []

function add() {
    const cand = document.querySelector('#candidato');
    
    let html = `
            <div class="mt-3 element" id="d-${id}">
                <label for="" class="text-center h5 mt-2">${cand.value}</label>
                <button class="btn btn-danger" id="${id}" onclick="del(this)">Delete</button>
            </div>
    `
    
    const vote = new Numero(0);
    localStorage.setItem(cand.value, JSON.stringify(vote));
    a.push(id)
    id++
    document.getElementById('container').innerHTML += html
    cand.value = "";
}

const del = (e) => {
    console.log(document.getElementById(`d-${e.id}`))
    const parent = e.parentElement;
    // console.log(parent.children[0].innerText)
    document.getElementById('container').removeChild(parent);
    localStorage.removeItem(parent.children[0].innerText);
}


// const cand = document.querySelector('#candidato');
    
//     const div = document.createElement('div');
//     div.className = "element";
    
//     const p = document.createElement('p');
//     p.innerText = cand.value;

//     const btn_delete = document.createElement('button');
//     btn_delete.className = "delete"
//     btn_delete.textContent = "Delete";
//     const vote = new Numero(0);
//     localStorage.setItem(cand.value, JSON.stringify(vote));
//     btn_delete.addEventListener("click", () => {
//         const parent = btn_delete.parentElement;
//         document.getElementById('container').removeChild(parent);
//         localStorage.removeItem(parent.firstChild.innerText);
//     })

//     div.appendChild(p);
//     div.appendChild(btn_delete);