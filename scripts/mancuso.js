const close = document.getElementsByClassName('close');
const menu = document.getElementsByTagName('aside')[0];
const links = document.getElementsByClassName('link');
const header = document.querySelector('header');
const aboutMe = document.getElementById('about_me');
const projects = document.getElementById('project_examples');
const headerText = "adrianMancuso;";
const aboutMeText = ">>>DJ turned full stack web developer.\n I enjoy: problem solving, writing clean code, trying new things && eating fresh bread. >>>Contact:adrian.mancuso@gmail.com";

var printLock = false;
var timeout = 35;

var typeText = function (string, location){
  if (printLock)
    return;
  printLock = true;

  Sequencr.for(0, string.length, function(i){
    location.textContent += string[i];
  }, timeout,
  function(){printLock = false});
};

var closeField = function() {
  var currentBox = event.target.parentElement;
  currentBox.classList.add("hidden");
  menu.classList.remove("hidden");
};

var openLink = function(link){
  link.classList.remove("hidden");
}

var hideSideBar = function(){
  menu.classList.add("hidden");
}

var createAboutMe = function(){

  hideSideBar();
  openLink(aboutMe);

  var textField = document.createElement('p');
  aboutMe.appendChild(textField);
  typeText(aboutMeText, textField);

};

var showProjects = function() {
  hideSideBar();
  openLink(projects);
}

window.onload = function(){
  var h1 = document.createElement('h1');
  header.appendChild(h1);
  typeText(headerText, h1);
};

for (var i = close.length - 1; i >= 0; i--) {
  close[i].addEventListener('click', closeField);
};

// for (var i = links.length - 1; i >= 0; i--) {
//   links[i].addEventListener('click', openLink)
// };


var reboot = function() {
  location.reload();
}

links[0].addEventListener('click', createAboutMe);
links[1].addEventListener('click', showProjects);
header.addEventListener('click', reboot);