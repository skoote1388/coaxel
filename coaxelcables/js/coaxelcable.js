window.onload=function() {
	var query = ["input", "select"];
	for(var q=0; q< query.length; q++){
		var inp= document.querySelectorAll(query[q]);
		for (var i=0; i < inp.length; i++) {
			//validate user input as it happens for invalid data, only numeric 
			inp[i].onkeyup= validation;
			//validate user input 1ce the user moves away from input box
			//check for missing input and length 
		  	inp[i].onblur = validateRequired;
		}
	}
	
	var button = document.getElementById("submit-button");
	button.onclick = validateRequiredOnSubmit;
};

function validation (event) {
  var p = this.parentNode.querySelector("p");
  var name = this.name;
  var number= this.number;
  var valid = true;
  
  
  if (name == "customer-name"){
  	if (!validateName(this)) {
  		p.innerHTML=this.getAttribute("title");
  		this.style.backgroundColor="yellow";
  		this.focus();
  		valid=false;
  	}
  	else {
  		p.innerHTML ="";
  		this.style.backgroundColor = "white";
  	}
  }
  else if(name == "city"){
  if (!validateCity(this)) {
  		p.innerHTML=this.getAttribute("title");
  		this.style.backgroundColor="yellow";
  		this.focus();
  		valid=false;
  	}
  	else {
  		p.innerHTML ="";
  		this.style.backgroundColor = "white";
  	
  	}
  }
   else if(name == "postal-code"){
  if (!numeric(this)) {
  		p.innerHTML=this.getAttribute("title");
  		this.style.backgroundColor="yellow";
  		this.focus();
  		valid=false;
  	}
  	else {
  		p.innerHTML ="";
  		this.style.backgroundColor = "white";
  	
  	}
  }
    else if(name == "phone-Number"){
  if (!numeric(this)) {
  		p.innerHTML=this.getAttribute("title");
  		this.style.backgroundColor="yellow";
  		this.focus();
  		valid=false;
  	}
  	else {
  		p.innerHTML ="";
  		this.style.backgroundColor = "white";
  	
  	}
  }
}

function validateRequired (event) {
	
  
}

function validateRequiredOnSubmit (event) {
	  
}

function ValidateCity(name){
	var valid = true;
	var letters =/^[A-Za-z ]+$/;
	
	if (!name.value.match(letters)){
	 	valid= false;
	 }
	
	 	return valid;
}
function validateName(name){
	var valid = true;
	var letters =/^[A-Za-z ]+$/;
	
	if (!name.value.match(letters)){
	 	valid= false;
	 }
	
	 	return valid;
}

function alphabetic(name){
	var valid = true;
	var letters =/^[A-Za-z]+$/;
	
	if (!name.value.match(letters)){
	 	valid= false;
	 }
	
	 	return valid;
}
function numeric(number){
	var valid = true;
	var digits =/^[0-9-]+$/;
	
	if (!number.value.match(digits)){
	 	valid= false;
	 }
	
	 	return valid;
