interface LateralProps{
    nomeAcc:string
}

export default function Lateral(props: LateralProps) {
    return(
        <div className="flex flex-row h-screen w-1/6 justify-between bg-black p-6">
            <div className="flex flex-col p-2 max-w-full">
                <div className="text-orange-600 text-xl overflow-clip">{props.nomeAcc}</div>
                <div className="text-white">Content</div>
            </div>

            <div className="flex items-center place-items-center">
                <div className="text-orange-400">X</div>
            </div>
        </div>
    )
}