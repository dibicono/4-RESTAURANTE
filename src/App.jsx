import './App.css'
import AppRouter from './routes/AppRouter'
import { NavLink } from 'react-router-dom'

function App() {

  return (
    <>


      <ul>       
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <li>
          <a className="nav-link"><NavLink to="/Home">HOME</NavLink></a>
        </li>
        <li>
          <a className="navbar-brand"><NavLink to="/Contacto">CONTACTO</NavLink></a>
        </li>
        <li>
          <a className="navbar-brand"><NavLink to="/Ubicacion">UBICACION</NavLink></a>
        </li>
      </nav>
      </ul>
      <h1>probando</h1>


      <AppRouter />
    </>

  )
}

export default App
