'use client';

import { useSession } from 'next-auth/react';
import { ReactNode } from 'react';
import LoginButton from '../common/LoginButton';
import SignUpButton from '../common/SignUpButton';

export default function NavAuth() {
   const session = useSession();

   let authContent: ReactNode;

   //! If session is loading, don't show anything (prevents weird behaviour)
   if (session.status === 'loading') {
      authContent = null;
   } else if (!session.data?.user || !session.data) {
      //! If there is no session (user is currently not logged in)
      authContent = (
         <div className="space-x-2">
            <LoginButton />
            <SignUpButton />
         </div>
      );
   }

   return authContent;
}
