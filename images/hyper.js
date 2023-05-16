function setPhotos(){
for(let i=1;i<65;i++){
   const pic= document.createElement('img');
   pic.setAttribute("src",`graduates${i}.png`)
    document.getElementById('container-graduates').appendChild(pic);
}
}
setPhotos();
const modal = document.getElementById("myModal");
const btn1 = document.getElementById("myBtn1");
const span = document.getElementsByClassName("close")[0];
const emailField2 = document.getElementById("email2");
const telField2 = document.getElementById("tel2");
const nameField2 = document.getElementById("name2");
const emailField3 = document.getElementById("email3");
const telField3 = document.getElementById("tel3");
const nameField3 = document.getElementById("name3");
const careerbtn= document.getElementById('career3');
const btn = document.getElementById("myBtn");
const commonQuestions= document.getElementById('container-q');
const fourSteps= document.getElementById('how-its-work-container');
const hamburgerBtn= document.getElementById('btn-container');
const modal1 = document.getElementById("modal1");
const span1 = document.getElementById("span1");
const emailField = document.getElementById("email");
const telField = document.getElementById("tel");
const nameField = document.getElementById("name");
const myBtn3 = document.getElementById("myBtn3");
function addAlertsToFields(){
alertEmptyField(emailField2);
alertEmptyField(telField2);
alertEmptyField(nameField2);
alertEmptyField(emailField3);
alertEmptyField(telField3);
alertEmptyField(nameField3);
alertEmptyField(emailField);
alertEmptyField(telField);
alertEmptyField(nameField);
}
careerbtn.addEventListener("click",(event)=>{
  if(event.target.id===null)
      return false
  if(document.getElementById('career4').classList.contains('none'))
  document.getElementById('career4').classList.remove('none');
  else
  document.getElementById('career4').classList.add('none');
});
function closeQuestion(event){
  document.getElementById(""+event.target.id+"aa").classList.remove('scale');
  document.getElementById(""+event.target.id+"aa").classList.add('closeScale');
  setTimeout(() => {
  document.getElementById(""+event.target.id+"aa").classList.add('none');
  }, 150); 
  document.getElementById(""+event.target.id+"bb").classList.add('blue-arrow-down');
  document.getElementById(""+event.target.id+"bb").classList.remove('blue-arrow-up');
}
function openQuestion(event){
  document.getElementById(""+event.target.id+"aa").classList.remove('closeScale','none');
  document.getElementById(""+event.target.id+"aa").classList.add('scale');
  document.getElementById(""+event.target.id+"bb").classList.remove('blue-arrow-down');
  document.getElementById(""+event.target.id+"bb").classList.add('blue-arrow-up');
}
function openHumburgerBtn(){
  document.getElementById('line1').classList.add('line1');
  document.getElementById('line2').classList.add('line2');
  document.getElementById('line3').classList.add('line3');
  document.getElementById('myLinks').classList.remove('none');
  }
  function CloseHumburgerBtn(){
    document.getElementById('myLinks').classList.add('none');
    document.getElementById('line1').classList.remove('line1');
    document.getElementById('line2').classList.remove('line2');
    document.getElementById('line3').classList.remove('line3');
  }
  function closeStep(event){
    document.getElementById(""+event.target.id+"aa").classList.add('none');
    document.getElementById(""+event.target.id+"bb").classList.remove('plusRotate');
    document.getElementById(""+event.target.id+"bb").classList.add('plusRetuen');
  }
  function openStep(event){
    document.getElementById(""+event.target.id+"bb").classList.remove('plusRetuen');
    document.getElementById(""+event.target.id+"aa").classList.remove('none');
    document.getElementById(""+event.target.id+"bb").classList.add('plusRotate');
  }
  function checkValidField(parameter){
    if(parameter.value.length>0)
    return true
    else
    return false
  }
  function alertEmptyField(parameter){
    parameter.addEventListener('click', function (event) {
    parameter.classList.add('unvalid')});
  }
commonQuestions.addEventListener("click",(event)=>{
  if(event.target.id===null)
      return false
  if(document.getElementById(""+event.target.id+"aa").classList.contains('none'))  
     openQuestion(event);
  else
    closeQuestion(event);
  });

fourSteps.addEventListener("click",(event)=>{
if(event.target.id===null)return false
if(document.getElementById(""+event.target.id+"aa").classList.contains('none'))
  openStep(event)
else
  closeStep(event)
});
hamburgerBtn.addEventListener("click",(event)=>{
if(event.target.id===null)
    return false
if(document.getElementById('myLinks').classList.contains('none'))
  openHumburgerBtn();
else
  CloseHumburgerBtn();
});
span1.onclick = function() {
  modal1.style.display = "none";
}
myBtn3.onclick = function() {
    isValidEmail=checkValidField(emailField);
    isValidTel=checkValidField(telField);
    isValidName=checkValidField(nameField);
   if(!isValidEmail||!isValidName||!isValidTel)
   return false
  modal.style.display = "block";
  modal1.style.display = "none";
}
addAlertsToFields();
btn.onclick = function() {
  isValidEmail3=checkValidField(emailField3);
  isValidTel3=checkValidField(telField3);
  isValidName3=checkValidField(nameField3);
  if(!isValidEmail3||!isValidName3||!isValidTel3)
     return false

   modal.style.display = "block";
   modal1.style.display = "none";
  }
  btn1.onclick = function() {
    isValidEmail2=checkValidField(emailField2);
    isValidTel2=checkValidField(telField2);
    isValidName2=checkValidField(nameField2);
    if(!isValidEmail2||!isValidName2||!isValidTel2)
          return false

    modal.style.display = "block";
  }
span.onclick = function(){
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}