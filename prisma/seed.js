const bcrypt = require("bcryptjs");
const prisma = require("../src/configs/prisma");

const hashedPassword = bcrypt.hashSync("123456", 10);

const userData = [
  {
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@skuberg.com",
    password: hashedPassword,
  },
  {
    firstname: "Jane",
    lastname: "Smith",
    email: "jane.smith@skuberg.com",
    password: hashedPassword,
  },
  {
    firstname: "Alice",
    lastname: "Johnson",
    email: "alice.johnson@skuberg.com",
    password: hashedPassword,
  },
];

const run = async () => {
  try {
    const user = await prisma.user.createMany({
      data: userData,
      skipDuplicates: true,
    });
    console.log(`Created total ${user.count} users`);
  } catch (error) {
    console.error("Error:", error);
  }
};
run();
