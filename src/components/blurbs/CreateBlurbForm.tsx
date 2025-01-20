"use client";

import {
  startTransition,
  useActionState,
  useEffect,
  useRef,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import * as commands from "@uiw/react-md-editor/commands";

import { Label } from "../UI/label";
import { Button } from "../UI/button";

import { createBlurbSchema } from "@/_schemas/createBlurbSchema";
import { createBlurbAction } from "@/actions";
import { redirect } from "next/navigation";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export default function CreateBlurbForm() {
  const [MDvalue, setMDValue] = useState(
    "**Use markdown for the main content of your blurb!**",
  );

  const [formState, action, isPending] = useActionState(createBlurbAction, {
    status: "idle",
    errors: {},
    id: null,
  });

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(createBlurbSchema),
    defaultValues: {
      title: "",
      description: "",
      image: null,
      mainContent: "",
      markdownFile: null,
    },
  });

  async function onSubmit(data) {
    const formData = new FormData();
    formData.append("title", data.title.toString());
    formData.append("description", data.description.toString());
    formData.append("image", data.image.toString());
    formData.append("mainContent", data.mainContent.toString());

    startTransition(() => {
      action(formData);
    });
  }

  useEffect(() => {
    if (formState.status === "success") {
      toast.success("Blurb created successfully!");
      redirect(`/blurbs/${formState.id}`);
    } else if (formState.status === "error") {
      toast.error("An error occurred while creating the blurb.");
    }
  }, [formState.status, reset, formState.id]);

  return (
    <form
      className="my-10 flex flex-col items-start gap-10 py-4 sm:px-10 md:px-20 xl:px-40 2xl:px-60"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Title Input: */}
      <div className="flex w-full flex-col gap-2">
        <Label className="font-josefin xl:text-lg" htmlFor="title">
          Title of your Blurb:
        </Label>
        <input
          {...register("title")}
          type="text"
          required
          placeholder="Enter the title of your blurb..."
          className="w-full justify-end rounded-lg border border-border p-2 text-muted-foreground"
        />
        {errors.title && (
          <p className="text-sm text-red-500">{errors.title.message}</p>
        )}
      </div>

      {/* Description Input: */}
      <div className="flex w-full flex-col gap-2">
        <Label className="font-josefin xl:text-lg" htmlFor="title">
          Short Description of Blurb Content:
        </Label>
        <textarea
          {...register("description")}
          required
          placeholder="Enter a short description for your blurb..."
          className="h-full rounded-lg border border-border p-2 text-muted-foreground lg:min-h-32"
        />
        {errors.description && (
          <p className="text-sm text-red-500">{errors.description.message}</p>
        )}
      </div>

      {/* Image Input */}
      <div className="flex w-full flex-col items-start gap-4">
        <div className="flex w-full flex-col">
          <Label className="font-josefin xl:text-lg" htmlFor="title">
            Image to Display with Blurb:
          </Label>
          <h4 className="text-xs text-muted-foreground">
            Image should have a resolution of 1920x1080 and be in .jpg or .png
          </h4>
        </div>

        <input
          {...register("image")}
          type="text"
          required
          placeholder="Enter the URL for your image..."
          className="w-full justify-end rounded-lg border border-border p-2 text-muted-foreground"
        />
        {errors.image && (
          <p className="text-sm text-red-500">{errors.image.message}</p>
        )}
      </div>

      {/* Markdown Editor: */}
      <div className="flex w-full flex-col justify-start gap-4">
        <div>
          <Label className="font-josefin xl:text-lg">
            Blurb&apos;s main content:
          </Label>
          <h4 className="text-xs text-muted-foreground">
            Using markdown, you can write the main content for your blurb!
          </h4>
        </div>
        <MDEditor
          value={MDvalue}
          onChange={(value) => {
            setMDValue(value || "");
            setValue("mainContent", value || "");
          }}
          className="w-full lg:min-h-80"
        />
        {errors.mainContent && (
          <p className="text-sm text-red-500">{errors.mainContent.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button disabled={isSubmitting || isPending} className="w-full">
        Submit
      </Button>
    </form>
  );
}
