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
    
    const playerPressed=event.key  //find which key press by keybord
    console.log('player press ', playerPressed);
    if (playerPressed=== 'Escape') {
        gameOver();
    }

    const currentAlphabetElement=document.getElementById('currentAlphabet')
    const currentAlphabet=currentAlphabetElement.innerText
    
    if (currentAlphabet===playerPressed) {
        console.log('press right key');

        //update Score(without Function) :
        //const updateScoreElement=document.getElementById('currentScore')
        //const updateScoreText= updateScoreElement.innerText
        //const updateScore=parseInt(updateScgetTextEllementById('currentScore')
        // updateScoreElement.innerText = newScore ;

        //update Score(with Function) :
        const CurrentScore=getTextEllementById('currentScore')
        const newScore= CurrentScore + 1
        setTextEllementById('currentScore',newScore)
        

        removeAlphabetColourByElementID(currentAlphabet)
        continueGame();
        
    }

    else{
        console.log('press wrong key');

                //update Score(without function) :
                // const updateScoreElement=document.getElementById('currentLife')
                // const updateScoreText= updateScoreElement.innerText
                // const updateScore=parseInt(updateScoreText)       
                // const newScore= updateScore - 1
                // updateScoreElement.innerText = newScore ;
                // console.log('u.l',newScore);



                //update Score(without function) :
                const CurrentLife=getTextEllementById('currentLife')
                const newLife= CurrentLife - 1
                setTextEllementById('currentLife',newLife)

                if (newLife===0) {
                    gameOver()
                }


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
    hideEllementById('scoreScreen')

    setTextEllementById('currentLife',5)
    setTextEllementById('currentScore',0)

    continueGame();
    

}

function gameOver() {
    //hide and show screen
    hideEllementById('playGroundScreen')
    addEllementById('scoreScreen')

    //get and set last score
    const LastScore=document.getElementById('currentScore')
    const LastScores=LastScore.innerText //get as string
    console.log('LastScores', LastScores); // get as integer number
    setTextEllementById('lastScore',LastScores)

    //remove BG of alphabet. jate porer bar "PLAY-AGAIN" dile o ager colour gula selected obostay na thake 
    const colorAlphabet = getElementTextByID('currentAlphabet');
    console.log('Current colorAlphabet',colorAlphabet);
    removeAlphabetColourByElementID(colorAlphabet);
    
    

    
}

