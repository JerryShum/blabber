import { Button } from '../UI/button';
import * as actions from '@/actions';
import { FaGithub } from 'react-icons/fa';

export default function GithubButton() {
   return (
      <form action={actions.signIn}>
         <Button
            className="!w-full rounded-xl !py-6 !flex !items-center gap-4 shadow-md"
            variant={'outline'}
            size={'lg'}
         >
            <FaGithub className="!scale-[1.75]" />
            <span className="text-lg font-semibold leading-[-1] mt-1">
               Continue with GitHub
            </span>
         </Button>
      </form>
   );
}
