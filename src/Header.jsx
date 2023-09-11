import logo from './Images/logo192.png';

function Header(){
    return(
            <div className='py-2 pl-2' style={{ borderBottom: "1px solid #777"}}>
                <img src={logo} alt="nie dziala" style={{height:"35px",verticalAlign:"top"}} />
                <span className='h2 pt-4 m2 text-white-50'>React Course - Countopedia</span>
            </div>
    )
}

export default Header;