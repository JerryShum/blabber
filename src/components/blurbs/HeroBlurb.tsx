import { Blurb, User } from '@prisma/client';
import Image from 'next/image';
import { ReactNode } from 'react';
import { AspectRatio } from '../UI/aspect-ratio';
import Author from './Author';
import Link from 'next/link';
import paths from '@/paths';

interface HeroBlurbProps {
   blurb: Blurb;
}

const dummyUser: User = {
   id: '1',
   name: 'John Doe',
   email: 'john.doe@example.com',
   emailVerified: new Date(),
   image: 'https://github.com/shadcn.png',
};
export default function HeroBlurb({ blurb }: HeroBlurbProps): ReactNode {
   return (
      <div className="hover:brightness-[85%] transition-all duration-200 hover:scale-[101%]">
         <Link href={paths.blurbIDPage(blurb.id)}>
            <div className="relative">
               <AspectRatio ratio={16 / 6}>
                  <Image
                     src={blurb.image}
                     alt="Article Head Image"
                     fill
                     className="h-full w-full rounded-xl object-cover brightness-95 shadow-inner"
                     quality={100}
                  />
               </AspectRatio>

               {/*Information within the Image */}
               <div className="absolute bottom-0 w-full flex items-center justify-between p-4">
                  <div className="w-1/3 ">
                     <h2 className="text-white text-2xl font-josefin">
                        {blurb.title}
                     </h2>
                     <h3 className="text-zinc-200 opacity-80 font-josefin">
                        {blurb.description}
                     </h3>
                  </div>
                  <div className="w-1/4 flex flex-col gap-2">
                     <Author user={dummyUser} />
                     <div className="flex gap-4 text-zinc-200 opacity-80 font-josefin items-center justify-end">
                        <h4>
                           {new Date(blurb.createdAt).toLocaleDateString(
                              'en-US',
                              {
                                 month: 'numeric',
                                 day: 'numeric',
                                 year: 'numeric',
                              }
                           )}
                        </h4>
                        <span>|</span>
                        <h4>{blurb.estimatedRead} mins read time</h4>
                     </div>
                  </div>
               </div>
            </div>
         </Link>
      </div>
   );
}
