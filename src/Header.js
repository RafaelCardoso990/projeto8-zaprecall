import logo from './images/logo-pequeno.png'

export default function Header(){
    return(
        <header className="header">
            <img src={logo} alt='logo'/>
            <h1>ZapRecall</h1>
        </header>

    )
        
}