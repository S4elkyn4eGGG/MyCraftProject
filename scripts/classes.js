function ParentClass(name, intel, lovk, sila, armor, attack, recept) {
    this.name = name;
    this.intel = intel;
    this.lovk = lovk;
    this.sila = sila;
    this.armor = armor;
    this.attack = attack;
    this.recept = recept;
}
ParentClass.prototype.kolComp = function(){
    return this.recept.length;
}

function ShmotClass() {
    ParentClass.apply(this, arguments);
}
ShmotClass.prototype = Object.create(ParentClass.prototype);
ShmotClass.constructor = ShmotClass;

function WeaponClass() {
    ParentClass.apply(this, arguments);
}
WeaponClass.prototype = Object.create(ParentClass.prototype);
WeaponClass.constructor = ShmotClass;

function PartsForCraft(){
    ParentClass.apply(this, arguments);
}
PartsForCraft.prototype = Object.create(ParentClass.prototype);
PartsForCraft.constructor = ShmotClass;