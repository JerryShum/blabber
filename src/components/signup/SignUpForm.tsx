import Link from 'next/link';
import GithubButton from '../common/GithubButton';
import GoogleButton from '../common/GoogleButton';
import { Button } from '../UI/button';
import { Input } from '../UI/input';
import { Label } from '../UI/label';

export default function SignUpForm() {
   return (
      <div className="font-josefin w-80">
         <h2 className="text-4xl font-semibold text-left">Sign Up</h2>
         <h4 className="text-sm mb-6 text-red-400">
            *Sign Up through Google/Email is currently not available.
         </h4>
         <div className="flex flex-col gap-4 mb-6">
            <GithubButton />
            <GoogleButton />
         </div>
         <h4 className="text-center text-muted-foreground">or</h4>
         {/* Email/Password Form */}
         <form className="mb-6">
            <div className="flex flex-col gap-4">
               <div>
                  <Label htmlFor="email" className="text-lg tracking-wider">
                     Email
                  </Label>
                  <Input
                     type="email"
                     id="email"
                     placeholder="Email"
                     name="email"
                     className="rounded-xl"
                  />
               </div>
               <div>
                  <Label htmlFor="password" className="text-lg tracking-wider">
                     Password
                  </Label>
                  <Input
                     type="password"
                     id="password"
                     placeholder="Password"
                     name="password"
                     className="rounded-xl"
                  />
               </div>
               <Button className="rounded-xl" size={'lg'} disabled>
                  <span className="font-semibold">Sign Up</span>
               </Button>
            </div>
         </form>
         <div className="w-full border-t text-center py-2 font-noto text-xs text-muted-foreground">
            Already have an account?{' '}
            <Link href={'/login'} className="underline text-primary">
               Log In
            </Link>
         </div>
      </div>
   );
}
