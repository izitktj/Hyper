import Topo from "@/components/Topo";
import Video from "@/components/Video";
import Lateral from "@/components/Lateral";

function SubCabecario() {
  return(
    <div className="flex justify-center align-top bg-orange-600 text-white gap-4">
      <div>Vídeos engraçados</div>
      <div>Jogos divertidos</div>
      <div>Postagens de texto</div>
      <div>Noticias</div>
      <div>E muito mais</div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="bg-slate-950">
      <Topo/>
      <SubCabecario/>
      <div className="flex flex-row h-screen bg-slate-900">
        <div className="flex items-center place-items-center">
          <Lateral nomeAcc={"Gustavo"}/>
        </div>

        <div className="flex-1 flex justify-center place-items-top h-18 overflow-auto">
          <div className="flex flex-row gap-2 p-2">
            <Video nome={"Receba v2"} descricao={"RECEBA CARACA!!!! #luva"}/>
            <Video nome={"Carlinhos dando a bunda pros caras"} descricao={"shitpost"}/>
            <Video nome={"Perdi o no fap tropa"} descricao={"#ff #fyp #soucarentemedaantencao"}/>
            <Video nome={"Como cromar cartuão atualizado atualizado 2012 sem virus kkkkkk"} descricao={"#crime #7"}/>
          </div>
        </div>
      </div>
    </main>
  );
}
