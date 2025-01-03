import SignOutButton from '../common/SignOutButton';
import { Avatar, AvatarFallback, AvatarImage } from '../UI/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '../UI/popover';
import { User } from 'next-auth';

interface NavAuthAvatarProps {
   user: User;
}

export default function NavAuthAvatar({ user }: NavAuthAvatarProps) {
   return (
      <Popover>
         <PopoverTrigger>
            <Avatar>
               <AvatarImage src={user.image ?? ''} />
               <AvatarFallback>CN</AvatarFallback>
            </Avatar>
         </PopoverTrigger>
         <PopoverContent className="w-auto p-4" align="center" side="bottom">
            <div className="flex flex-col gap-4 items-center">
               <h3 className=" font-sans">{user.email}</h3>
               <Avatar className="h-16 w-16">
                  <AvatarImage src={user.image ?? ''} />
                  <AvatarFallback>CN</AvatarFallback>
               </Avatar>
               <h3 className="text-lg font-semibold">
                  Hi, {user.name?.split(' ')[0]}!
               </h3>
               <SignOutButton />
            </div>
         </PopoverContent>
      </Popover>
   );
}
