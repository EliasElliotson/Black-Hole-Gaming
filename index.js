// Import settings.json
import settings from "./settings.json";

// Create a function to get data from an object by a string
Object.byString = function(o, s) {
  s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  s = s.replace(/^\./, '');           // strip a leading dot
  var a = s.split('.');
  for (var i = 0, n = a.length; i < n; ++i) {
      var k = a[i];
      if (k in o) {
          o = o[k];
      } else {
          return;
      }
  }
  return o;
}

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>`+settings.name+` - `+settings.company+`</title>
  <style>
    @import url('`+settings.font.url+`');
    
    body {
      background-color: #000000;
      color: `+settings.font.color+`;
      font-family: '`+settings.font.name+`', `+settings.font.family+`, '`+settings.font.alt+`', `+settings.font.alt_family+`;
    }
  </style>
</head>
<body>
<center><h1>`+settings.name+`</h1></center>
</body>
</html>
`;