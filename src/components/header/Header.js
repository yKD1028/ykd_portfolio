import Logo from './Logo';
import Nav from './Nav';


const Header = () => {
    return (
        <div className="Header">
            <header>
                <Logo />
                <Nav />
            </header>
        </div>
    )
}

export default Header;