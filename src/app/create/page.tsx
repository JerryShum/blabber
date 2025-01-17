import { auth } from '@/auth';
import CreateBlurbForm from '@/components/blurbs/CreateBlurbForm';
import NotAuthenticated from '@/components/common/NotAuthenticated';

export default async function CreatePage() {
   const session = await auth();
   if (!session) return <NotAuthenticated />;
   return (
      <div>
         <h1 className="font-josefin text-3xl mt-10 font-semibold text-primary">
            Create a Blurb
         </h1>
         <CreateBlurbForm />
      </div>
   );
}
