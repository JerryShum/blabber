import DisplayBlurb from "@/components/blurbs/DisplayBlurb";
import HeroBlurb from "@/components/blurbs/HeroBlurb";

import { Blurb } from "@prisma/client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import paths from "@/paths";
import DataPoint from "@/components/common/DataPoint";
import { stringify } from "querystring";
import { getTop4Blurbs } from "@/lib/queries/getBlurbs";

const blurbs = await getTop4Blurbs();
console.log(blurbs);

export default async function Home() {
  return (
    <div className="">
      <HeroBlurb blurb={blurbs[0]} />
      <div className="mt-16">
        <div className="flex items-center justify-between">
          <h1 className="font-josefin text-3xl">Top Blurbs</h1>
          <Link
            href={paths.explorePage()}
            className="border-b-primary hover:border-b"
          >
            <span className="flex items-center gap-2 text-primary">
              See all <ArrowRight size={20} />
            </span>
          </Link>
        </div>
        <div className="mt-4 grid w-full grid-cols-3 gap-10">
          {blurbs.slice(1).map((blurb: Blurb) => (
            <DisplayBlurb blurb={blurb} key={blurb.id} />
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h1 className="font-josefin text-3xl">Community Highlights</h1>
        <div className="mt-4 grid grid-cols-2 gap-5">
          <DataPoint colour="blue" dataValue="12" size="xlarge" position="top">
            Total Number of Users
          </DataPoint>
          <div className="grid grid-rows-2 gap-5">
            <DataPoint
              colour="green"
              position="bottom"
              dataValue="540"
              size="medium"
            >
              Unique Blurbs Written
            </DataPoint>
            <DataPoint
              colour="yellow"
              position="left"
              dataValue="Jerry Shum"
              size="small"
            >
              Top Contributor This Week
            </DataPoint>
          </div>
        </div>
      </div>
    </div>
  );
}
