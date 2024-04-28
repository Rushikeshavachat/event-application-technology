import { SignUp } from '@clerk/nextjs';

export default function SiginUpPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
 <SignUp path="/sign-up" signInUrl="/sign-in" />
    </main>
  );
}