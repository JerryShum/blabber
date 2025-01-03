import Logo from '@/components/nav/Logo';
import NavLinks from './NavLinks';
import SearchBar from './SearchBar';

export default function Navbar() {
   return (
      <nav className="py-6 absolute top-0 flex gap-14 items-center w-full">
         <Logo />
         <NavLinks />
         <SearchBar />
      </nav>
   );
}
