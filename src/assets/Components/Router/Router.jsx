import { NavLink, Route, Routes } from 'react-router-dom';

import { Home } from '../Pages/Home/Home';
import { Registro } from '../Pages/Registro/Registro';
import { Usuario } from '../Pages/Usuario/Usuario';
import { Reserva } from '../Pages/Reserva/Reserva';
import { Espacio } from '../Pages/Espacio/Espacio';

export function Router() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container">
          <NavLink className="navbar-brand fw-bold" to="/">
            Mi App
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/registro">
                  Registro
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/usuario">
                  Usuario
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/reserva">
                  Reserva
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/espacio">
                  Espacio
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="bg-light min-vh-100">
        <Routes>
          <Route path="/" element={<Registro />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/reserva" element={<Reserva />} />
          <Route path="/espacio" element={<Espacio />} />
        </Routes>
      </main>
    </>
  );
}
