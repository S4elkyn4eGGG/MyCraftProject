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

function loader() {
    spisokReceptov();          
    for(let i=0; i<componentsMassiv.length; i++) {
        let newDiv = document.createElement("div");
        newDiv.textContent = componentsMassiv[i].name;
        newDiv.className = "newDIV";
        newDiv.id = `newDIV${i}`;
        components.appendChild(newDiv);
    }    
}

function spisokReceptov() {        
    while(selectRecept.children[0]) {
        selectRecept.remove(selectRecept.firstChild);
    }
    switch(selectWat.value) {
        case 'Оружие': {                        
            for(let i=0; i<weaponMassiv.length; i++) {
                let newSelectRecept = document.createElement("option");
                newSelectRecept.textContent = weaponMassiv[i].name;
                selectRecept.appendChild(newSelectRecept);
            }
            break;
        }
        default: {       
            for(let i=0; i<shmotMassiv.length; i++) {
                let newSelectRecept = document.createElement("option");
                newSelectRecept.textContent = shmotMassiv[i].name;
                selectRecept.appendChild(newSelectRecept);
            }
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

newDIVmass = document.querySelectorAll('div.newDIV');