import Link from "next/link";
import GithubButton from "../common/GithubButton";
import GoogleButton from "../common/GoogleButton";
import { Button } from "../UI/button";
import { Input } from "../UI/input";
import { Label } from "../UI/label";

export default function LoginForm() {
  return (
    <div className="mx-auto w-full max-w-md px-4 font-josefin sm:px-6 md:px-8">
      <h2 className="mb-2 text-left text-3xl font-semibold sm:text-4xl">
        Login
      </h2>
      <h4 className="mb-6 text-sm text-red-400">
        *Logging in through Google/Email is currently not available.
      </h4>

      <div className="mb-6 flex flex-col gap-4">
        <GithubButton />
        <GoogleButton />
      </div>

      <h4 className="my-4 text-center text-muted-foreground">or</h4>

      <form className="mb-6 w-full">
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="block text-base tracking-wider sm:text-lg"
            >
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              className="w-full rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="block text-base tracking-wider sm:text-lg"
            >
              Password
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              className="w-full rounded-xl"
            />
          </div>

          <Button className="mt-2 w-full rounded-xl" size={"lg"} disabled>
            <span className="font-semibold">Login</span>
          </Button>
        </div>
      </form>

      <div className="w-full border-t py-4 text-center font-noto text-xs text-muted-foreground sm:text-sm">
        Don't have an account?{" "}
        <Link
          href={"/signup"}
          className="text-primary underline transition-colors hover:text-primary/80"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
