export default function Video(props: any) {
    return(
        <div className="flex items-center flex-col border border-orange-600 rounded-md p-2">
            <div className="text-gray-100">{props.nome}</div>
            <div className="text-gray-600">{props.descricao}</div>
        </div>
    )
}