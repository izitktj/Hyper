interface VideoProps{
    nome?:string
    descricao?:string
}

function isEmpty(content: any){
    if(content === undefined || content === "") {
        return true
    }

    return false
}

export default function Video(props: VideoProps) {
    return(
        <div className="flex flex-col border border-orange-600 rounded-md p-2 limit">
            <div className="flex text-gray-100 items-center flex-auto">{!isEmpty(props.nome) ?( props.nome ):"Vídeo sem nome"}</div>
            <div className="flex text-gray-600 flex-initial items-start">{!isEmpty(props.descricao) ?( props.descricao ):"Vídeo sem descrição"}</div>
       </div>
    )
}