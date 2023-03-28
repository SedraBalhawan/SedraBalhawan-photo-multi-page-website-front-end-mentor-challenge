let button = document.getElementById('button');
let circle = document.getElementById('circle');

let textYear1 = document.getElementById('textYear1');
let priceYear1 = document.getElementById('priceYear1');
let perMonthYear1 = document.getElementById('perMonthYear1');
let textYear2 = document.getElementById('textYear2');
let priceYear2 = document.getElementById('priceYear2');
let perMonthYear2 = document.getElementById('perMonthYear2');
let textYear3 = document.getElementById('textYear3');
let priceYear3 = document.getElementById('priceYear3');
let perMonthYear3 = document.getElementById('perMonthYear3');

let text1 = document.getElementById('text1');
let price1 = document.getElementById('price1');
let perMonth1 = document.getElementById('perMonth1');
let text2 = document.getElementById('text2');
let price2 = document.getElementById('price2');
let perMonth2 = document.getElementById('perMonth2');
let text3 = document.getElementById('text3');
let price3 = document.getElementById('price3');
let perMonth3 = document.getElementById('perMonth3');
let basic2 = document.getElementById('basic2');
let pro2 = document.getElementById('pro2');
let business2 = document.getElementById('business2');


button.addEventListener('click', function(){
  button.classList.toggle('active')
  circle.classList.toggle('active')
  textYear1.classList.toggle('active')
  priceYear1.classList.toggle('active')
  perMonthYear1.classList.toggle('active')
  textYear2.classList.toggle('active')
  priceYear2.classList.toggle('active')
  perMonthYear2.classList.toggle('active')
  textYear3.classList.toggle('active')
  priceYear3.classList.toggle('active')
  perMonthYear3.classList.toggle('active')
  basic2.classList.toggle('active')
  pro2.classList.toggle('active')
  business2.classList.toggle('active')

  text1.classList.toggle('active')
  price1.classList.toggle('active')
  perMonth1.classList.toggle('active')
  text2.classList.toggle('active')
  price2.classList.toggle('active')
  perMonth2.classList.toggle('active')
  text3.classList.toggle('active')
  price3.classList.toggle('active')
  perMonth3.classList.toggle('active')
})

let menu = document.getElementById('menu')
let storiesFearuresPricing = document.getElementById('stories-fearures-pricing')
let getAnInvite = document.getElementById('get-an-invite')
let snapper = document.getElementById('snapper')
let nav = document.getElementById('nav')
let getAnInvite2 = document.getElementById('get-an-invite2')
let close = document.getElementById('close')
menu.addEventListener('click', function(){
  storiesFearuresPricing.classList.toggle('active')
  getAnInvite.classList.toggle('active')
  getAnInvite2.classList.toggle('active')
  close.classList.add('active')
  menu.classList.add('active2')
})
close.addEventListener('click', function(){
  storiesFearuresPricing.classList.remove('active')
  getAnInvite.classList.remove('active')
  getAnInvite2.classList.remove('active')
  close.classList.remove('active')
  menu.classList.remove('active2')
})
