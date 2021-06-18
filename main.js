const qualified20 = document.querySelector(".basic-price20");
const qualified40 = document.querySelector(".basic-price40");
const qualified80 = document.querySelector(".basic-price80");
const finalPrice20 = document.querySelector(".finalPrice20");
const finalPrice40 = document.querySelector(".finalPrice40");
const finalPrice80 = document.querySelector(".finalPrice80");


var selectedId = 1;

function func1(value) {
  if (value !== selectedId) {
    document.getElementById(value).classList.add("btn-selected");
    document.getElementById(selectedId).classList.remove("btn-selected");
    //todo: update the DOM with the new text
  }
  	selectedId = value;
    updateValues(value);
  	localStorage.setItem("selectedId", selectedId);
  }

function updateValues(value){
	switch(value){
		case 1:
			qualified20.innerText = "$69";
			finalPrice20.innerText = "$1679";
			qualified40.innerText = "$67";
			finalPrice40.innerText = "$3279";
			qualified80.innerText = "$63";
			finalPrice80.innerText = "$5839";
			break;

		case 2: 
			qualified20.innerText = "$79";
			finalPrice20.innerText = "$1879";
			qualified40.innerText = "$77";
			finalPrice40.innerText = "$3679";
			qualified80.innerText = "$72";
			finalPrice80.innerText = "$6559";
			break;

		case 3:
			qualified20.innerText = "$99";
			finalPrice20.innerText = "$2279"; 
			qualified40.innerText = "$96";
			finalPrice40.innerText = "$4439";
			qualified80.innerText = "$90";
			finalPrice80.innerText = "$7999";
			break;

		case 4:
			qualified20.innerText = "$109";
			finalPrice20.innerText = "$2479";
			qualified40.innerText = "$106";
			finalPrice40.innerText = "$4839";
			qualified80.innerText = "$99";
			finalPrice40.innerText = "$8719";
			break;

		case 5:
			qualified20.innerText = "$129";
			finalPrice20.innerText = "$2879"; 
			qualified40.innerText = "$125";
			finalPrice40.innerText = "$5599";
			qualified80.innerText = "$117";
			finalPrice80.innerText = "$10159";
			break;
		}
}

window.onload = function() {
	var selectedId = localStorage.getItem("selectedId");
	if(!selectedId){
		selectedId = 3
		localStorage.setItem("selectedId", selectedId);
	}
	func1(parseInt(selectedId));	
}

document.getElementById("Ent-btn").onclick = function (){
	document.getElementById("userInputText").innerHTML = "Enterprise";
}

document.getElementById("qualified20-btn").onclick = function (){
	document.getElementById("userInputText").innerHTML = "Qualified 20";
}

document.getElementById("qualified40-btn").onclick = function (){
	document.getElementById("userInputText").innerHTML = "Qualified 40";
}

document.getElementById("qualified80-btn").onclick = function (){
	document.getElementById("userInputText").innerHTML = "Qualified 80";
}

function submitModal() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("emailId").value;
	var phone = document.getElementById("phone").value;
	var leadsNumber = document.getElementById("leads").value;
	var totalLeads = document.getElementById("totalLeads").value;
	var crm = document.getElementById("crm").value;
	var agentNumber = document.getElementById("numberOfAgents").value;
	var leadSource = document.getElementById("leadSource").value;
	var medium = document.getElementById("medium").value;

	window.alert("The following are the inputs- name: "+ name + " email: " + email + " phone: "+ phone +" Total leads" + leadsNumber +
	" totalLeads: " + totalLeads + " CRM: " + crm + " agent number " + agentNumber + " lead Source: " + leadSource + " contact channel: " + medium);

	$('#myModal').modal('hide');
}

