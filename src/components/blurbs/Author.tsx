import { User } from "@prisma/client";
import { ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../UI/avatar";
import Link from "next/link";
import paths from "@/paths";

interface AuthorProps {
  user: User;
  hero?: boolean;
}

export default function Author({ user, hero }: AuthorProps): ReactNode {
  return (
    // <Link href={paths.userPage(user.id)}>
    <div className="flex items-end justify-end gap-2">
      <Avatar>
        <AvatarImage src={user.image ?? ""} alt="Author Avatar" />
        <AvatarFallback> </AvatarFallback>
      </Avatar>

      <h2
        className={`font-josefin text-lg text-muted-foreground md:text-2xl ${!hero && "text-white"} lg:text-white`}
      >
        {user.name}
      </h2>
    </div>
    // </Link>
  );
}
