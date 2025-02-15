import Image from "next/image";
import { Card, CardContent } from "../UI/card";

interface TeamCardProps {
  name: string;
  image: string;
  role: string;
}

export default function TeamCard({ name, image, role }: TeamCardProps) {
  return (
    <Card className="overflow-hidden rounded-lg shadow-lg">
      <div className="relative aspect-square w-full overflow-hidden border-b border-border">
        <Image
          src={image}
          className="object-cover object-center"
          fill
          quality={85}
          alt={`Image of ${name}`}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>

      <CardContent className="p-2 sm:p-3 md:p-4">
        <h1 className="text-xl font-semibold text-foreground sm:text-xl md:text-2xl">
          {name} | {role}
        </h1>
      </CardContent>
    </Card>
  );
}
