import { URL_IMG_FLAG, URL_IMG_USER } from "../../../const"
import "./header.css"
export const Header = () =>{
    return (
        <header className="header-wrapper">
                <div className="logo-header">
                        <div className="log">
                        <i className='bx bx-list-ul'></i>
                        </div>
                </div>
                <div className="country">
                    <img className="img-flag" src={URL_IMG_FLAG} alt="img" />
                    <span className="en">EN</span>

                </div>
                <div className="user">
                    <img className="img-user" src={URL_IMG_USER} alt="img" />
                    <div className="text-user">
                        <b>Hello, Mkhitaryan!</b>
                        <p >Last login: Thu Mar 20 2014</p>
                    </div>
                    <i className='bx bxs-down-arrow'></i>
                </div>
        </header>
    )
}