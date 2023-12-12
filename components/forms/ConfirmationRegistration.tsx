import Thanks from "@/components/forms/Thanks";
import Link from "next/link";

const ConfirmEmailToChangePassword = () => {
  return (
    <>
    <Thanks text="Dziękujemy! Konto zostało utworzone pomyślnie." />
    <Link href="/sign-in" className="px-2 hover:text-primary-500">
        Przejdź do logowania!
      </Link>
    </>
  );
};

export default ConfirmEmailToChangePassword;
