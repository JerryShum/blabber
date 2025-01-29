"use client";

import MDEditor from "@uiw/react-md-editor";
import { ReactNode } from "react";

interface BlurbContentDisplayProps {
  content: string;
}

export default function BlurbContentDisplay({
  content,
}: BlurbContentDisplayProps): ReactNode {
  return (
    <div className="mt-10">
      <MDEditor.Markdown
        source={content}
        style={{
          backgroundColor: "transparent",
          color: "var(--text-foreground)",
          fontFamily: "var(--font-noto-sans)",
        }}
      />
    </div>
  );
}
