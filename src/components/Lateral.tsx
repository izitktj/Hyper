interface LateralProps{
    nomeAcc:string
}

export default function Lateral(props: LateralProps) {
    return(
        <div className="flex flex-row h-screen gap-2 bg-black px-6">
            <div className="flex flex-col p-2">
                <div className="text-white">Content</div>
                <div className="text-white">{props.nomeAcc}</div>
            </div>

            <div className="flex items-center place-items-center">
                <div className="text-orange-400">X</div>
            </div>
        </div>
    )
}