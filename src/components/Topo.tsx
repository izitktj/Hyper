import Image from "next/image"

export default function Topo() {
    return(
        <div className="flex justify-between items-center bg-black h-15 px-6 py-2">
        <Image
            src="/hyper logo.svg"
            width={40}
            height={40}
            alt="Hyper Logo"
        />
        <div className="text-xl text-orange-600">Login</div>
        </div>
    )
}