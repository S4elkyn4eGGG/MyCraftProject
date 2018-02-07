var shmotMassiv = [],
    weaponMassiv = [],
    componentsMassiv = [];

shmotMassiv.push(new ShmotClass('Шкурка Дракона', 5, 2, 2, 10, 0));
shmotMassiv.push(new ShmotClass('В жиру Тюленя', 0, 0, 5, 15, 0));
shmotMassiv.push(new ShmotClass('Ляшки кудрявого', 10, 1, 1, 5, 0));
shmotMassiv.push(new ShmotClass('Тельник', -1, 5, 10, 20, 0));

weaponMassiv.push(new WeaponClass('Костет', 0, 10, 7, 0, 10));
weaponMassiv.push(new WeaponClass('Щит', 0, 10, 7, 0, 15));
weaponMassiv.push(new WeaponClass('Посох', 0, 10, 7, 0, 5));
weaponMassiv.push(new WeaponClass('Гранатомет', 0, 0, 20, 15, 20));

componentsMassiv.push(new PartsForCraft('Кожа дракона', 3, 0, 0, 0, 0, ['Шкурка Дракона','Костет','Ляшки кудрявого']));
componentsMassiv.push(new PartsForCraft('Волос дракона', 2, 2, 0, 0, 0, ['В жиру Тюленя','Щит','Тельник']));
componentsMassiv.push(new PartsForCraft('Оршанская пыль', 0, 0, 0, 10, 0, ['Ляшки кудрявого','Посох','В жиру Тюленя']));
componentsMassiv.push(new PartsForCraft('Слоновая кость', 5, 0, 0, 10, 0, ['Гранатомет','Костет','Тельник']));
componentsMassiv.push(new PartsForCraft('Муха', 0, 10, 2, 0, 4, ['Щит','Посох','Шкурка Дракона']));
componentsMassiv.push(new PartsForCraft('Стол', 2, 2, 2, 2, 4, ['Костет','Посох','Гранатомет']));
componentsMassiv.push(new PartsForCraft('Два стакана', 5, 0, 5, 0, 5, ['Гранатомет','Щит','В жиру Тюленя']));
componentsMassiv.push(new PartsForCraft('ЛСД', 0, 10, 0, 0, 6, ['Шкурка Дракона','Ляшки кудрявого','Тельник']));
componentsMassiv.push(new PartsForCraft('Кеппе', 0, 0, 8, 10, 2, ['Костет','Щит','Посох']));
componentsMassiv.push(new PartsForCraft('Семки', 0, 0, 5, 10, 3, ['Шкурка Дракона','В жиру Тюленя','Ляшки кудрявого']));
