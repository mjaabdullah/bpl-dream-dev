import dolarIcon from '../../assets/DoubleDollar.png';
import logoImg from '../../assets/logo.png';

const Navbar = () => {
    return (
        <>
    <div className="navbar max-w-7xl mx-auto">
  <div className="navbar-start">
    <img src={logoImg} alt="Logo" className='h-18 w-auto'/>
  </div>
  <div className="navbar-end gap-5">
    <ul className='menu menu-vertical lg:menu-horizontal gap-6'>
        <li>Home</li>
        <li>Fixture</li>
        <li>Teams</li>
        <li>Schedules</li>
    </ul>
    <span className="btn">0 Coin <img src={dolarIcon} alt="$" /></span>
  </div>
</div>
        </>
    );
};

export default Navbar;