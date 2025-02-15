import DisplayBlurb from "@/components/blurbs/DisplayBlurb";
import HeroBlurb from "@/components/blurbs/HeroBlurb";
import DataPoint from "@/components/common/DataPoint";
import { getTop4Blurbs } from "@/lib/queries/getBlurbs";
import { getStats } from "@/lib/queries/getStats";
import paths from "@/paths";
import { Blurb } from "@prisma/client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const blurbs: Blurb[] = await getTop4Blurbs();
const stats: string[] = await getStats();

//! Revalidate every 12 hours
export const revalidate = 43200;

export default async function Home() {
  return (
    <div className="px-4 sm:px-6 md:px-0">
      <HeroBlurb blurb={blurbs[0]} />

      {/* Top Blurbs Section */}
      <div className="mt-10 sm:mt-12 md:mt-16">
        <div className="flex items-center justify-between">
          <h1 className="font-josefin text-2xl sm:text-2xl md:text-3xl">
            Top Blurbs
          </h1>
          <Link
            href={paths.explorePage()}
            className="border-b-primary hover:border-b"
          >
            <span className="flex items-center gap-1 text-sm text-primary sm:gap-2 sm:text-base">
              See all <ArrowRight size={16} className="sm:h-5 sm:w-5" />
            </span>
          </Link>
        </div>

        {/* Responsive grid for blurbs */}
        <div className="mt-4 grid w-full grid-cols-1 gap-10 sm:gap-12 md:gap-14 lg:grid-cols-3">
          {blurbs.slice(1).map((blurb: Blurb) => (
            <DisplayBlurb blurb={blurb} key={blurb.id} scale={true} />
          ))}
        </div>
      </div>

      {/* Community Highlights Section */}
      <div className="mt-10 sm:mt-12 md:mt-16">
        <h1 className="font-josefin text-2xl sm:text-2xl md:text-3xl">
          Community Highlights
        </h1>

        {/* Responsive grid for stats */}
        <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
          <DataPoint
            colour="blue"
            dataValue={stats[0]}
            size="xlarge"
            position="top"
          >
            Total Number of Users
          </DataPoint>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-rows-2 md:mt-0">
            <DataPoint
              colour="green"
              position="bottom"
              dataValue={stats[1]}
              size="medium"
            >
              Unique Blurbs Written
            </DataPoint>
            <DataPoint
              colour="yellow"
              position="left"
              dataValue={stats[2]}
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
