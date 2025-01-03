import Link from 'next/link';
import { buttonVariants } from '../UI/button';
import paths from '@/paths';

export default function LoginButton() {
   return (
      <Link
         className={`${buttonVariants({ variant: 'ghost' })} rounded-xl`}
         href={paths.LoginPage()}
      >
         <span className="text-base">Log In</span>
      </Link>
   );
}
