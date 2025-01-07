import Link from 'next/link';
import { buttonVariants } from '../UI/button';

export default function NotAuthenticated() {
   return (
      <div className="flex items-center justify-center flex-grow h-screen">
         <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">
               You are not authenticated.
            </h1>
            <p className="mb-4 text-muted-foreground">
               Please log in to access this page.
            </p>
            <Link
               href={'/login'}
               className={` ${buttonVariants({
                  variant: 'default',
                  size: 'lg',
               })} rounded-xl`}
            >
               Go to Login
            </Link>
         </div>
      </div>
   );
}
