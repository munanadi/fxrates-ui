import fs from "fs";
import path from "path";
import { faker } from "@faker-js/faker";

const statuses = [
  {
    value: "in progress",
    label: "In Progress",
  },
  {
    value: "done",
    label: "Done",
  },
  {
    value: "canceled",
    label: "Canceled",
  },
];

const transactionType = [
  {
    label: "Sent",
    value: "sent",
  },
  {
    label: "Received",
    value: "received",
  },
];

const tasks = Array.from({ length: 100 }, () => ({
  id: `${faker.string.alphanumeric(10).toLowerCase()}`,
  title: faker.finance.transactionDescription(),
  status: faker.helpers.arrayElement(statuses).value,
  transactionType:
    faker.helpers.arrayElement(transactionType).value,
}));

fs.writeFileSync(
  path.join("src", "app", "transactions", "data", "tasks.json"),
  JSON.stringify(tasks, null, 2)
);

console.log("✅ Tasks data generated.");
