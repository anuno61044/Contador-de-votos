function see_results() {
    let a = [];
    var max = 0;
    for (let index = 0; index < localStorage.length; index++) {
        document.getElementById('resultados').innerHTML += `
            <div class="d-flex justify-content-center mt-4">
                <p class="m-0 p-0 h5">${localStorage.key(index)}</p>
                <span class="badge bg-primary text-light ms-3 m-l">${JSON.parse(localStorage.getItem(localStorage.key(index))).numero}</span>
            </div>
        `
        console.log(localStorage.key(index));
    }
    
    document.getElementById('btn-results').className = 'd-none';
}

function reset() {
    for (let index = 0; index < localStorage.length; index++) {
        localStorage.clear();
    }
}