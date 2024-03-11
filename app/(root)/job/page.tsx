import { getServerSession } from "next-auth";
import { options } from "@/app/(auth)/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Link from "next/link";

const Job = async () => {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/sign-in");
  }
  const role = (session?.user as { role?: string })?.role;

  return (
    <div>
      <h1>Ogłoszenia dla pracowników i pracodawców</h1>
     mapa z uzytkownikow ktorzy dodali swoja kandydature do bazy, 
     pojedynczy record - zmapowany na uzytkownikow, 
     tabsy-podział oferuję pracę, szukam pracy
     sprawdzenie czy zalogowany uzytkownik dodał sie do bazy, jesli nie wyswietlamy przycisk
     <Link href="/account" className="flex justify-end max-sm:w-full">
          <button className="primary-gradient m-2 min-h-[46px] rounded-lg px-4 py-3 text-light-900">Dodaj swój profil do ogłoszeń</button>
        </Link>
    </div>
  );
};

export default Job;
