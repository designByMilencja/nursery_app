import { getServerSession } from "next-auth";
import { options } from "@/app/(auth)/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import CreateNews from "@/components/admin/CreateNews";
import CreateProcedure from "@/components/admin/CreateProcedure";
import CompanyForm from "@/components/forms/job/CompanyForm";
import CandidateForm from "@/components/forms/job/CandidateForm";

const Account = async () => {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/sign-in");
    return null;
  }
  const role = (session?.user as { role?: string })?.role;
  return (
    <div>Konto {role} {session?.user?.name}
      {role === "admin" && (
        (<div>
          <CreateNews />
          <CreateProcedure />
        </div>)
      )}
      {role === "employer" && (
        (<div>
          <p>{session?.user?.email}</p>
          <h1 className="h1-bold text-dark100_light900">Dodaj swój profil do listy ogłoszeń z pracownikami uzupełniając wymagane dane:</h1>
      <div className="mt-9">
        <CompanyForm/>
      </div>
        </div>)
      )}
      {role === "employee" && (
        (<div>
          <p>{session?.user?.email}</p>
          <CandidateForm/>
        </div>)
      )}
    </div>
  );
};

export default Account;
