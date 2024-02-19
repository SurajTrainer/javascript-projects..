const noteContainer = document.querySelector(".notes-container")
const btn = document.querySelector(".btn")
const inputBox = document.querySelectorAll(".input-box")



btn.addEventListener('click',()=>{
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = 'img/delete.svg';
    noteContainer.appendChild(inputBox).appendChild(img)
})

function showNotes() {
    noteContainer.innerHTML = localStorage.getItem('notes')
}
showNotes();


function updateStorage() {
    localStorage.setItem('notes',noteContainer.innerHTML)
}



noteContainer.addEventListener('click',(e)=> {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateStorage();
    }else if (e.target.tagName === 'P') {
        notes = document.querySelectorAll('.input-box')
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage()
            }
            
        });
    }
})

document.addEventListener('keydown',event => {
    if (event.key ==='Enter') {
        document.execCommand('insertLIneBreak')
        event.preventDefault();
        
    }
})


