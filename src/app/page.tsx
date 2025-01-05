import DisplayBlurb from '@/components/blurbs/DisplayBlurb';
import HeroBlurb from '@/components/blurbs/HeroBlurb';

import { Blurb } from '@prisma/client';

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
         <div className="mt-10">
            <h1 className="font-josefin text-3xl">Top Blurbs:</h1>
            <div className="grid grid-cols-2 gap-10 w-full">
               <DisplayBlurb blurb={dummyBlurb} />
               <DisplayBlurb blurb={dummyBlurb} />
               <DisplayBlurb blurb={dummyBlurb} />
            </div>
         </div>
      </div>
   );
}
