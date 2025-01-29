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

  const sampleBlurb = {
    id: 27,
    description:
      "short descriptionTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest",
    content:
      "**Use markdown for the main content of your blurb!**testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
    authorId: "cm5h1fvam0000ui4cnslmlao7",
    createdAt: new Date("2025-01-27T22:28:56.779Z"),
    image:
      "https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg",
    title: "TestTestTestTestTest",
    estimatedRead: "1",
    author: { name: "Jerry Shum", email: "jerryshum2636@gmail.com" },
  };

  return (
    <div className="mt-20">
      <div className="space-y-2">
        <h1 className="text-5xl font-bold">{blurb.title}</h1>
        <h2 className="text-xl text-muted-foreground">{blurb.description}</h2>
      </div>

      <div className="relative">
        <AspectRatio className="mt-10" ratio={16 / 9}>
          <Image
            src={blurb?.image}
            className="object-cover object-center"
            quality={100}
            alt="image of interior design"
            fill
          />
        </AspectRatio>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <p className="text-white">{blurb.author.name}</p>
          <p>{new Date(blurb.createdAt).toLocaleDateString()}</p>
        </div>
      </div>

      <div>
        <p>{blurb.content}</p>
      </div>
    </div>
  );
}
