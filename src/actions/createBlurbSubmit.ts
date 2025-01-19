"use server";

import { FormState } from "react-hook-form";
import { createBlurbSchema } from "@/_schemas/createBlurbSchema";

export async function createBlurbSubmit(data: FormData): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parseResult = createBlurbSchema.safeParse(formData);

  if (!parseResult.success) {
    return {
      errors: "Invalid data",
    };
  }
}
