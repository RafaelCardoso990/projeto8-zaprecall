import logo from './images/logo.png'

export default function Tela1(){
    return(
        <main className="initial">
            <img src={logo} alt='logo'/>
            <h1>ZapRecall</h1>
            <button onClick="">Iniciar Recall</button>
        </main>

    )
        
}
