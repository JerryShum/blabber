import { Button } from '../UI/button';
import { Input } from '../UI/input';
import { Label } from '../UI/label';

export default function LoginForm() {
   return (
      <div className="p-8  rounded-xl flex flex-col items-left justify-center max-w-96 h-full font-josefin">
         <h2 className="text-4xl font-semibold text-left">Login</h2>
         <div className="flex flex-col mt-4 min-h-full min-w-64">
            <h4 className="text-center text-muted-foreground my-4">or</h4>

            <div className="flex flex-col gap-4"></div>
         </div>
      </div>
   );
}
