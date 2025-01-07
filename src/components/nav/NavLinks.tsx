import paths from '@/paths';
import Link from 'next/link';
import { buttonVariants } from '../UI/button';

export default function NavLinks() {
   return (
      <nav>
         <ul className="flex items-center gap-1 ">
            <li>
               <Link
                  className={buttonVariants({ variant: 'link' })}
                  href={paths.home()}
               >
                  <span className="text-base font-josefin">Home</span>
               </Link>
            </li>
            <li>
               <Link
                  className={buttonVariants({ variant: 'link' })}
                  href={paths.explorePage()}
               >
                  <span className="text-base font-josefin">Explore</span>
               </Link>
            </li>
            <li>
               <Link
                  className={buttonVariants({ variant: 'link' })}
                  href={paths.aboutPage()}
               >
                  <span className="text-base font-josefin">About Us</span>
               </Link>
            </li>
            <li>
               <Link
                  className={buttonVariants({ variant: 'link' })}
                  href={paths.aboutPage()}
               >
                  <span className="text-base font-josefin">About Us</span>
               </Link>
            </li>
         </ul>
      </nav>
   );
}
