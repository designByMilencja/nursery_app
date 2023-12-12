'use client'
import { signOut } from "next-auth/react";

const Logout = () => {
  function handleSignOut() {
    signOut({ callbackUrl: '/' });
  }
  return (
    <button
      className="small-medium btn-secondary mt-[50px] min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
      onClick={handleSignOut}>
      <span className="primary-text-gradient">Wyloguj się</span>
    </button>
  );
};

export default Logout;
