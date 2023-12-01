// Start Sidebar
let sidebar = document.querySelector('#sidebar');
let openbtn = document.querySelector('#openbtn');
let closebtn = document.querySelector('#closebtn');

sidebar.style.right = '-450px';

openbtn.addEventListener('click', () => {
  sidebar.style.right = '0';
});

closebtn.addEventListener('click', () => {
  sidebar.style.right = '-450px';
});

// End Sidebar

// Start Dropdown Products

let dd = document.querySelector('#dd');
let btndd = document.querySelector('#list');
let btndd2 = document.querySelector('#list2');

btndd.style.cursor = 'pointer';
btndd2.style.cursor = 'pointer';

dd.style.display = 'none';
btndd2.style.display = 'none';


btndd.addEventListener('click', () => {
  dd.style.display = 'block';
  btndd.style.display = 'none';
  btndd2.style.display = 'block';
});

btndd2.addEventListener('click', () => {
  btndd.style.display = 'block';
  dd.style.display = 'none';
  btndd2.style.display = 'none';
});

// End Dropdown Products

// Start Dropdown Order

let ddorder = document.querySelector('#orderdd');
let orderddbtn = document.querySelector('#orderddbtn');
let orderddbtn2 = document.querySelector('#orderddbtn2');

orderddbtn.style.cursor = 'pointer';
orderddbtn2.style.cursor = 'pointer';

ddorder.style.display = 'none';
orderddbtn2.style.display = 'none';


orderddbtn.addEventListener('click', () => {
  ddorder.style.display = 'block';
  orderddbtn.style.display = 'none';
  orderddbtn2.style.display = 'block';
});

orderddbtn2.addEventListener('click', () => {
  orderddbtn.style.display = 'block';
  ddorder.style.display = 'none';
  orderddbtn2.style.display = 'none';
});

// End Dropdown Order

// Start Dropdown User

let userdd = document.querySelector('#userdd');
let userddbtn = document.querySelector('#userddbtn');
let userddbtn2 = document.querySelector('#userddbtn2');

userddbtn.style.cursor = 'pointer';
userddbtn2.style.cursor = 'pointer';

userdd.style.display = 'none';
userddbtn2.style.display = 'none';


userddbtn.addEventListener('click', () => {
  userdd.style.display = 'block';
  userddbtn.style.display = 'none';
  userddbtn2.style.display = 'block';
});

userddbtn2.addEventListener('click', () => {
  userddbtn.style.display = 'block';
  userdd.style.display = 'none';
  userddbtn2.style.display = 'none';
});

// End Dropdown User