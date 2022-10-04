import React from 'react';
import  ReactDOM from 'react-dom';
import "./index.css"


let nokia = new Date();
let power = '';
let cake = '';

nokia = nokia.getHours();
const water = {};
let idk = prompt("Please enter your name !", "Amit");
if(idk === null || idk === ""){
 window.alert("You cannot Procced Without Name")
 ReactDOM.render(
  <>
  <h1>You cannot Procced Without Name</h1>
  <h2>Refresh The Page Again</h2>
  </>
 )
}
if(nokia >= 1 && nokia <12){
  power = "Good Morning";
  water.color = "green"
  cake = 'https://img.icons8.com/emoji/344/sun-behind-cloud.png'
}else if(nokia >= 12 && nokia < 19){
  power = "Good AfterNoon";
  water.color = "Orange"
cake = 'https://img.icons8.com/color/344/sun--v1.png'


} else {
  power = "Good Night";
  water.color = "Black"
  cake = "https://img.icons8.com/bubbles/344/moon-satellite.png";
}



// let time = new Date()
// let br = time.getDate() && time.

// var kr = br.toString()
ReactDOM.render(
  <>
<body>
  <div>
 <img src= {cake} alt='alt'></img>
<h1>
  Hello {idk}, <span style={water}>{power}</span>
</h1>




</div>
</body>
</>
, document.getElementById('root'))

