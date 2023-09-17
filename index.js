// Import settings.json
import settings from "./settings.json";

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>`+settings.name+` - Black Hole Gaming</title>
  <style>
    @import url('`+settings.font.url+`');

    h1 {
      font-family: '`+settings.font.name+`', `+settings.font.family+`, `+settings.font.alt+`, `+settings.font.alt-family+`;
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