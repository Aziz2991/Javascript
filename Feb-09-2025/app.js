
function chat(){
    let question = document.getElementById('input').value.toLowerCase();
    let answer = "";
    if(question === "name"){answer = "Azizullah"}
    else if(question === "what is your education"){answer = "Graduation"}
    else if (question === "which is your district"){answer = "Mianwali"}
    else{answer = "sorry i could not understand"}
    document.getElementById('para').innerText = answer;}