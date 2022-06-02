import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';
import { useState } from 'react';

const Navbar = ({ authenticate, setAuthenticate }) => {
    const menuList = [
        "여성",
        "Divided",
        "남성",
        "신생아/유아",
        "아동",
        "H&M Home",
        "Sale",
        "지속가능성"
    ];
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login");
    }
    const goToLogout = () => {
        setAuthenticate(false);
        navigate("/");
    }
    const goToMain = () => {
        navigate("/");
    }

    const search = (event) => {
        if (event.key === "Enter") {
            //입력한 검색어를 읽어와서 url을 바꿔준다.
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`);
        }

    }

    return (
        <div>
            <div className='login-wrap'>
                <div className="menu-area-off">
                    <FontAwesomeIcon icon={faBars}  onClick={handleShow} size='2x' />

                    <Offcanvas show={show} onHide={handleClose} className="canvas-off">
                        <Offcanvas.Header closeButton/>
                        <Offcanvas.Body>
                        <ul className="menu-list menu-off">
                            {menuList.map(menu => <li>{menu}</li>)}
                        </ul>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>

                {!authenticate
                    ? (<div className="login-button" onClick={goToLogin}>
                        <FontAwesomeIcon className="login-Icon" icon={faUser} />
                        <div>로그인</div>
                    </div>)
                    : (<div className="login-button" onClick={goToLogout}>
                        <FontAwesomeIcon className="login-Icon" icon={faUser} />
                        <div>로그아웃</div>
                    </div>)}
            </div>

            <div className="nav-section">
                <img onClick={goToMain} src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg" />
            </div>

            <div className="menu-area">
                <ul className="menu-list">
                    {menuList.map(menu => <li>{menu}</li>)}
                </ul>
                <div className='menu-search-wrap'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input id="menu-search" className='menu-search' type="text" placeholder='제품검색'
                        onKeyPress={(event) => search(event)} />
                </div>
            </div>
        </div>
    )
}

export default Navbar