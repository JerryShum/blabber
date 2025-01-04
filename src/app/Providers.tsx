'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

interface ProviderProps {
   children: React.ReactNode;
   themeProviderProps?: React.ComponentProps<typeof NextThemesProvider>; // Add this to pass theme props
}

export default function Providers({
   children,
   themeProviderProps,
}: ProviderProps) {
   return (
      <NextThemesProvider {...themeProviderProps}>
         <SessionProvider>{children}</SessionProvider>
      </NextThemesProvider>
   );
}
