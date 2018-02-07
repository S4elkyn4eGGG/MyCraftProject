var selectWat = document.getElementById('selectWAT');
document.onload = spisokReceptov();
selectWat.addEventListener("change", spisokReceptov, false);

function spisokReceptov() {
    let selectRecept = document.getElementById("selectRecept");
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