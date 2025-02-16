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
    <div className="mt-10">
      <div className="space-y-2">
        <h1 className="font-josefin text-5xl font-bold">{blurb.title}</h1>
        <h2 className="font-josefin text-xl text-muted-foreground">
          {blurb.description}
        </h2>
        <h3 className="font-semibold text-muted-foreground">
          Estimated Read Time:{" "}
          <span className="font-normal">{blurb?.estimatedRead} minutes</span>
        </h3>
      </div>

      <div className="relative mt-6 overflow-hidden rounded-xl">
        <div className="aspect-[16/10] lg:aspect-[16/8]">
          <Image
            src={blurb?.image}
            className="h-full w-full rounded-xl object-cover shadow-inner brightness-95"
            quality={100}
            alt="Image of the article"
            fill
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 font-josefin text-white">
          <div className="text-md flex gap-4 sm:justify-end sm:gap-10 sm:text-lg">
            <div>
              <p>Written by:</p>
              <p className="">{blurb.author.name}</p>
            </div>
            <div>
              <p>Published on:</p>
              <p className="">
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
