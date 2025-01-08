import { Blurb } from '@prisma/client';
import Image from 'next/image';
import { ReactNode } from 'react';
import { AspectRatio } from '../UI/aspect-ratio';
import Author from './Author';
import Link from 'next/link';
import paths from '@/paths';

interface DisplayBlurbProps {
   blurb: Blurb;
}

const dummyUser: User = {
   id: '1',
   name: 'John Doe',
   email: 'john.doe@example.com',
   emailVerified: new Date(),
   image: 'https://github.com/shadcn.png',
};

export default function DisplayBlurb({ blurb }: DisplayBlurbProps): ReactNode {
   return (
      <div className="rounded-xl hover:scale-105 transition-all duration-300">
         <Link href={paths.blurbIDPage(blurb.id)}>
            <div className="relative">
               <AspectRatio ratio={16 / 9}>
                  <Image
                     src={blurb.image}
                     alt="Blurb image"
                     fill
                     quality={50}
                     className="h-full w-full rounded-xl object-cover brightness-95 shadow-inner"
                  />
               </AspectRatio>

               <div className="absolute bottom-0 left-0 p-4 flex flex-col items-start justify-start gap-4">
                  <Author user={dummyUser} />
                  <div className="flex gap-4 text-zinc-200 opacity-80 font-josefin items-center justify-end">
                     <h4>
                        {new Date(blurb.createdAt).toLocaleDateString('en-US', {
                           month: 'numeric',
                           day: 'numeric',
                           year: 'numeric',
                        })}
                     </h4>
                     <span>|</span>
                     <h4>{blurb.estimatedRead} mins read time</h4>
                  </div>
               </div>
            </div>

            <div className="mt-2">
               <h2 className=" text-xl font-noto text-foreground">
                  {blurb.title}
               </h2>
               <h3 className="font-noto text-muted-foreground">
                  {blurb.description}
               </h3>
            </div>
         </Link>
      </div>
   );
}
