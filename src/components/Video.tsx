interface VideoProps{
    nome?:string
    descricao?:string
}

export default function Video(props: VideoProps) {
    return(
        <div className="flex flex-col border border-orange-600 rounded-md p-2 limit">
            <div className="flex text-gray-100 items-center flex-auto">{props.nome!==undefined ?( props.nome ):"Vídeo sem nome"}</div>
            <div className="flex text-gray-600 flex-initial items-start">{props.descricao!==undefined ?( props.descricao ):"Vídeo sem descrição"}</div>
       </div>
    )
}