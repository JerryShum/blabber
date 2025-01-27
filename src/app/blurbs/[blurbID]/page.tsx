import { getBlurbsID } from "@/lib/queries/getBlurbs";

interface Params {
  blurbID: string;
}

export default async function Page({ params }: { params: Params }) {
  const { blurbID } = await params;
  const blurb = await getBlurbsID(blurbID);
  console.log(blurb);

  return (
    <div>
      <h1>Display Blurb Page</h1>
      <p>Blurb ID: {blurbID}</p>
    </div>
  );
}
