import { getServerSession } from "next-auth";
import { options } from "@/app/(auth)/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import CreateNews from "@/components/admin/CreateNews";
import CreateProcedure from "@/components/admin/CreateProcedure";
import AddCandidatureCompany from "@/components/user/AddCandidatureCompany";
import AddCandidatureEmployee from "@/components/user/AddCandidatureEmployee";

const Account = async () => {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/sign-in");
    return null;
  }
  return (
    <div>Konto {session?.user?.name}
    <p>admin</p>
        <div>
          <p>{session?.user?.email}</p>
          <CreateNews />
          <CreateProcedure />
        </div>
        <p> pracodawca</p>
        <div>
          <p>{session?.user?.email}</p>
          <AddCandidatureCompany/>
        </div>
        <p>pracownik</p>
        <div>
          <p>{session?.user?.email}</p>
          <AddCandidatureEmployee/>
        </div>
  
    </div>
  );
};

export default Account;
