import { auth } from '@/auth';
import NotAuthenticated from '@/components/common/NotAuthenticated';

export default async function CreatePage() {
   const session = await auth();
   if (!session) return <NotAuthenticated />;
   return (
      <div>
         <h1>Create Blurb</h1>
      </div>
   );
}
