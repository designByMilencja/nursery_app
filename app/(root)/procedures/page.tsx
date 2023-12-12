"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Procedures = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/sign-in");
    }
  });
  return (
    <div>Procedure Client Session
      {session?.user?.role === "admin" && (
        (<div>
          <p>{session?.user?.email}</p>
          <p>Dodaj procedurę</p>
        </div>)
      )}
      {session?.user?.role === "employee" && (
        (<div>
          <p>{session?.user?.email}</p>
          <p>
            konto pracownika
          </p></div>)
      )}
    </div>
  );
};

export default Procedures;
