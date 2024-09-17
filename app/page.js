import { getSession, getUserData } from "@/lib";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession()
  console.log(session, '<<< ini session')
  const userData = await getUserData()
  console.log(userData, '<<< ini userData')
  if (!session) {
    redirect('/login')
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

    </div>
  );
}
