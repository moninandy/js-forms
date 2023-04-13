
// getting a value through quer selec in forms is wrong practice
  // let ele= document.querySelector(".name");
   //console.log(ele);


   //another methods
 const formele= document.forms.generalform;
 const btnele=document.querySelector("form button");
 formele.addEventListener("submit",(event)=>{

 event.preventDefault();

 const {name, email ,terms,gender, phnumber} = formele.elements;
 console.log(name.value,email.value,terms.value,gender.value,phnumber.value);
  
  
 });
  


