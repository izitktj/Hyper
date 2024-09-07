function Cabecario()
{
  return(
    <div className="headers">
      <div>Hyper</div>
      <div className="flex flex-col justify-between items-center">
        <div className="titulo">Bem vindo a o Hyper!</div>
        <div>luagr de fazer sucesso</div>
      </div>
      <div>Login</div>
    </div>
  )
}
function SubCabecario()
{
  return(
    <div style={SubHeader}>
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
  justifyContent: 'space-evenly',
  alignItems: 'center',
  backgroundColor: '#2a2642',
  color: '#e3c336'
}

export default function Home() {
  return (
    <main>
      <Cabecario/>
      <SubCabecario/>
    </main>
  );
}
