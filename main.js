//  selecttors
var emailEl = document.querySelector('.email');
var emailElm = document.querySelector('.emailm');
var errorEl = document.querySelector('.errort');
var errorElm = document.querySelector('.errortm');
var errMs = document.querySelector('.errMs');
var submitBtn = document.getElementById('submit');
var submitBtnm = document.getElementById('submitm');
var modal = document.querySelector(".modal");
var closeModalBtn = document.querySelector(".dismiss");
var overlay = document.querySelector(".overlay");
var displayEm = document.getElementById('em');

var noError = true;

//   large screen(desktop) validation
const validate = () =>{
    var valueEm = emailEl.value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   if(valueEm == ''){
     errorEl.innerHTML = "Email is required!";
     emailEl.classList.add('error');
     noError = false;
   }else if(!filter.test(valueEm)){
    errorEl.innerHTML = "Email is not valid!";
    emailEl.classList.add('error');
    noError = false;
   }else{
     errorEl.innerHTML = "";
     emailEl.classList.remove('error');
     noError =true;
   }
   displayEm.innerHTML =  valueEm ;

}

  const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
 }
    
  submitBtn.addEventListener('click', function(e){
     e.preventDefault();
     validate();

      if(noError){
        openModal();
       }//else{
    //    errMs.innerHTML = "form not submited try again!";
    //   }
  })
  const closeModal = () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };
 
  closeModalBtn.addEventListener("click", closeModal);



//   small screen(mobile) validation
const validateM = () =>{
    var valueM = emailElm.value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   if(valueM == ''){
     errorElm.innerHTML = "Email is required!";
     emailElm.classList.add('error');
     noError = false;
   }else if(!filter.test(valueM)){
    errorElm.innerHTML = "Email is not valid!";
    emailElm.classList.add('error');
    noError = false;
   }else{
     errorElm.innerHTML = "";
     emailElm.classList.remove('error');
     noError = true;
   }
   displayEm.innerHTML = valueM;
}

  submitBtnm.addEventListener('click', function(e){
    e.preventDefault();
    validateM();

    if(noError){
        openModal();
       }
 })