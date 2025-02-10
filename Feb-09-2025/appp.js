function chat(){
    let input = document.getElementById('input').value.toLowerCase();
    let output="";
    if(input === 'what is your name?'){output = 'My name is Azizullah'}
    else if(input === 'what is your district?'){output= 'My district is Mianwali'}
    else if(input === 'what is your hobby?'){output = 'Learning is my hobby'}
    else{output = 'Sorry: I could not understand your question'}
    document.getElementById('ans').innerText = output;

}