// function checkAddress(fieldId){if(document.getElementById(fieldId).value === " ")
// {alert("Email address required")}
// }
// function checkAddress(fieldId){
//     if(document.getElementById (fieldId) .value === ''){alert('Email address is required')}
// }
// function checkAddress(fieldId){ 
//     var emailValue = document.getElementById(fieldId).value
//     if(emailValue === ''){alert('Email is required')}
//     else{alert(`you email is: ${emailValue}`)}
// }
function setAreaName(){
var zipCode= + document.getElementById("zipcode").value
var area = document.getElementById("area")


}
if(zipCode === 45200){area.value = "Golra";}
else if(zipCode === 44210){area.value = "Islamabd F-7"}
else if(zipCode === 44320){area.value = "Islamabad federal board"}
else if(zipCode === 44310){area.value = "Mianwali"}
else{alert('Invalid zipcode')}