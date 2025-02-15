import paths from "@/paths";
import Link from "next/link";
import { buttonVariants } from "../UI/button";

export default function NavLinks() {
  return (
    <nav>
      <ul className="flex items-center gap-1">
        <li>
          <Link
            className={buttonVariants({ variant: "link" })}
            href={paths.home()}
          >
            <span className="font-josefin text-base">Home</span>
          </Link>
        </li>
        <li>
          <Link
            className={buttonVariants({ variant: "link" })}
            href={paths.explorePage()}
          >
            <span className="font-josefin text-base">Explore</span>
          </Link>
        </li>
        <li>
          <Link
            className={buttonVariants({ variant: "link" })}
            href={paths.aboutPage()}
          >
            <span className="font-josefin text-base">About Us</span>
          </Link>
        </li>
        <li>
          <Link
            className={buttonVariants({ variant: "link" })}
            href={paths.CreatePage()}
          >
            <span className="font-josefin text-base">Create Blurb</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
