"use server";

import { revalidatePath } from "next/cache";
import { sql } from "./sql";

export async function deleteInvoice(id: string) {
  await sql`DELETE FROM invoices WHERE id = ${id}`;
  revalidatePath("/dashboard/invoices");
}
