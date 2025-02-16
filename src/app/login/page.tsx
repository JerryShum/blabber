import Image from "next/image";
import aesthetic from "/public/aestheitc2.png";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import LoginForm from "@/components/login/LoginForm";

export default async function SignUpPage() {
  const session = await auth();
  if (session) redirect("/");

  return (
    <div className="flex w-full items-center justify-center p-4">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:gap-10">
        <LoginForm />

        <div className="w-full md:w-auto">
          <Image
            src={aesthetic}
            height={100}
            width={500}
            alt="image of someone writing on a laptop"
            placeholder="blur"
            loading="lazy"
            className="h-auto w-full max-w-[500px]"
          />
        </div>
      </div>
    </div>
  );
}
