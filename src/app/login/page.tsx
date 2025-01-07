import LoginForm from '@/components/login/LoginForm';
import Image from 'next/image';
import aesthetic from '/public/aestheitc2.png';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
   const session = await auth();
   if (session) redirect('/');

   return (
      <div className="w-full flex items-center justify-center h-screen">
         <div className="flex items-center gap-10">
            <LoginForm />
            <Image
               src={aesthetic}
               height={100}
               width={500}
               alt="image of someone writing on a laptop"
               placeholder="blur"
               loading="lazy"
            />
         </div>
      </div>
   );
}
