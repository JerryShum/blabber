import { z } from "zod";

export const createBlurbSchema = z.object({
  title: z
    .string()
    .min(10, { message: "Title should have at least 10 characters." })
    .max(100, { message: "Title should have at most 100 characters." }),
  description: z
    .string()
    .min(20, { message: "Description should have at least 20 characters." }),
  image: z
    .string()
    .url({ message: "Image should be a valid URL." })
    .refine(
      (url) => {
        try {
          const parsedUrl = new URL(url);
          return (
            parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:"
          );
        } catch {
          return false;
        }
      },
      { message: "Image should be a valid URL." },
    )
    .refine(
      (url) => {
        return url.endsWith(".jpg") || url.endsWith(".png");
      },
      { message: "Image should be a .jpg or .png file." },
    ),
  mainContent: z.string().min(200, {
    message: "Main content should have at least 200 characters.",
  }),
});
