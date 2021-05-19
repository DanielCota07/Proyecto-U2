const url = "./flotilla.json";
const list = document.getElementById("list");

fetch(url)
    .then(response => response.json())
    .then(cars => {
        cars.map(car =>{
            let li = document.createElement("li");
            let url = `./Detalles/detalle${car.id}.html`
            li.innerHTML = `
                <a class="hipervinculo" href=${url}>
                    <div class="carros">
                        <img class="carro__imagen" src=${car.url} alt=${car.alter}>
                        <div class="carro__inf">
                            <p class="producto__nombre">Nombre: <span>${car.name}</span></p>
                            <p class="producto__precio">Precio: <span>${car.precio}</span></p>
                        </div>
                    </div>
                </a>`
            list.appendChild(li);
        })
    })
    .catch(error=> {
        console.log(error);
    })
    .finally(()=> {
        console.log("proceso terminado")
    })
