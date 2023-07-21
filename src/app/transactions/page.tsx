import { promises as fs } from "fs";
import path from "path";
import { Metadata } from "next";
import { z } from "zod";

import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { taskSchema } from "./data/schema";

export const metadata: Metadata = {
  title: "Transactions",
  description:
    "A transactions tracker build using Tanstack Table.",
};

// Simulate a database read for transactions.
async function getTransactions() {
  const data = await fs.readFile(
    path.join(
      process.cwd(),
      "src/app/transactions/data/tasks.json"
    )
  );

  const transactions = JSON.parse(data.toString());

  return z.array(taskSchema).parse(transactions);
}

export default async function TaskPage() {
  const transactions = await getTransactions();

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <DataTable data={transactions} columns={columns} />
    </div>
  );
}
