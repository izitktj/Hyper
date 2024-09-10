import Image from "next/image"

export default function Topo() {
    return(
        <div className="headers">
        <Image
            src="/Logo.png"
            width={40}
            height={40}
            alt="Picture of the author"
        />
        <div className="text-xl text-orange-600">Login</div>
        </div>
    )
}