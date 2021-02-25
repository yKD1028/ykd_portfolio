import instagram from './instagram.svg';
import twitter from './twitter.svg';
import youtube from './youtube.svg'

const Nav = () => {
    return(
        <div className="Navigation">
            <nav>
                <ul>
                    <li><a rel="noreferrer" href="https://www.instagram.com/ykd.jp/" target="_blank"><img src={instagram} className="instagram" alt="logo" /></a></li>
                    <li><a rel="noreferrer" href="https://twitter.com/ykd_jp" target="_blank"><img src={twitter} className="twitter" alt="logo" /></a></li>
                    <li><a rel="noreferrer" href="https://youtu.be/iKyqZnDBBAY" target="_blank"><img src={youtube} className="youtube" alt="logo" /></a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;