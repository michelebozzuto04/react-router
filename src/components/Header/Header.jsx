import { Link, NavLink } from "react-router-dom"
import './Header.css'
import logo from '../../assets/react.svg'
import { IoBagHandleOutline, IoPersonOutline, IoSearchOutline } from "react-icons/io5";

export default function Header() {

    const menu = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'Products',
            path: '/products',
        },
        {
            name: 'About',
            path: '/about',
        },
    ]

    return (
        <div className="headerContainer">
            <div style={{ width: '33%' }}>
                <a href="/">
                    <img src={logo} />
                </a>
            </div>

            <div style={{ width: '33%', display: 'flex', justifyContent: 'center' }}>
                <ul>
                    {menu.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink className='nav-link' to={item.path}>{item.name}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div style={{ width: '33%', display: 'flex', justifyContent: 'end' }}>
                <ul>
                    <li>
                        <IoSearchOutline size={25} color="#000" />
                    </li>
                    <li>
                        <IoPersonOutline size={25} color="#000" />
                    </li>
                    <li>
                        <IoBagHandleOutline size={25} color="#000" />
                    </li>
                </ul>
            </div>
        </div>
    )
}