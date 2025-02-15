import Link from "next/link";
import Logo from "../nav/Logo";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-t-muted-foreground py-6 sm:py-8 md:py-10">
      <div className="px-4 md:px-0">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-4 lg:grid-cols-6">
          {/* Logo and description - full width on mobile, half on sm, larger on bigger screens */}
          <div className="col-span-1 flex flex-col gap-2 sm:col-span-2 md:col-span-2 lg:col-span-3">
            <Logo />
            <h4 className="w-full font-noto text-base text-muted-foreground sm:text-base md:w-4/5 lg:w-2/3">
              Blabber is a platform built for creators and storytellers. Join us
              to share your thoughts, explore new perspectives, and connect with
              a community of passionate individuals.
            </h4>
          </div>

          {/* Site Map */}
          <div className="flex flex-col gap-4 sm:gap-8">
            <h4 className="text-lg font-semibold text-primary sm:text-lg">
              Site Map
            </h4>
            <div className="flex flex-col gap-2 sm:gap-4">
              <Link
                href={"/"}
                className="text-base text-muted-foreground hover:underline hover:underline-offset-2 sm:text-base"
              >
                Home
              </Link>
              <Link
                href={"/explore"}
                className="text-base text-muted-foreground hover:underline hover:underline-offset-2 sm:text-base"
              >
                Explore
              </Link>
              <Link
                href={"/about"}
                className="text-base text-muted-foreground hover:underline hover:underline-offset-2 sm:text-base"
              >
                About Us
              </Link>
              <Link
                href={"/"}
                className="text-base text-muted-foreground hover:underline hover:underline-offset-2 sm:text-base"
              >
                User Profile
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4 sm:gap-8">
            <h4 className="text-lg font-semibold text-primary sm:text-lg">
              Services
            </h4>
            <div className="flex flex-col gap-2 sm:gap-4">
              <Link
                href={"/"}
                className="text-base text-muted-foreground hover:underline hover:underline-offset-2 sm:text-base"
              >
                Support
              </Link>
              <Link
                href={"/"}
                className="text-base text-muted-foreground hover:underline hover:underline-offset-2 sm:text-base"
              >
                Contact
              </Link>
              <Link
                href={"/"}
                className="text-base text-muted-foreground hover:underline hover:underline-offset-2 sm:text-base"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4 sm:gap-8">
            <h4 className="text-lg font-semibold text-primary sm:text-lg">
              Socials
            </h4>
            <div className="flex flex-col gap-2 sm:gap-4">
              <Link
                href={"/"}
                className="text-base text-muted-foreground hover:underline hover:underline-offset-2 sm:text-base"
              >
                Twitter
              </Link>
              <Link
                href={"/"}
                className="text-base text-muted-foreground hover:underline hover:underline-offset-2 sm:text-base"
              >
                Instagram
              </Link>
              <Link
                href={"/"}
                className="text-base text-muted-foreground hover:underline hover:underline-offset-2 sm:text-base"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright and policies - stack on mobile, side by side on larger screens */}
        <div className="mt-10 flex flex-col gap-4 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:gap-0 md:mt-20">
          <p className="font-noto text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Blabber. All rights reserved.
          </p>

          <div className="flex items-center gap-4 font-noto text-sm text-muted-foreground">
            <p>Privacy Policy</p>|<p>Terms of Use</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
