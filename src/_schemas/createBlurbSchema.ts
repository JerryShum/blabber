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
      .instanceof(File, { message: "Please upload an image." })
      .refine(
        (file) => file.type === "image/jpeg" || file.type === "image/png",
        {
          message: "Image should be in .jpg or .png format.",
        },
      ),
    mainContent: z.string().optional(),
    markdownFile: z.instanceof(File).optional(),
  })
  .refine((data) => data.mainContent || data.markdownFile, {
    message: "You must provide either main content or upload a markdown file.",
    path: ["mainContent"],
  });
