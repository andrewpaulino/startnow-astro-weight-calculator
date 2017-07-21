// Write your JavaScript code here!
var select = document.getElementById("planets");
var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];
     for(var i = 0; i < planets.length; i++) {
    var opt = planets[i][0]
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);  
}
   


function calculateWeight(planetName, weight){
   var weight = document.getElementById('userWeight').value;
    var planetNames = document.getElementById("planets").value;
    for(var i = 0; i < planets.length; i++){
        if(planets[i][0] === planetNames){
          return  weight * planets[i][1];
       }
    }

}

function handleClickEvent(theResults){
        var planetsNames = document.getElementById("planets").value;
        
        var results = calculateWeight();
    document.getElementById('output').innerHTML = "If you were on,     "  +  planetsNames  + "    you would weigh    " +    results + "lbs!";
}
document.getElementById('calculateButton').onclick = function() {handleClickEvent()};