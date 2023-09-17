// Import stylesheets
import './style.css';

// Import settings.json
import settings from "./settings.json";
//settings.parse();

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>`+settings.name+` - Black Hole Gaming</title>
  <link href="style.css" rel="stylesheet" />
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Tilt+Neon&display=swap');

    h1 {
      font-family: 'Tilt Neon', cursive;
    }
    
    body {
      background-color: #000000;
      color: #FFFFFF;
    }
  </style>
</head>
<body>
<center><h1>`+settings.name+`</h1></center>
</body>
</html>
`;