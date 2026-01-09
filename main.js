let users = {};

for (let i = 1; i <= 10; i++) {
  let name = prompt(`Введите имя пользователя ${i}`);
  let age = prompt(`Введите возраст пользователя ${i}`);

  
  users[i] = {
    name: name,
    age: age
  };
}


for (let key in users) {
  console.log(`Пользователь - ${key}`);
  console.log(`Имя - ${users[key].name}`);
  console.log(`Возраст - ${users[key].age}`);
}

console.log(users);