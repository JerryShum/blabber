import { Button } from '../UI/button';
import * as actions from '@/actions';
import { FaGoogle } from 'react-icons/fa';

export default function GoogleButton() {
   return (
      <form>
         <Button
            className="!w-full rounded-xl !py-6 !flex !items-center gap-4 shadow-md"
            variant={'outline'}
            size={'lg'}
            disabled
         >
            <FaGoogle className="!scale-[1.75] " />
            <span className="text-lg font-semibold leading-[-1] mt-1">
               Continue with Google
            </span>
         </Button>
      </form>
   );
}
