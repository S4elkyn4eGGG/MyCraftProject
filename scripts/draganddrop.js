document.addEventListener('dragstart', draggiStart);
document.addEventListener('dragend', dragEnd);
document.addEventListener("dragover", dragOver);
document.addEventListener("drop", drop); 

//функция, вызываемая при начале перетаскивания
function draggiStart(event) {
    ifKotelBgCol = true;//переприсвоение
    event.dataTransfer.setData("Text", event.target.id);//записываем в setData id элемента, который берем 
    bgDragCol = window.getComputedStyle(event.target).backgroundColor;//сохраняем цвет элемента 
    event.target.style.backgroundColor = 'yellow';//задаем перетаскиваемому элементу желтый цвет
}
//функция, вызываемая при окончании перетаскивания (после drop)
function dragEnd(event) {
    if(ifKotelBgCol) {//если дропнули в котел, то переменная будет false и ей присвоится солатовый цвет, иначе тот, который был до перетаскивания
        event.target.style.backgroundColor = bgDragCol;
    }
    else {
        event.target.style.backgroundColor = 'rgb(160, 177, 157)';
    }
}
//вызывается при наведении перетаскиваемого элемента на некий другой элемент
function dragOver(event) {
    event.preventDefault();
}
//вызывается при отпуске перетаскиваемого элемента
function drop(event) {
    event.preventDefault();
    if ( event.target.id === "kotel" ) {
        let data = event.dataTransfer.getData("Text"),
            el = document.getElementById(data);
        event.target.appendChild(el);  
        ifKotelBgCol = false;
    }
}