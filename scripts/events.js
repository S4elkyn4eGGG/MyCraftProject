var selectWat,
    newDIVmass,
    components,
    selectRecept;
selectRecept = document.getElementById("selectRecept");    
selectWat = document.getElementById('selectWAT');
components = document.getElementById("components");
document.onload = loader();
selectWat.addEventListener("change", spisokReceptov, false);
selectRecept.addEventListener("change", metka, false);
newDIVmass = document.querySelectorAll('div.newDIV')

//Функция, вызывающаяся при загрузке страницы
function loader() {
    spisokReceptov();//Вызываем функцию обновляющую список рецептов
    let fragment = document.createDocumentFragment();          
    for(let i=0, j=componentsMassiv.length; i<j; i++) {
        let newDiv = document.createElement("div");
        newDiv.textContent = componentsMassiv[i].name;
        newDiv.className = "newDIV";
        newDiv.id = `newDIV${i}`;        
        fragment.appendChild(newDiv);
        //Создаем DIV с текстом внутри, равным свойству "name" соответствующего обхекта в массиве 
        //и присваиваем ему id newDIV + номер объекта в массиве и добавляем его во фрагмент, который потом добавим в DIV
    } 
    components.appendChild(fragment);   
}

//Функция, обновляющая список рецептов, при выборе категории
function spisokReceptov() {        
    selectRecept.innerHTML = ''; //Обнуляем список
    let fragment = document.createDocumentFragment(); //Фрагмент, в котором будет список, чтобы при каждой итерации не обращаться к DOM объекту  
    switch(selectWat.value) {
        case 'Оружие': {                        
            for(let i=0, j=weaponMassiv.length; i<j; i++) {
                let newSelectRecept = document.createElement("option");
                newSelectRecept.textContent = weaponMassiv[i].name;
                fragment.appendChild(newSelectRecept);
            }
            selectRecept.appendChild(fragment);
            break;
        }
        default: {       
            for(let i=0, j=shmotMassiv.length; i<j; i++) {
                let newSelectRecept = document.createElement("option");
                newSelectRecept.textContent = shmotMassiv[i].name;
                fragment.appendChild(newSelectRecept);;
            }
            selectRecept.appendChild(fragment);
            break;
        }    
    }
}

function metka() {
    var mass = [];
    for(let i=0; i<newDIVmass.length; i++) {
        newDIVmass[i].style.backgroundColor = "rgb(241, 194, 204)";
    }

    for(let i=0; i<componentsMassiv.length; i++) {
        for(let j=0; j<componentsMassiv[i].recept.length; j++) {
            if(componentsMassiv[i].recept[j] === selectRecept.value) {
                mass.push(componentsMassiv[i].name);
            }
        } 
    }

    for(let i=0; i<newDIVmass.length; i++) {
        let el = document.getElementById(`newDIV${i}`);
        for(let j=0; j<mass.length; j++) {
            if(newDIVmass[i].textContent === mass[j]) {
                el.style.backgroundColor = "green";
            }
        }
    }
}

;