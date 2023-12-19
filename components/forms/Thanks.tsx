import Image from "next/image"
import React from "react"

interface Props {
  text: string
}
const Thanks = ({ text }: Props) => {
  return (
    <div className="flex-center mx-auto h-screen min-w-[320px] max-w-[550px] flex-col gap-5 text-center">
      <p>{text}</p>
      <Image src="/assets/images/mail.png" alt="envelope image" width={50} height={50} />
    </div>
  )
}

export default Thanks
