import Image from 'next/image';
import aesthetic from '/public/aestheitc2.png';
import SignUpForm from '@/components/signup/SignUpForm';
import { redirect } from 'next/navigation';
import { auth } from '@/auth';

export default async function SignUpPage() {
   const session = await auth();
   if (session) redirect('/');

   return (
      <div className="w-full flex items-center justify-center h-screen">
         <div className="flex items-center gap-10">
            <SignUpForm />
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
