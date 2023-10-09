"use client"
import { SignOutButton, SignedIn, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";


export default function Signedinn() {
    const router = useRouter();
  const pathname = usePathname();
  const { userId } = useAuth();
  return (
    <SignedIn>
          <SignOutButton signOutCallback={() => router.push("/sign-in")}>
            <div className='flex cursor-pointer gap-4 p-4'>
              <Image
                src='/assets/logout.svg'
                alt='logout'
                width={24}
                height={24}
              />

              <p className='text-light-2 max-lg:hidden'>Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
  )
}
