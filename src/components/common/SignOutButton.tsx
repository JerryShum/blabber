import { Button } from '../UI/button';
import * as actions from '@/actions';

export default function SignOutButton() {
   return (
      <form action={actions.signOut}>
         <Button variant="outline" size="default">
            <span className=" tracking-normal text-lg">Sign Out</span>
         </Button>
      </form>
   );
}
