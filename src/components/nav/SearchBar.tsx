import { Input } from '../UI/input';

export default function SearchBar() {
   return (
      <div className="flex-grow max-w-72 min-w-48">
         <Input
            type="text"
            placeholder="Search..."
            className="rounded-xl shadow-lg"
         />
      </div>
   );
}
