import Link from 'next/link';
import Logo from '../nav/Logo';

export default function Footer() {
   return (
      <footer className="py-10 border-t border-t-muted-foreground mt-10">
         <div className=" grid grid-cols-6 gap-4">
            <div className="col-span-3 flex flex-col gap-2">
               <Logo />
               <h4 className="font-noto text-muted-foreground w-2/3">
                  Blabber is a platform built for creators and storytellers.
                  Join us to share your thoughts, explore new perspectives, and
                  connect with a community of passionate individuals.
               </h4>
            </div>

            <div className="flex-col flex gap-8">
               <h4 className="text-primary font-semibold text-lg">Site Map</h4>
               <div className="flex flex-col gap-4">
                  <Link
                     href={'/'}
                     className="text-muted-foreground hover:underline-offset-2 hover:underline"
                  >
                     Home
                  </Link>
                  <Link
                     href={'/explore'}
                     className="text-muted-foreground hover:underline-offset-2 hover:underline"
                  >
                     Explore
                  </Link>
                  <Link
                     href={'/about'}
                     className="text-muted-foreground hover:underline-offset-2 hover:underline"
                  >
                     About Us
                  </Link>
                  <Link
                     href={'/'}
                     className="text-muted-foreground hover:underline-offset-2 hover:underline"
                  >
                     User Profile
                  </Link>
               </div>
            </div>
            <div className="flex-col flex gap-8">
               <h4 className="text-primary font-semibold text-lg">Services</h4>
               <div className="flex flex-col gap-4">
                  <Link
                     href={'/'}
                     className="text-muted-foreground hover:underline-offset-2 hover:underline"
                  >
                     Support
                  </Link>
                  <Link
                     href={'/'}
                     className="text-muted-foreground hover:underline-offset-2 hover:underline"
                  >
                     Contact
                  </Link>
                  <Link
                     href={'/'}
                     className="text-muted-foreground hover:underline-offset-2 hover:underline"
                  >
                     FAQ
                  </Link>
               </div>
            </div>
            <div className="flex-col flex gap-8">
               <h4 className="text-primary font-semibold text-lg">Socials</h4>
               <div className="flex flex-col gap-4">
                  <Link
                     href={'/'}
                     className="text-muted-foreground hover:underline-offset-2 hover:underline"
                  >
                     Home
                  </Link>
                  <Link
                     href={'/'}
                     className="text-muted-foreground hover:underline-offset-2 hover:underline"
                  >
                     Explore
                  </Link>
                  <Link
                     href={'/'}
                     className="text-muted-foreground hover:underline-offset-2 hover:underline"
                  >
                     About Us
                  </Link>
               </div>
            </div>
         </div>

         <div className="flex justify-between items-center mt-20">
            <p className="text-muted-foreground text-xs font-noto">
               &copy; {new Date().getFullYear()} Blabber. All rights reserved.
            </p>

            <div className="text-xs text-muted-foreground font-noto flex gap-4 items-center">
               <p>Privacy Policy</p>|<p>Terms of Use</p>
            </div>
         </div>
      </footer>
   );
}
