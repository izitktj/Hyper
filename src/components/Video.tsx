export default function Video(props: any) {
    return(
        <div className="flex flex-col">
            <div className="flex flex-col border border-orange-600 rounded-md p-2 limit">
                <div className="flex text-gray-100 items-center flex-auto">{props.nome}</div>
                <div className="flex text-gray-600 flex-initial items-start">{props.descricao}</div>
           </div>
        </div>
    )
}