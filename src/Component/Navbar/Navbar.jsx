import dolarIcon from '../../assets/DoubleDollar.png';
import logoImg from '../../assets/logo.png';

const Navbar = ({ coin }) => {
    return (
        <>
    <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
  <div className="">
    <img src={logoImg} alt="Logo" className='h-12 sm:h-18 w-auto'/>
  </div>
  <div className="space-x-4">
    <ul className='menu menu-vertical md:menu-horizontal gap-6 hidden md:inline-flex'>
        <li>Home</li>
        <li>Fixture</li>
        <li>Teams</li>
        <li>Schedules</li>
    </ul>
    <span className="btn">{coin} Coin <img src={dolarIcon} alt="$" /></span>
  </div>
</div>
        </>
    );
};

export default Navbar;