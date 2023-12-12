import Image from "next/image";
import React from "react";
import Link from "next/link";

interface Props {
    text: string;
}
const Thanks = ({text}:Props) => {
  return (
    <div className="flex-center mt-[200px] min-w-[320px] max-w-[550px] flex-col gap-5 text-center">
      <p>{text}</p>
      <Image src="/assets/images/mail.png" alt="envelope image" width={50} height={50}/>
      <Link href="/sign-in" className="px-2 hover:text-primary-500">Przejdź do logowania</Link>
    </div>
  );
};

export default Thanks;
