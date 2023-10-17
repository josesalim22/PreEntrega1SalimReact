import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';


const Navbar = () => {
     return (
          <div  className="navbar-container">
               <div>
                    <img src={'./images/logo.png'} alt="logo" height={'150px'} />
               </div>
               <div>
                    <ul className="list-item">
                         <li><button className='category-button'>Productos</button></li>
                         <li><button className='category-button'>Nosotros</button></li>
                         <li><button className='category-button'>Contacto</button></li>
                    </ul>
                    
               </div>
               <CartWidget />
          </div>
     )


};

export default Navbar;