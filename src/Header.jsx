import logo from './Images/logo192.png';

function Header(){
    return(
            <div className='pt-3 pl-2'>
                <img src={logo} alt="nie dziala" style={{height:"35px",verticalAlign:"top"}} />
                <span className='h2 pt-4 text-white-50'>React Course - Countopedia</span>
            </div>
    )
}

export default Header;