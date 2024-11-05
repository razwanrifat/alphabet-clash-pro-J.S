/*
function play() {
    console.log('play button is clicked');
    let homeScreenS=document.getElementById('homeScreen')
    homeScreenS.classList.add('hidden')

    let playGroundScreenS=document.getElementById('playGroundScreen')
    playGroundScreenS.classList.remove('hidden')

}

*/

//..................................

function handelKeyBordButtonPress(event) {
    console.log('key press by keybord');
    const playerPressed=event.key
    console.log('player press ', playerPressed);

    const currentAlphabetElement=document.getElementById('currentAlphabet')
    const currentAlphabet=currentAlphabetElement.innerText
    
    if (currentAlphabet===playerPressed) {
        console.log('press right key');
        
    }

    else{
        console.log('press wrong key');
    }


    
    
}
document.addEventListener('keyup',handelKeyBordButtonPress)

function continueGame() {
    const alphabet= getAlphabet();
    console.log(alphabet);
   
    let currentAlphabetS=document.getElementById('currentAlphabet');
    currentAlphabetS.innerText= alphabet;
    console.log('the alphabet is : ',alphabet);
    setAlphabetColourByElementID(alphabet)
    
   
}

function play() {
    console.log('play button is clicked');
    
    hideEllementById('homeScreen')
    addEllementById('playGroundScreen')
    console.log('screen changed');
    continueGame();
    

}

