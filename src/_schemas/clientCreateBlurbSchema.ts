import { z } from "zod";

export const createBlurbSchema = z
  .object({
    title: z
      .string()
      .min(10, { message: "Title should have at least 10 characters." })
      .max(100, { message: "Title should have at most 100 characters." }),
    description: z
      .string()
      .min(20, { message: "Description should have at least 20 characters." }),
    image: z
      .any()
      .refine(
        (fileList) =>
          fileList instanceof FileList &&
          fileList.length > 0 &&
          (fileList[0].type === "image/jpeg" ||
            fileList[0].type === "image/png"),
        {
          message: "Please upload an image in .jpg or .png format.",
        },
      ),
    mainContent: z
      .string()
      .optional()
      .refine((value) => !value || value.trim().length >= 200, {
        message: "Main content must be at least 200 characters long.",
      }),
    markdownFile: z
      .any()
      .optional()
      .refine(
        (fileList) =>
          fileList instanceof FileList &&
          fileList.length > 0 &&
          (fileList[0].type === "text/markdown" ||
            fileList[0].name.endsWith(".md")),
        {
          message: "Please upload a markdown file.",
        },
      ),
  })
  .refine(
    (data) => data.mainContent?.trim().length > 200 || data.markdownFile,
    {
      message:
        "You must provide either a main content with at least 200 characters or upload a markdown file.",
      path: ["mainContent"],
    },
  );
