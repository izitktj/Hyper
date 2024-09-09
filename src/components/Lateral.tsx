export default function Lateral(props: any) {
    return(
        <div className="flex flex-row gap-2">
            <div className="flex flex-col align-text-top">
                <div className="text-white">Content</div>
                <div className="object-top">{props.nomeAcc}</div>
            </div>

            <div className="flex flex-row">
                <div className="text-orange-400">X</div>
            </div>
        </div>
    )
}