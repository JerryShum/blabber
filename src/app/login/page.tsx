import LoginForm from '@/components/login/LoginForm';
import Image from 'next/image';
import aesthetic from '/public/aestheitc2.png';

export default function LoginPage() {
   return (
      <div className="w-full flex items-center justify-center">
         <div className="mt-40 flex items-center gap-10">
            <LoginForm />
            <Image
               src={aesthetic}
               height={100}
               width={500}
               alt="image of someone writing on a laptop"
            />
         </div>
      </div>
   );
}
