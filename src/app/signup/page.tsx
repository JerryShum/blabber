import Image from 'next/image';
import aesthetic from '/public/aestheitc2.png';
import SignUpForm from '@/components/signup/SignUpForm';

export default function SignUpPage() {
   return (
      <div className="w-full flex items-center justify-center">
         <div className="mt-40 flex items-center gap-10">
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
