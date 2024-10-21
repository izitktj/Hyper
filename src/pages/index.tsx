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
    <main className="bg-slate-950 h-screen w-screen overflow-auto">
      <Topo/>
      <SubCabecario/>
      <div className="flex flex-row bg-slate-900">
        <Lateral nomeAcc={"Gustavo"}/>

        <div className="flex flex-1 flex-wrap flex-row justify-center gap-2 p-2">
          <Video nome={"Receba v2"} descricao={"RECEBA CARACA!!!! #luva"}/>
          <Video nome={"Salamalenga"} descricao={"shitpost"}/>
          <Video nome={"Perdi a rank tropa"} descricao={"#ff #fyp #soucarentemedaantencao"}/>
          <Video nome={"Como escalar predios da altura do empire state fácil e rápido"} descricao={"#escalacao #seila"}/>
          <Video/>
        </div>
      </div>
    </main>
  );
}
