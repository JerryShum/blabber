import BlurbContentDisplay from "@/components/blurbs/BlurbContentDisplay";
import { AspectRatio } from "@/components/UI/aspect-ratio";
import { getBlurbsID } from "@/lib/queries/getBlurbs";
import Image from "next/image";

interface Params {
  blurbID: string;
}

export default async function Page({ params }: { params: Params }) {
  const { blurbID } = await params;
  const blurb = await getBlurbsID(blurbID);
  console.log(blurb);

  return (
    <div className="mt-20">
      <div className="space-y-2">
        <h1 className="font-josefin text-5xl font-bold">{blurb.title}</h1>
        <h2 className="font-josefin text-xl text-muted-foreground">
          {blurb.description}
        </h2>
        <h3 className="font-semibold text-muted-foreground">
          {blurb?.estimatedRead} Minute Readtime
        </h3>
      </div>

      <div className="relative mt-6 overflow-hidden rounded-lg">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={blurb?.image}
            className="object-cover object-center"
            quality={100}
            alt="image of interior design"
            fill
          />
        </AspectRatio>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 font-josefin text-white">
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-end sm:gap-10">
            <div>
              <p>Written by:</p>
              <p className="text-xl">{blurb.author.name}</p>
            </div>
            <div>
              <p>Published on:</p>
              <p className="text-xl">
                {new Date(blurb.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <BlurbContentDisplay content={blurb.content} />
    </div>
  );
}
