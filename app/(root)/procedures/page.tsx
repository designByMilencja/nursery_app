"use client";
import Button from "@/components/forms/Button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";


const Procedures = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/sign-in");
    }
  });
  const admin = session?.user?.role

  return (
    <div>Zakładka <b>PROCEDURY</b>, widzi to tylko admin i pracownik
        <div>
          <p>obecnie mamy tu rolę: <b>{session?.user?.role}</b></p>
          {admin === 'admin' ? 
          (<Link href="/add-news" className="flex justify-end max-sm:w-full">
          <button className="primary-gradient m-2 min-h-[46px] rounded-lg px-4 py-3 text-light-900">Dodaj procedurę</button>
        </Link>)  : ""
}  
        </div>
    </div>
  );
};

export default Procedures;
