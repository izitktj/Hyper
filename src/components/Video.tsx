export default function Video(props: any) {
    return(
        <div className="flex flex-col">
            <div className="flex flex-col items-center border border-orange-600 rounded-md p-2 limit">
                <div className="flex text-gray-100">{props.nome}</div>
                <div className="flex text-gray-600">{props.descricao}</div>
           </div>
        </div>
    )
}