import { Button } from '../UI/button';
import * as actions from '@/actions';

export default function SignOutButton() {
   return (
      <form action={actions.signOut}>
         <Button variant="default" size="default" className="rounded-xl">
            <span className=" tracking-normal text-lg">Sign Out</span>
         </Button>
      </form>
   );
}
