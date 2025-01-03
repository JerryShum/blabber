import Image from 'next/image';
import BlabberLogo from '/public/Blabber-logo.png';
import Link from 'next/link';

export default function Logo() {
   return (
      <Link href={'/'}>
         <div className="flex gap-2 items-center ">
            <div className="mb-1">
               <Image
                  src={BlabberLogo}
                  alt="Blabber Logo"
                  width={48}
                  height={48}
               />
            </div>

            <h1 className="font-josefin text-3xl font-semibold text-foreground leading-none">
               Blabber
            </h1>
         </div>
      </Link>
   );
}
