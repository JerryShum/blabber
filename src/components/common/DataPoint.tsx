import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from '@/components/UI/card';
import { ReactElement } from 'react';

type Colour = keyof typeof backgroundColours;

const backgroundColours = {
   default: 'bg-zinc-200 border-[3px] border-zinc-400 p-4',
   green: 'bg-green-200 border-[3px] border-green-400 p-4',
   red: 'bg-red-200 border-[3px] border-red-400 p-4',
   blue: 'bg-blue-200 border-[3px] border-blue-400 p-4',
   yellow: 'bg-yellow-200 border-[3px] border-yellow-400 p-4',
   purple: 'bg-purple-200 border-[3px] border-purple-400 p-4',
   orange: 'bg-orange-200 border-[3px] border-orange-400 p-4',
   pink: 'bg-pink-200 border-[3px] border-pink-400 p-4',
   teal: 'bg-teal-200 border-[3px] border-teal-400 p-4',
   indigo: 'bg-indigo-200 border-[3px] border-indigo-400 p-4',
   gray: 'bg-gray-200 border-[3px] border-gray-400 p-4',
};

const textColours = {
   default: 'text-center leading-none text-zinc-900',
   green: 'text-center leading-none text-green-900',
   red: 'text-center leading-none text-red-900',
   blue: 'text-center leading-none text-blue-900',
   yellow: 'text-center leading-none text-yellow-900',
   purple: 'text-center leading-none text-purple-900',
   orange: 'text-center leading-none text-orange-900',
   pink: 'text-center leading-none text-pink-900',
   teal: 'text-center leading-none text-teal-900',
   indigo: 'text-center leading-none text-indigo-900',
   gray: 'text-center leading-none text-gray-900',
};

const dataSize = {
   xlarge: 'text-9xl',
   large: 'text-8xl',
   medium: 'text-7xl',
   small: 'text-6xl',
   xs: 'text-5xl',
};

interface DataPointProps {
   children: React.ReactNode;
   dataValue: string;
   colour: Colour;
   position: 'bottom' | 'left' | 'right' | 'top';
   size: 'xlarge' | 'large' | 'medium' | 'small' | 'xs';
}
export default function DataPoint({
   children,
   dataValue,
   colour,
   position,
   size,
}: DataPointProps): ReactElement {
   let dataPointReturnValue = null;

   switch (position) {
      default:
         dataPointReturnValue = (
            //! Default with colour values (text center top )
            <Card
               className={`${backgroundColours[colour]} flex flex-col justify-center items-center`}
            >
               <CardHeader className="p-0 text-center w-full">
                  <CardTitle className="text-black">{children}</CardTitle>
               </CardHeader>
               <CardContent className="p-0">
                  <p className={`${textColours[colour]} ${dataSize[size]} `}>
                     {dataValue}
                  </p>
               </CardContent>
            </Card>
         );
      case 'top':
         dataPointReturnValue = (
            //! Default with colour values (text center top )
            <Card
               className={`${backgroundColours[colour]} flex flex-col justify-center items-center`}
            >
               <CardHeader className="p-0 text-center w-full">
                  <CardTitle className="text-black">{children}</CardTitle>
               </CardHeader>
               <CardContent className="p-0">
                  <p className={`${textColours[colour]} ${dataSize[size]} `}>
                     {dataValue}
                  </p>
               </CardContent>
            </Card>
         );
         break;
      case 'bottom':
         dataPointReturnValue = (
            //! Default with colour values (text center top )
            <Card
               className={`${backgroundColours[colour]} flex flex-col justify-center items-center`}
            >
               <CardContent className="p-0">
                  <p className={`${textColours[colour]} ${dataSize[size]} `}>
                     {dataValue}
                  </p>
               </CardContent>
               <CardHeader className="p-0 text-center w-full">
                  <CardTitle className="text-black">{children}</CardTitle>
               </CardHeader>
            </Card>
         );
         break;
      case 'left':
         dataPointReturnValue = (
            //! Default with colour values (text center top )
            <Card
               className={`${backgroundColours[colour]} flex flex-col justify-center items-center`}
            >
               <CardHeader className="p-0 text-start w-full">
                  <CardTitle className="text-black">{children}</CardTitle>
               </CardHeader>
               <CardContent className="p-0">
                  <p className={`${textColours[colour]} ${dataSize[size]} `}>
                     {dataValue}
                  </p>
               </CardContent>
            </Card>
         );
         break;
   }

   return dataPointReturnValue;
}
