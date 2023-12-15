import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-1">
      <Image src="/assets/images/logo-pp.png" alt="Logo" width={53} height={53} />
      <p className="h2-bold font-poppins text-accent-blue  dark:text-light-900 max-sm:hidden">
        Portal <span className="text-primary-500">Pielęgniarek</span>
      </p>
    </Link>
  );
};

export default Logo;
