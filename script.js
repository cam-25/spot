let spot1 = {
    image: "cancunedit.jpg",
    country: " Mexico ",
    city: "Cancun",
    cost: "$5,000"
}

let spot2 = {
    image: "veniceedit.jpg",
    country: "Italy",
    city: "Venice",
    cost: "$7,000"
}

let spots = [spot1, spot2];

let url = document.querySelector(".url");
let country = document.querySelector(".country");
let city = document.querySelector(".city");
let cost = document.querySelector(".cost");
let enter = document.querySelector(".enter");
let display = document.querySelector(".display");

function displaySpots(spot){
    let vacationSpot = `<div class = "spot">
    <img src=${spot.image}></img>
    <h3>${spot.city}</h3>
    <h3>${spot.country}</h3>
    <p> Cost: ${spot.cost}</p>
    </div>`;
    display.insertAdjacentHTML("beforeend", vacationSpot);
}
spots.forEach(spot=>{ displaySpots(spot);
});

add.addEventListener('click',() =>{
    let newSpot = {
        image: url.value ,
        country: country.value ,
        city: city.value ,
        cost: cost.value ,
    };

spots.push(newSpot);
url.value = "";
country.value = "";
city.value = "";
cost.value = "";

display.innerHTML = "";
spots.forEach(spot =>{
    displaySpots(spot);
});
});