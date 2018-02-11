document.onload = loader();
selectWat.addEventListener("change", spisokReceptov, false);
selectRecept.addEventListener("change", metka, false);

//Функция, собирающая и выводящая собранную вещь
function finalCraft(){
    let mass = shmotMassiv.concat(weaponMassiv),       
        mbBreak = false;
    //берем все массивы с объектами сборок    
    for(let i = 0, j = mass.length; i < j; i++) {
        let  fragment = document.createDocumentFragment();            
        if(mbBreak) {           
            break;
        }
        //проверяем все элементы в котле, если какой-либо есть в рецепте текущего объекта - создаем элемент равный этому компоненту и добавляем его во фрагмент
        for(let k = 0, m = kotel.children.length; k < m; k++) {
            if(mass[i].recept.indexOf(kotel.children[k].textContent) > -1) {
                let el = document.createElement('div');
                el.textContent = kotel.children[k].textContent;
                el.className = "newDIV";
                el.id = kotel.children[k].id;
                el.draggable = 'true';  
                fragment.appendChild(el);
            }
            //если во фрагменте столько же элементов, сколько в рецепте текущего объекта, 
            //создаем новый элемент DIV с текстом имени этого рецепта и добавляем в нужный DIV
            //компоненты, понадобившиеся для сборки рецепта добавляем обратно в форму компонентов
            if(fragment.children.length === mass[i].kolComp()) {
                el = document.createElement('div');
                el.textContent = mass[i].name;
                el.className = "newRec";
                components.appendChild(fragment);
                botDiv.appendChild(el);
                mbBreak = true; 
                //удаляем все компоненты, понадобившиеся для сборки рецепта из котла             
                for(let o = 0, l = kotel.children.length; o < l; o++) {
                    if(kotel.children[o]) {
                        if(mass[i].recept.indexOf(kotel.children[o].textContent) > -1) {   
                            kotel.children[o].remove();  
                            --o;               
                        }
                    }
                }
                break;
            }
        }
    }
}
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
        if(newDIVmass[i].parentElement.id === 'components') {
            newDIVmass[i].style.backgroundColor = "rgb(241, 194, 204)";
        }
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
