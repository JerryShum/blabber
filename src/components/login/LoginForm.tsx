import GithubButton from '../common/GithubButton';
import GoogleButton from '../common/GoogleButton';
import { Button } from '../UI/button';
import { Input } from '../UI/input';
import { Label } from '../UI/label';

export default function LoginForm() {
   return (
      <div className="font-josefin w-80">
         <h2 className="text-4xl font-semibold text-left mb-10">Login</h2>
         <div className="flex flex-col gap-4">
            <GithubButton />
            <GoogleButton />
         </div>
      </div>
   );
}
