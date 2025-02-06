import { Blurb } from "@prisma/client";
import BlurbCarousel from "./BlurbCarousel";
import { ReactNode } from "react";

interface ExploreBlurbsProps {
  blurbs: Blurb[];
  title: string;
  description: string;
  isLastChild?: boolean;
}

export default function ExploreBlurbs({
  blurbs,
  title,
  description,
  isLastChild = false,
}: ExploreBlurbsProps): ReactNode {
  return (
    <div className={`${isLastChild ? "" : "border-b pb-10"} `}>
      <div className="font-josefin">
        <h2 className="text-2xl text-secondary-foreground">{title}</h2>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>
      <div className="mt-5 w-full px-10">
        <BlurbCarousel blurbs={blurbs} />
      </div>
    </div>
  );
}
