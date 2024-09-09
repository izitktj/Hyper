import Topo from "@/components/Topo";
import Video from "@/components/Video";
import Lateral from "@/components/Lateral";

function SubCabecario() {
  return(
    <div style={SubHeader} className="gap-4">
      <div>Vídeos engraçados</div>
      <div>Jogos divertidos</div>
      <div>Postagens de texto</div>
      <div>Noticias</div>
      <div>E muito mais</div>
    </div>
  )
}

const SubHeader = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#2a2642',
  color: '#e3c336',
}

export default function Home() {
  return (
    <main className="bg-slate-950 h-screen">
      <Topo/>
      <SubCabecario/>
      <div className="flex flex-row">
        <div className="flex items-center place-items-center">
          <Lateral/>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="flex flex-row gap-2">
            <Video nome={'Receba v2'} descricao={'RECEBA CARACA!!!! #luva'}/>
            <Video nome={"Carlinhos dando a bunda pros caras"} descricao={"shitpost"}/>
            <Video nome={"Perdi o no fap tropa"} descricao={"#ff #fyp #soucarentemedaantencao"}/>
          </div>
        </div>
      </div>
    </main>
  );
}
