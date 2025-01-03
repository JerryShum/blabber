import paths from '@/paths';
import Link from 'next/link';
import { buttonVariants } from '../UI/button';

export default function NavLinks() {
   return (
      <nav>
         <ul className="flex items-center gap-2 ">
            <li>
               <Link
                  className={buttonVariants({ variant: 'link' })}
                  href={paths.home()}
               >
                  <span className="text-base">Home</span>
               </Link>
            </li>
            <li>
               <Link
                  className={buttonVariants({ variant: 'link' })}
                  href={paths.explorePage()}
               >
                  <span className="text-base">Explore</span>
               </Link>
            </li>
            <li>
               <Link
                  className={buttonVariants({ variant: 'link' })}
                  href={paths.aboutPage()}
               >
                  <span className="text-base">About Us</span>
               </Link>
            </li>
         </ul>
      </nav>
   );
}
