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
  <title>`+settings.name+`</title>
  <style>
    @import url('`+settings.font.url+`');

    * {
        margin: 0;
        padding: 0;
    } 

    html { 
      background: url("https://as2.ftcdn.net/v2/jpg/05/59/13/39/1000_F_559133954_0kKDwhaWzU2ltOH4ylCkP1B4f7N6XkPD.jpg") no-repeat center center fixed; 
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    }
    
    body {
      color: `+settings.font.color+`;
      font-family: '`+settings.font.name+`', `+settings.font.family+`, '`+settings.font.alt+`', `+settings.font.alt_family+`;
    }

    .content {
      width: 65%;
      margin: auto;
      background:white;
    }
    p {
      padding-left: 10%;
      padding-right: 10%;
    }
  </style>
</head>
<body>
<div class="content">
<p>
Curabitur potenti duis condimentum arcu. Primis pretium eleifend quis justo natoque pretium netus. Pretium proin aliquet dictum, sit mattis integer auctor maecenas venenatis phasellus! Dictumst consectetur sit elementum rhoncus. Scelerisque ullamcorper auctor quis fringilla ante. Nisl ornare iaculis hendrerit! Turpis donec mattis interdum amet metus posuere tortor magnis proin. Volutpat ipsum luctus habitant quis fusce ultricies ornare? Imperdiet fames feugiat fames venenatis maecenas. Urna parturient pulvinar auctor felis hendrerit sollicitudin. Torquent, lorem turpis venenatis congue. Dignissim ridiculus!
<br/>
<br/>
Neque sagittis dis aliquam himenaeos erat arcu, eu aliquet parturient quam! Malesuada ante nostra, nostra sodales luctus felis aliquam turpis. Ut egestas et nunc facilisi sagittis. Facilisis tincidunt vulputate litora accumsan venenatis pharetra mus eleifend senectus tempus id? Eu lacus montes ultrices consequat mollis ullamcorper netus sapien auctor. Laoreet, parturient enim curabitur dictumst id gravida convallis morbi neque semper enim primis. Laoreet nisi urna cursus. Diam cubilia rutrum eu? Scelerisque tincidunt posuere nisi class cras porta mauris arcu morbi blandit fermentum cum. Vulputate elit mi.
<br/>
<br/>
Eleifend senectus duis erat curae; parturient morbi ultricies aenean neque. Lobortis montes nisl accumsan dis nullam magna adipiscing! Ligula vitae elementum phasellus mattis vivamus interdum pulvinar vel odio purus sapien. Ligula quam tempor penatibus ipsum vel auctor lorem turpis pellentesque dis? Dis posuere vehicula lectus ligula eget aliquam torquent augue lectus. Vel maecenas erat lacinia integer condimentum dictumst lacinia in magna facilisi!
<br/>
<br/>
Pellentesque velit urna risus pellentesque magna proin tempus. Ridiculus venenatis cum magnis. Quisque eleifend proin consectetur libero interdum quis faucibus metus suspendisse suscipit. Consequat interdum consectetur nostra curae; mi habitant nam vestibulum? Placerat ut nostra dis posuere netus semper sollicitudin vitae fusce nulla risus? Potenti mauris sed cum cras taciti litora velit.
<br/>
<br/>
Tempor porta sapien dictumst? Risus taciti euismod tempus maecenas porttitor. Est varius iaculis rhoncus habitasse bibendum, integer suscipit himenaeos! Velit dignissim fusce cum, mattis erat primis phasellus amet tortor. Augue nam fusce semper aliquet condimentum adipiscing. Pharetra egestas mauris laoreet sem risus a habitant ullamcorper tempor lacinia augue. Mi quis dictum mollis viverra! Leo eros urna, sed nascetur eu placerat purus! Torquent feugiat, nulla in nulla platea adipiscing facilisi tristique nullam nostra risus facilisi. Dictumst erat etiam dis velit torquent duis mus lorem congue?
</p>
</div>
</body>
</html>
`;