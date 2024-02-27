// document.addEventListener("DOMContentLoaded", () => {
//     const draggableElement = document.getElementById("draggable");
//     const droppableElement = document.getElementById("droppable");

//     // Event listener for the drag start
//     draggableElement.addEventListener("dragstart", (event) => {
//         // Set the data being dragged
//         event.dataTransfer.setData("text/plain", draggableElement.textContent);
//     });

//     // Event listener for the drag over
//     droppableElement.addEventListener("dragover", (event) => {
//         // Prevent default to enable drop
//         event.preventDefault();
//     });

//     // Event listener for the drop
//     droppableElement.addEventListener("drop", (event) => {
//         // Prevent default to enable drop
//         event.preventDefault();

//         // Get the data being dropped
//         const data = event.dataTransfer.getData("text/plain");

//         // Append the dropped data to the droppable element
//         droppableElement.innerHTML = data;
//     });
// });










   
    const draggables = document.querySelectorAll(".draggable");
    const droppableElement = document.getElementById("droppable");

    for (const draggable of draggables) {
        draggable.addEventListener('dragstart',function(e){
            let selected = e.target;


            droppableElement.addEventListener('dragover',function(e){
                e.preventDefault();
            })

            droppableElement.addEventListener('drop',function(e){
                droppableElement.appendChild(selected);
                selected = null;    
            })
        })
    }