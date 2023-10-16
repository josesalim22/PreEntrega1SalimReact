import './Navbar.css';
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
          </div>
     )


};

export default Navbar;