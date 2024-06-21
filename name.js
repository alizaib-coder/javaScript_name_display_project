// const name=['alizaib','abdul waqas',"sufyan lateef" ,'shahzaib']
// const h1=document.querySelector('h1')
// let index=0
// setInterval(() => {
//     h1.textContent=name[index]
//     index++;
//     if(index===name.length){
//         index=0
//     }
// }, 1000);
////////////////////////////////////////////////

// const names = ['alizaib', 'abdul waqas', 'sufyan lateef', 'shahzaib']; // Naam ka array
// const h1 = document.querySelector('h1'); // HTML ka <h1> element
// let arrayIndex = 0; // Track karta hai ke kon se naam pe hain
// let charIndex = 0; // Track karta hai ke kon se character pe hain

// function displayNextCharacter() {
//     if (arrayIndex < names.length) { // Jab tak array ke naam khatam nahi hote
//         const currentName = names[arrayIndex]; // Abhi ka naam array se nikalte hain
        
//         // Current naam ka agla character display karte hain
//         h1.textContent = currentName.slice(0, charIndex + 1); 
//         charIndex++; // Agle character pe move karte hain

//         // Agar current naam ka akhri character aagaya hai
//         if (charIndex === currentName.length) {
//             arrayIndex++; // Next naam pe move karte hain
//             charIndex = 0; // Character index reset karte hain
//             // Ek second ka delay naam badalne se pehle
//             setTimeout(displayNextCharacter, 1000); // 1-second pause between words
//             return; // Function exit karte hain taake recursion na ho
//         }

//         // Har character ke beech me thoda pause rakhte hain
//         setTimeout(displayNextCharacter, 100); // 100 ms pause between characters
//     } else {
//         // Agar sab naam display ho gaye hain, toh shuru se shuru karte hain
//         arrayIndex = 0; // Naam index reset
//         charIndex = 0; // Character index reset
//         setTimeout(displayNextCharacter, 1000); // 1-second pause before restarting
//     }
// }

// displayNextCharacter(); // Function ko pehli baar call karte hain taake process shuru ho
const array = ['alizaib', 'abdul waqas', 'sufyan lateef', 'shahzaib']; 
const h1 = document.querySelector('h1'); 
let arrayIndex = 0; 
let charIndex = 0;

function displayNextCharacter() {
    if (arrayIndex<array.length) {
        const currentName=array[arrayIndex]
        h1.textContent=currentName.slice(0,charIndex + 1);
        charIndex++;
        if(charIndex===currentName.length){
            arrayIndex++ 
            charIndex=0
        setTimeout(displayNextCharacter,1000)
    return
}
setTimeout(displayNextCharacter, 100)
    } else {
        arrayIndex=0;
        charIndex=0;
        setTimeout(displayNextCharacter,1000)

    }
    
}
displayNextCharacter();
