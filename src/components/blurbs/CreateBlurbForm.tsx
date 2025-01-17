"use client";

import { useForm } from "react-hook-form";
import { Input } from "../UI/input";
import { Label } from "../UI/label";
import { Button } from "../UI/button";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";

import * as commands from "@uiw/react-md-editor/commands";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export default function CreateBlurbForm() {
  const [MDvalue, setMDValue] = useState(
    "**Use markdown for the main content of your blurb!**",
  );

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { error, isSubmitting, isLoading },
  } = useForm();

  return (
    <form className="my-10 grid grid-cols-6 items-start gap-10 gap-y-10 py-4 sm:px-10 md:px-20 xl:px-40 2xl:px-60">
      <Label className="col-span-2 xl:text-lg" htmlFor="title">
        Title of your Blurb
      </Label>
      <input
        {...register("title")}
        type="text"
        required
        placeholder="Enter the title of your blurb..."
        className="col-span-4 justify-end rounded-xl border border-muted-foreground p-2 text-muted-foreground"
      />
      <Label className="col-span-2 xl:text-lg" htmlFor="title">
        Short Description of Blurb Content
      </Label>
      <textarea
        {...register("description")}
        required
        placeholder="Enter a short description for your blurb..."
        className="col-span-4 h-full rounded-xl border border-muted-foreground p-2 text-muted-foreground lg:min-h-32"
      />
      <div className="col-span-2 flex w-full flex-col gap-2">
        <Label className="col-span-2 xl:text-lg" htmlFor="title">
          Image to Display with Blurb
        </Label>
        <h4 className="text-xs text-muted-foreground">
          Image should have a resolution of 1920x1080 and be in .jpg or .png
        </h4>
      </div>
      <div className="col-span-4 flex justify-center">
        <input
          {...register("image")}
          type="file"
          required
          className="text-muted-foreground"
          accept=".jpg, .png"
        />
      </div>

      <div className="col-span-6 flex flex-col justify-start gap-4">
        <div>
          <Label className="xl:text-lg">Blurb&apos;s main content:</Label>
          <h4 className="text-xs text-muted-foreground">
            Using markdown, you can write the main content for your blurb!
          </h4>
        </div>
        <MDEditor
          value={MDvalue}
          onChange={(val) => setMDValue(val || "")}
          className="lg:min-h-80"
        />
      </div>

      <input
        {...register("mainContent")}
        type="text"
        hidden
        value={MDvalue}
        placeholder="Enter the title of your blurb..."
      />

      <div className="col-span-6 flex flex-col justify-start gap-4">
        <Label className="xl:text-lg" htmlFor="markdownFile">
          Or upload a markdown file:
        </Label>
        <input
          {...register("markdownFile")}
          type="file"
          accept=".md"
          className="text-muted-foreground"
        />
      </div>

      <Button disabled={isSubmitting || isLoading} className="col-span-6">
        Submit
      </Button>
    </form>
  );
}
