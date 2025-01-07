import DisplayBlurb from '@/components/blurbs/DisplayBlurb';
import HeroBlurb from '@/components/blurbs/HeroBlurb';

import { Blurb } from '@prisma/client';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import paths from '@/paths';
import DataPoint from '@/components/common/DataPoint';

const dummyBlurb: Blurb = {
   id: 1,
   title: 'Welcome to Blabber',
   description: 'This is a dummy blurb for the hero section.',
   content:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
   image: '/DummyHeroBlurb.jpg',
   authorId: '1',
   createdAt: new Date(),
   estimatedRead: '10',
};

export default function Home() {
   return (
      <div className="">
         <HeroBlurb blurb={dummyBlurb} />
         <div className="mt-16">
            <div className="flex items-center justify-between">
               <h1 className="font-josefin text-3xl">Top Blurbs</h1>
               <Link
                  href={paths.explorePage()}
                  className="hover:border-b border-b-primary"
               >
                  <span className="flex gap-2 items-center text-primary">
                     See all <ArrowRight size={20} />
                  </span>
               </Link>
            </div>
            <div className="grid grid-cols-3 gap-10 w-full mt-4">
               <DisplayBlurb blurb={dummyBlurb} />
               <DisplayBlurb blurb={dummyBlurb} />
               <DisplayBlurb blurb={dummyBlurb} />
            </div>
         </div>
         <div className="mt-16">
            <h1 className="font-josefin text-3xl">Community Highlights</h1>
            <div className="grid grid-cols-2 gap-5 mt-4">
               <DataPoint
                  colour="blue"
                  dataValue="12"
                  size="xlarge"
                  position="top"
               >
                  Total Number of Users
               </DataPoint>
               <div className="grid-rows-2 gap-5 grid">
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
