const fs = require("fs/promises");

async function witeFile() {
  try {
    await fs.writeFile("write.txt", "Write succesfull");
    console.log("Write succesfull");
  } catch (error) {
    console.log(error);
  }
}

// witeFile();

async function readFile() {
  try {
    const fileData = await fs.readFile("write.txt", "utf-8");
    console.log(fileData);
    const counter = fileData.split(" ").length;
    console.log(counter);
  } catch (error) {
    console.log(error);
  }
}

// readFile();
async function fetchData() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    const updatedUsers = users.map((data) => {
      return { ...data, age: Math.round(Math.random() * 50) };
    });
    await fs.writeFile("users.json", JSON.stringify(updatedUsers));
    console.log("write succesfull");
  } catch (error) {
    console.log(error);
  }
}

// fetchData();

async function readUsersData() {
  try {
    const usersData = await fs.readFile("users.json", "utf-8");
    const users = JSON.parse(usersData);
    console.log(users.filter((userAge) => userAge.age > 18));
  } catch (error) {
    console.log(error);
  }
}

readUsersData();
