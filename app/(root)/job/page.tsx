import { getServerSession } from "next-auth";
import { options } from "@/app/(auth)/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const Job = async () => {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/sign-in");
  }
  const role = (session?.user as { role?: string })?.role;

  return (
    <div>Zakładka praca - widoczna dla wszystkich
      <p>{role}</p>
      <p>Wyswietlamy pracownkikow szukajacych pracy</p>
      <p>Wyswietlamy pracodawcow oferujacych prace</p>
    </div>
  );
};

export default Job;
