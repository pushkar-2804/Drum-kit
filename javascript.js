
// Detecting mouseclick
for (let num= 0; num<document.getElementsByClassName('instrument').length;num++) 
    document.getElementsByClassName('instrument')[num].addEventListener('click',handleClick);

function handleClick(){
    const letter = this.innerHTML;
    makeSound(letter);
    
}

// Detecting keyboard press
addEventListener('keypress',function(event){
    makeSound(event.key);
});

// Playing sound
function makeSound(key){
    switch (key){
        case 'w':
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;
        case 'a':
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;
        case 's':
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;
        case 'd':
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;
        case 'j':
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;
        case 'k':
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;
        case 'l':
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;
    }
    
}