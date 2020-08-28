let nameInput = document.getElementById('name-input');
let button = document.getElementById('press-me');
let fate = document.getElementById('your-fate');
let warning = document.getElementById('warning');
let spanTag = document.createElement('h2');
let h2 = document.createElement('h2');


let name;
function generateRandomDay(max=1000, min=5) {
    let randomNumber = Math.floor(Math.random() * (max-min) + min)
    console.log(randomNumber)
    return randomNumber
}
function NameLogger(event){
    name = event.target.value;
}

function Logme(e) {
    e.preventDefault()
    if(nameInput.value){
        if(nameInput.value.length>=5){
    console.log(name);
    button.innerText = 'Deciding your fate'
    setInterval(() => {
        if(button.innerText.length==21){
            button.innerText = 'Deciding your fate'
        }
        button.innerText += '.'
    }, 300);
    setTimeout(()=>{
        button.style.display = 'none'
        nameInput.style.display = 'none'
        warning.style.display = 'none';

        spanTag.innerText = `${name}, `;
        spanTag.style.whiteSpace = 'pre'
        spanTag.style.color = 'red';
        fate.append(spanTag)
    h2.innerText = `you're going to get married ${moment().add(generateRandomDay(), 'days').calendar()}!`
    fate.append(h2)
}, 4000)
    
}
else {
    warning.innerHTML = 'Sorry bro, but your name must have at least 5 characters!'
}
}
else {
    warning.innerText = 'Come on man. Put in your name!'
}
}

nameInput.oninput = NameLogger;
button.onclick = Logme;
spanTag.innerText = 'Hey'
spanTag.style.color = 'red'
console.log(spanTag)