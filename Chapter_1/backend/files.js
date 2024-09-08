import { writeFileSync, readFileSync } from "node:fs";

const users = [{ name: "Adam Ondra", email: "adam.ondra@climb.ing" }];

const usersJson = JSON.stringify(users);

writeFileSync("backend/users.json", usersJson);
