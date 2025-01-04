import { User } from '@prisma/client';
import { ReactNode } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../UI/avatar';

interface AuthorProps {
   user: User;
}

export default function Author({ user }: AuthorProps): ReactNode {
   return (
      <div className="flex items-end gap-2">
         <Avatar>
            <AvatarImage src={user.image ?? ''} alt="Author Avatar" />
            <AvatarFallback> </AvatarFallback>
         </Avatar>

         <h2 className="text-white text-2xl font-josefin">{user.name}</h2>
      </div>
   );
}
