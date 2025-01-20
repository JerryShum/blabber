"use server";

import { createBlurbSchema } from "@/_schemas/createBlurbSchema";
import { auth } from "@/auth";
import { prisma } from "@/db";

type FormState = {
  status: "idle" | "pending" | "error" | "success";
  errors: {
    title?: string[];
    description?: string[];
    image?: string[];
    mainContent?: string[];
    _form?: string[];
  };
};

export async function createBlurbAction(
  prevState: FormState,
  data: FormData,
): Promise<FormState> {
  const actualData = Object.fromEntries(data.entries());
  const parseResult = createBlurbSchema.safeParse(actualData);

  //! If form validation fails, return the errors received from the schema
  if (!parseResult.success) {
    console.log(parseResult.error);
    return {
      status: "error",
      errors: parseResult.error.flatten().fieldErrors,
    };
  } else {
    //! No form validation errors, so proceed with DB

    try {
      //! Check if user is logged in -> get the id
      const session = await auth();
      if (!session || !session.user) {
        return {
          status: "error",
          errors: { _form: ["You must be logged in to create a blurb"] },
        };
      }

      //! Calculate the read time of the blurb
      const readTime = Math.ceil(
        actualData.mainContent.toString().trim().length / 1000,
      ).toString();

      const newBlurb = await prisma.blurb.create({
        data: {
          title: actualData.title.toString(),
          description: actualData.description.toString(),
          image: actualData.image.toString(),
          content: actualData.mainContent.toString(),
          authorId: session?.user?.id ?? "",
          estimatedRead: readTime,
        },
      });

      console.log("Created a new blurb:", newBlurb);
    } catch (error: unknown) {
      //! If we know what the error is:
      if (error instanceof Error) {
        return {
          status: "error",
          errors: { _form: [error.message] },
        };
      } else {
        //! If we don't know what the error is:
        return {
          status: "error",
          errors: { _form: ["An unknown error occurred"] },
        };
      }
    }

    return {
      status: "success",
      errors: {},
    };
  }
}
