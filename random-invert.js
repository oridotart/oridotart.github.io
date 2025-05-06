// random-invert.js (updated)  
const image = document.getElementById('cover-image');  
if (Math.random() > 0.5) {  
  image.style.filter = 'invert(1)';  
  document.body.style.backgroundColor = 'black';  
}  
