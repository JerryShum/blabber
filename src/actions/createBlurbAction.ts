"use server";

import { createBlurbSchema } from "@/_schemas/createBlurbSchema";
import { FormState } from "react-hook-form";

export async function createBlurbAction(data: FormData): Promise<FormState> {
  const actualData = Object.fromEntries(data.entries());
  console.log("sigma:", actualData);
  console.log(actualData.image);
  const parseResult = createBlurbSchema.safeParse(actualData);
  console.log(parseResult.error);

  if (!parseResult.success) {
    return {
      errors: "Invalid data",
    };
  }
}
