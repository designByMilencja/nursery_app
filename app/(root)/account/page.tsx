import {getServerSession} from "next-auth"
import {options} from "@/app/(auth)/api/auth/[...nextauth]/options"
import {redirect,} from "next/navigation"
import CompanyForm from "@/components/forms/job/CompanyForm"
import CandidateForm from "@/components/forms/job/CandidateForm"
import Link from "next/link"
import {deleteUser} from "@/lib/actions/user.action";

const Account = async () => {
    const session = await getServerSession(options)
    if (!session) {
        redirect("/sign-in")
        return null
    }
    const {role, id} = session?.user
    // await deleteUser(id)
    // redirect('/register')
    // const role = (session?.user as { role?: string })?.role
    // const id = (session?.user as {id?: string })?.id
    return (
        <div>
            Konto {role} {session?.user?.name}
            {role === "admin" && (
                <div>
                    <Link href="/add-news" className="flex justify-end max-sm:w-full">
                        <button
                            className="primary-gradient m-2 min-h-[46px] w-full rounded-lg px-4 py-3 text-light-900">Dodaj
                            nowy news
                        </button>
                    </Link>
                    <Link href="/add-procedure" className="flex justify-end max-sm:w-full">
                        <button
                            className="primary-gradient m-2 min-h-[46px] w-full rounded-lg px-4 py-3 text-light-900">Dodaj
                            nową procedurę
                        </button>
                    </Link>
                </div>
            )}
            {role === "employer" && (
                <div>
                    <p>{session?.user?.email}</p>
                    <h1 className="h1-bold text-dark100_light900">Dodaj swój profil do listy ogłoszeń z pracownikami
                        uzupełniając wymagane dane:</h1>
                    <div className="mt-9">
                        <CompanyForm/>
                    </div>
                </div>
            )}
            {role === "employee" && (
                <div>
                    <p>{session?.user?.email}</p>
                    <h1 className="h1-bold text-dark100_light900">Dodaj swój profil do listy ogłoszeń z pracownikami
                        uzupełniając wymagane dane:</h1>
                    <div className="mt-9">
                        <CandidateForm/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Account
