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
  const role = (session?.user as { role?: string })?.role;

  return (
    <div>Zakładka procedury, widzi to tylko admin i pracownik
      {role === "admin" && (
        (<div>
          <p>{session?.user?.email}</p>
          <p>Dodaj procedurę - jesli jest adminem</p>
        </div>)
      )}
    </div>
  );
};

export default Procedures;
