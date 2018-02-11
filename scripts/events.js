document.onload = loader();
selectWat.addEventListener("change", spisokReceptov, false);
selectRecept.addEventListener("change", metka, false);

//Функция, вызывающаяся при загрузке страницы
function loader() {
    spisokReceptov();//Вызываем функцию обновляющую список рецептов
    let fragment = document.createDocumentFragment();          
    for(let i = 0, j = componentsMassiv.length; i < j; i++) {
        let newDiv = document.createElement("div");
        newDiv.textContent = componentsMassiv[i].name;
        newDiv.className = "newDIV";
        newDiv.id = `newDIV${i}`;
        newDiv.draggable = 'true';        
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
            for(let i = 0, j = weaponMassiv.length; i < j; i++) {
                let newSelectRecept = document.createElement("option");
                newSelectRecept.textContent = weaponMassiv[i].name;
                fragment.appendChild(newSelectRecept);
            }
            selectRecept.appendChild(fragment);
            break;
        }
        default: {       
            for(let i = 0, j = shmotMassiv.length; i < j; i++) {
                let newSelectRecept = document.createElement("option");
                newSelectRecept.textContent = shmotMassiv[i].name;
                fragment.appendChild(newSelectRecept);;
            }
            selectRecept.appendChild(fragment);
            break;
        }    
    }
}

//Функция,подсвечивающая компоненты, нужные для выбранного рецепта
function metka() {
    let mass = [],
        objRecept,
        newDIVmass = document.querySelectorAll('div.newDIV');
    //обнуляем выбор, перекрашивая все элементы в стандартный цвет
    for(let i = 0, j = newDIVmass.length; i < j; i++) {
        newDIVmass[i].style.backgroundColor = "rgb(241, 194, 204)";
    }
    //проверяем что выбрано в категории
    if(selectWat.value === "Оружие") {
        mass = weaponMassiv;
    }
    else {
        mass = shmotMassiv;
    }   
    objRecept = mass[selectRecept.selectedIndex].recept; //присваиваем переменной свойство "recept" объекта массива, соответствующего, выбранному рецепту 
    //проверяем, если текст компонента является вложенным в массив mass, то перекрашиваем его
    for(let i = 0, j = components.children.length; i < j; i++) {
        let hasOwnComponent = objRecept.indexOf(components.children[i].textContent);//возвращает индекс вхождения элемента в массив или -1, если он в него не входит
        if(hasOwnComponent > -1) {
            components.children[i].style.backgroundColor = 'green';
        }
    }
}
