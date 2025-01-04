import Logo from '@/components/nav/Logo';
import NavLinks from './NavLinks';
import SearchBar from './SearchBar';
import NavAuth from './NavAuth';
import { DarkModeToggle } from './DarkModeToggle';

export default function Navbar() {
   return (
      <nav className="py-2 flex gap-14 items-center justify-center">
         <Logo />
         <NavLinks />
         <SearchBar />
         <DarkModeToggle />
         <NavAuth />
      </nav>
   );
}
