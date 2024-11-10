let inputForm = document.getElementById("resumeInputform");
let staticResume = document.getElementById("StaticResumeCreate");

let crtRsmJs = document.getElementById("crt-rsm-js") 

let generateButton = document.getElementById("Generatorbtn"); //generate form
let p1 =document.getElementById("p1");

crtRsmJs.addEventListener("click",function(event){
    event.preventDefault();
 
    staticResume.style.display="none";
    inputForm.style.display="block";
    crtRsmJs.style.display="none";
   p1.style.display="none";
   crtRsmJs.textContent = "Edit Button"


});

generateButton.addEventListener("click",function(event){
    event.preventDefault();

     staticResume.style.display="block";
    inputForm.style.display="none"
    crtRsmJs.style.display="block";
   p1.style.display="block";
    
    let  namefield = document.getElementById("namefield").value;
    document.getElementById("staticName").textContent = namefield;

    let professionField = document.getElementById("professionField").value;
    document.getElementById("professionP").textContent = professionField

    let contactfield  = document.getElementById("contactfield").value;
    document.getElementById("contactid").textContent= contactfield;

    let email = document.getElementById("emailfield").value
    document.getElementById("emailStatic").textContent = email;

    let addressform = document.getElementById("addressfield").value
    document.getElementById("textEmail").textContent = addressform

    // EDUCATION---------

    let edutextfield = document.getElementById("edutextfield").value
    document.getElementById("eduText").textContent = edutextfield

    let eduYearfield = document.getElementById("eduYearfield").value
    document.getElementById("eduYear").textContent = eduYearfield

    let eduDetailfield = document.getElementById("eduDetailfield").value
    document.getElementById("eduDetail").textContent = eduDetailfield

    // education End-----------------

    // secondary Section
    let SecField = document.getElementById("SecField").value
    document.getElementById("SecFieldUi").textContent = SecField

    let SecField2 = document.getElementById("SecField2").value
    document.getElementById("SecYearUi").textContent = SecField2

    let SecField3 = document.getElementById("SecField3").value
    document.getElementById("SecDetailUi").textContent = SecField3
    // secondary Section



    // work expirences
    let Wetextfield = document.getElementById("Wetextfield").value

    document.getElementById("wetext").textContent = Wetextfield

    let Wetextfield2 = document.getElementById("Wetextfield2").value
    
    document.getElementById("weDetail").textContent = Wetextfield2

// ----------------------------------------
// -----------------------------------------

    let Wetextfield3 = document.getElementById("Wetextfield3").value

    document.getElementById("wetext2").textContent = Wetextfield3

    let Wetextfield4 = document.getElementById("Wetextfield4").value
    
    document.getElementById("weDetail2").textContent = Wetextfield4
   
    // work expirences end

    // Skills Start
  
    let formskills = document.getElementById("formskills").value;

let formskillsArray = formskills.split(",").map((item)=>item.trim())

let staticSkillUi = document.getElementById("staticSkill");
staticSkillUi.innerHTML="";
formskillsArray.forEach(element => {
    let li =document.createElement("li");
    li.textContent=element;
    staticSkillUi.appendChild(li)});
    // Skills End

    // Languages ------------Start
    let lgForm = document.getElementById("lgForm").value;

    let lgFormArray = lgForm.split(",").map((item)=>item.trim())
    
    let lgStatic = document.getElementById("lgStatic");
    lgStatic.innerHTML="";
    lgFormArray.forEach(element => {
        let li =document.createElement("li");
        li.textContent=element;
        lgStatic.appendChild(li)});
    // Languages ------------Finish
});
