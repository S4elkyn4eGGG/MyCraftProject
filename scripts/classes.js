function ParentClass(name, recept, intel, lovk, sila, armor, attack) {
    this.name = name;
    this.intel = intel;
    this.lovk = lovk;
    this.sila = sila;
    this.armor = armor;
    this.attack = attack;
    this.recept = recept;
}

function ShmotClass() {
    ParentClass.apply(this, arguments);
}

function WeaponClass() {
    ParentClass.apply(this, arguments);
}

function PartsForCraft(){
    ParentClass.apply(this, arguments);
}