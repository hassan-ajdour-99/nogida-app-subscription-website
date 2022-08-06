import bcrypt from "bcrypt";

export const UsersData = [
  {
    name: "mata",
    email: "mata@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "hassan",
    email: "hassan@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Mike",
    email: "Mike@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];
