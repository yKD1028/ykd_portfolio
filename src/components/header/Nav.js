import github from './github.svg';
import twitter from './twitter.svg';
import youtube from './youtube.svg'

const Nav = () => {
    return(
        <div className="Navigation">
            <nav>
                <ul>
                    <li><a rel="noreferrer" href="https://github.com/yKD1028" target="_blank"><img src={github} className="instagram" alt="logo" /></a></li>
                    <li><a rel="noreferrer" href="https://twitter.com/ykd_jp" target="_blank"><img src={twitter} className="twitter" alt="logo" /></a></li>
                    <li><a rel="noreferrer" href="https://youtu.be/iKyqZnDBBAY" target="_blank"><img src={youtube} className="youtube" alt="logo" /></a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;