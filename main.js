const fs = require("fs/promises");

// 1)
async function fetchData() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    const updatedUsers = users.map((data) => {
      return {
        age: Math.round(Math.random() * 50),
        name: data.name,
        userName: data.username,
        email: data.email,
      };
    });
    await fs.writeFile("users.json", JSON.stringify(updatedUsers));
    console.log("write succesfull");
  } catch (error) {
    console.log(error);
  }
}

// fetchData();

// 2)
async function witeFile() {
  try {
    await fs.writeFile("write.txt", "Write succesfull");
    console.log("Write succesfull");
    const fileData = await fs.readFile("write.txt", "utf-8");
    const counter = fileData.split(" ").length;
    console.log(counter);
  } catch (error) {
    console.log(error);
  }
}

// witeFile();

// 3)
async function readUsersData() {
  try {
    const usersData = await fs.readFile("users.json", "utf-8");
    const users = JSON.parse(usersData);
    console.log(users.filter((userAge) => userAge.age > 18));
  } catch (error) {
    console.log(error);
  }
}

// readUsersData();
