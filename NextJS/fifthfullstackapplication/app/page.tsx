import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      Todo Application

      <Link href="/signin" className="mt-4 text-blue-500 underline"> 
        Signin to Todo App
      </Link>
      <Link href="/signup" className="mt-4 text-blue-500 underline"> 
        Signup to Todo App
      </Link>
    </div>
  );
}
