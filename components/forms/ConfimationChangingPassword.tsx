import Thanks from "@/components/forms/Thanks";
import Link from "next/link";

const ConfirmationChangingPassword = () => {
  return (
    <>
    <Thanks text="Dziękujemy! Twoje hasło zostało zmienione." />
    <Link href="/sign-in">Przejdź do logowania</Link>
    </>
  );
};

export default ConfirmationChangingPassword;
