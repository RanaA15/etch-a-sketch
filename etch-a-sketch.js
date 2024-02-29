const container = document.getElementById("etchContainer");

function buttonPrompt(){
    let size = prompt("Enter a number between 0 and 100");

    if (size > 0 && size < 101) {
        container.replaceChildren();
        startGrid(size);
        return size;
    }
    else if (size < 0 || size > 100 || typeof size === 'string') {
        alert("Value must be between 0 and 100");
        return;
    }

}
function startGrid(size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (c = 0; c < (size**2); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
        cell.addEventListener('mouseover', () => {
            cell.style.background = 'black';
        })
    };
};
function clearGrid(){
    container.replaceChildren();
    location.reload();
}
startGrid(16);