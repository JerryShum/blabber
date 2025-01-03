import Logo from '@/components/nav/Logo';
import NavLinks from './NavLinks';

export default function Navbar() {
   return (
      <nav className="py-6 absolute top-0 flex gap-12 items-center">
         <Logo />

         <NavLinks />
      </nav>
   );
}
