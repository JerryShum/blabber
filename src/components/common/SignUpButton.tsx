import Link from 'next/link';
import { buttonVariants } from '../UI/button';
import paths from '@/paths';

export default function SignUpButton() {
   return (
      <Link
         className={`${buttonVariants({ variant: 'default' })} rounded-xl`}
         href={paths.SignUpPage()}
      >
         <span className="text-base">Sign Up</span>
      </Link>
   );
}
