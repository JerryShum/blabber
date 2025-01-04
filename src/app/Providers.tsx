'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useEffect, useState } from 'react';

interface ProviderProps {
   children: React.ReactNode;
}

export default function Providers({ children }: ProviderProps) {
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true); // Ensure this component only renders after the client has mounted
   }, []);

   if (!mounted) {
      // Prevent rendering on the server to avoid mismatched themes
      return null;
   }

   return (
      <NextThemesProvider
         attribute="class"
         defaultTheme="system"
         enableSystem // Synchronize with the system preference
         disableTransitionOnChange
      >
         <SessionProvider>{children}</SessionProvider>
      </NextThemesProvider>
   );
}
