
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
