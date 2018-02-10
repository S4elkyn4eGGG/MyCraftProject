var shmotMassiv = [],
    weaponMassiv = [],
    componentsMassiv = [];

shmotMassiv.push(new ShmotClass('Шкурка Дракона', 5, 2, 2, 10, 0, ['Кожа дракона', 'Муха', 'ЛСД', 'Семки']));
shmotMassiv.push(new ShmotClass('В жиру Тюленя', 0, 0, 5, 15, 0, ['Волос дракона', 'Оршанская пыль', 'Два стакана', 'Семки']));
shmotMassiv.push(new ShmotClass('Ляшки кудрявого', 10, 1, 1, 5, 0, ['Кожа дракона', 'Оршанская пыль', 'ЛСД', 'Семки']));
shmotMassiv.push(new ShmotClass('Тельник', -1, 5, 10, 20, 0, ['Волос дракона', 'Слоновая кость', 'ЛСД']));

weaponMassiv.push(new WeaponClass('Костет', 0, 10, 7, 0, 10, ['Кожа дракона', 'Слоновая кость', 'Стол', 'Кеппе']));
weaponMassiv.push(new WeaponClass('Щит', 0, 10, 7, 0, 15, ['Волос дракона', 'Муха', 'Два стакана', 'Кеппе']));
weaponMassiv.push(new WeaponClass('Посох', 0, 10, 7, 0, 5, ['Оршанская пыль', 'Муха', 'Стол', 'Кеппе']));
weaponMassiv.push(new WeaponClass('Гранатомет', 0, 0, 20, 15, 20, ['Слоновая кость', 'Стол', 'Два стакана']));

componentsMassiv.push(new PartsForCraft('Кожа дракона', 3, 0, 0, 0, 0));
componentsMassiv.push(new PartsForCraft('Волос дракона', 2, 2, 0, 0, 0));
componentsMassiv.push(new PartsForCraft('Оршанская пыль', 0, 0, 0, 10, 0));
componentsMassiv.push(new PartsForCraft('Слоновая кость', 5, 0, 0, 10, 0));
componentsMassiv.push(new PartsForCraft('Муха', 0, 10, 2, 0, 4));
componentsMassiv.push(new PartsForCraft('Стол', 2, 2, 2, 2, 4));
componentsMassiv.push(new PartsForCraft('Два стакана', 5, 0, 5, 0, 5));
componentsMassiv.push(new PartsForCraft('ЛСД', 0, 10, 0, 0, 6));
componentsMassiv.push(new PartsForCraft('Кеппе', 0, 0, 8, 10, 2));
componentsMassiv.push(new PartsForCraft('Семки', 0, 0, 5, 10, 3));
