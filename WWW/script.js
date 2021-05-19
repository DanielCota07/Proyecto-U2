const url = "./flotilla.json";
const list = document.getElementById("list");

fetch(url)
    .then(response => response.json())
    .then(cars => {
        cars.map(car =>{
            let li = document.createElement("li");
            li.innerHTML = `
                <a href="detalle.html">
                    <img class="carro__imagen" src=${car.url} alt=${car.alter}>
                    <div class="carro__inf">
                        <p class="producto__nombre">${car.name}</p>
                        <p class="producto__precio">$</p>
                    </div>
                </a>`
            list.appendChild(li);
        })
    })
    .catch(error=> {
        console.log(error);
        ///document.getElementById("error").innerHTML = error.message;
    })
    .finally(()=> {
        console.log("proceso terminado")
    })
