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
</head>
<body>
<center><h1>`+settings.name+`</h1></center>
</body>
</html>
`;