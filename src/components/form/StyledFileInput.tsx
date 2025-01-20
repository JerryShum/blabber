import React from "react";

export default function StyledFileInput() {
  return (
    <input
      //   {...register("image")}
      type="file"
      required
      className="w-full rounded-lg border border-border file:mr-6 file:h-full file:border-none file:bg-muted file:p-3 file:transition-all file:duration-300 hover:file:brightness-90"
      accept=".jpg, .png"
    />
  );
}
