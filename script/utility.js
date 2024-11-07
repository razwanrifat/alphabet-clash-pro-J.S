
function hideEllementById(elementId) {
    let elementIdS=document.getElementById(elementId)
    elementIdS.classList.add('hidden')
    
}

function addEllementById(elementId) {
    let elementIdS=document.getElementById(elementId)
    elementIdS.classList.remove('hidden')
    
}

function setAlphabetColourByElementID(belementId) {
     let belementIds=document.getElementById(belementId)
     belementIds.classList.add('bg-orange-400')
    console.log(' setAlphabetColourByElementID is clicked', belementIds)
    
}

function removeAlphabetColourByElementID(belementId) {
    let belementIds=document.getElementById(belementId)
    belementIds.classList.remove('bg-orange-400')
   console.log(' removeAlphabetColourByElementID is clicked')
   
}


function getTextEllementById(elementId) {
    let elementIdS=document.getElementById(elementId)
    const elementIdSText= elementIdS.innerText
    const element= parseInt(elementIdSText)
    console.log('getTextEllementById : ',element);
    
    return element
    
}

function setTextEllementById(elementId,value) {
    let element=document.getElementById(elementId)
    element.innerText= value;

}


function getElementTextByID(elementId) {
    let elementIdS=document.getElementById(elementId)
    const elementIdSText= elementIdS.innerText
    return elementIdSText;

}



function getAlphabet() {
    const alphabetString="abcdefghijklmnopqrstuvwxyz"; // ekhon String er moto kore Aschey.
    const alphabets=alphabetString.split('')   // ekhon arry er moto kore Aschey.
    console.log(alphabets); 
    

   const randomNumber = Math.random()*25
   const index = Math.round(randomNumber) // randomNumber float e thake , tai int e convert korar jonno round use kora hoise 
   //console.log(index);


    const alphabet = alphabets[index];
    console.log(alphabet);
    
    return alphabet ;
}
