const DiaDeHoje: string = "07/09/2024"

function Cabecario()
{
  return(
    <div className="flex justify-between items-center bg-neutral-900 h-15 headers">
      <div>Hyper</div>
      <div className="flex flex-col justify-between items-center">
        <div className="titulo">Bem vindo a o Hyper!</div>
        <div>{DiaDeHoje}</div>
      </div>
      <div>Login</div>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <Cabecario/>
      <h1>Hello, world!</h1>
    </main>
  );
}
