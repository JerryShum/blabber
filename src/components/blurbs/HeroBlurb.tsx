import { Blurb } from '@prisma/client';
import { ReactNode } from 'react';

interface HeroBlurbProps {
   Blurb: Blurb;
}

export default function HeroBlurb({ Blurb }: HeroBlurbProps): ReactNode {
   return <div>HeroBlurb</div>;
}
