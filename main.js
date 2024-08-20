
let users = {};


for (let i = 1; i <= 10; i++) {
    let name = prompt(`Введите имя пользователя ${i}:`);
    let age = prompt(`Введите возраст пользователя ${i}:`);
    

    age = parseInt(age);


    users[i] = {
        "Имя": name,
        "Возраст": age
    };
}


for (let id in users) {
    console.log(`Пользователь - ${id}`);
    console.log(`Имя - ${users[id]["Имя"]}`);
    console.log(`Возраст - ${users[id]["Возраст"]}`);
    console.log('');
}


console.log("Объект с данными всех пользователей:");
console.log(users);
