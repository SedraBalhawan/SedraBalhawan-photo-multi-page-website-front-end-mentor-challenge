//let photosnap = document.getElementById('photosnap')
//let planets = document.getElementById('planets')
//let intro = document.getElementById('intro')
//let photosnap2 = document.getElementById('photosnap2')
//let planets2 = document.getElementById('planets2')
//let intro2 = document.getElementById('intro2')

//photosnap.addEventListener("mouseover", function() {
  //if (!photosnap2.classList.contains('active')) {
    //photosnap2.classList.add('active');
  //} else {
    //photosnap2.classList.remove('active');
//  }
//});
//planets.addEventListener("mouseenter", function() {
////  planets2.classList.add("active");
//});
//intro.addEventListener("mouseenter", function() {
//  intro2.classList.add("active");
//});
//photosnap.addEventListener("mouseleave", function() {
//  photosnap2.classList.remove("active");
//});
//planets.addEventListener("mouseleave", function() {
//  planets2.classList.remove("active");
//});
//intro.addEventListener("mouseleave", function() {
//  intro2.classList.remove("active");
//});


//wrong input
let input = document.getElementById('input')
var right = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//let invalid = document.getElementById('invalid')
let invalid2 = document.getElementById('invalid2')
//let invalid3 = document.getElementById('invalid3')
//let input = document.getElementById('input')
let input2 = document.getElementById('input2')
//let input3 = document.getElementById('input3')
input2.addEventListener('blur', function(){
if ((input2.value === '')) {
  invalid2.classList.remove('invalid')
  input2.classList.remove('invalid')
  return;
}
  if (right.test(input2.value)) {
    //invalid.classList.remove('invalid')
    invalid2.classList.remove('invalid')
    //invalid3.classList.remove('invalid')
    //invalid.classList.remove('invalid')
    input2.classList.remove('invalid')
    //invalid3.classList.remove('invalid')
  }
  else {
    //invalid.classList.add('invalid')
    invalid2.classList.add('invalid')
    //invalid3.classList.remove('invalid')
    //invalid.classList.remove('invalid')
    input2.classList.add('invalid')
    //invalid3.classList.remove('invalid')
  }


})
