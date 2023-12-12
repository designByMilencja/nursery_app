import { getServerSession } from "next-auth";
import { options } from "@/app/(auth)/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const Job = async () => {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/sign-in");
  }
  return (
    <div>Job Server Session
      <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p>
    </div>
  );
};

export default Job;
