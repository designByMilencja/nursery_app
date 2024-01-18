import Link from "next/link";

const CreateProcedure = () => {
    return (
      <Link href="/add-news" className="flex justify-end max-sm:w-full">
      <button className="primary-gradient m-2 min-h-[46px] rounded-lg px-4 py-3 text-light-900">Dodaj nową procedurę</button>
    </Link>
    );
  };
  
  export default CreateProcedure;
  