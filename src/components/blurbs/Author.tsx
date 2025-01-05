import { User } from '@prisma/client';
import { ReactNode } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../UI/avatar';
import Link from 'next/link';
import paths from '@/paths';

interface AuthorProps {
   user: User;
}

export default function Author({ user }: AuthorProps): ReactNode {
   return (
      // <Link href={paths.userPage(user.id)}>
      <div className="flex items-end gap-2 justify-end">
         <Avatar>
            <AvatarImage src={user.image ?? ''} alt="Author Avatar" />
            <AvatarFallback> </AvatarFallback>
         </Avatar>

         <h2 className="text-white text-2xl font-josefin">{user.name}</h2>
      </div>
      // </Link>
   );
}
