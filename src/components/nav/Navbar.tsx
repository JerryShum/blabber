import Logo from '@/components/nav/Logo';
import NavLinks from './NavLinks';
import SearchBar from './SearchBar';

export default function Navbar() {
   return (
      <nav className="py-6 absolute top-0 left-0 flex gap-14 items-center justify-between w-full px-60">
         <Logo />
         <NavLinks />
         <SearchBar />
      </nav>
   );
}
