import { useLocation } from 'react-router-dom'
import './home.css'

export function Home() {
  const location = useLocation()
  const usuario = location.state?.usuario ?? JSON.parse(localStorage.getItem('usuarioRegistrado') ?? 'null')

  return (
    <div className="home-root">
      <header className="home-hero">
        <div className="container hero-content">
          <div>
            <h1 className="hero-title">Espacios de trabajo pensados para rendir</h1>
            <p className="hero-sub">Diseño minimalista, ambientes tranquilos y funciones enfocadas en productividad.</p>
            <div className="hero-actions">
              <a className="btn btn-ghost" href="#espacios">Ver espacios</a>
              <a className="btn btn-primary" href="#contacto">Reservar</a>
            </div>
          </div>
          <div className="hero-image">
            <img alt="Oficina moderna" src="https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=1400&q=80" />
          </div>
        </div>
      </header>

      <main className="container py-5">
        <section id="espacios" className="grid-features">
          <article className="feature-card">
            <img loading="lazy" src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80" alt="Sala de reuniones" />
            <h3>Salas de reuniones</h3>
            <p>Ambientes equipados para sesiones efectivas y conferencias pequeñas.</p>
          </article>

          <article className="feature-card">
            <img loading="lazy" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80" alt="Escritorio" />
            <h3>Estaciones individuales</h3>
            <p>Espacios pensados para concentración con iluminación y ergonomía.</p>
          </article>

          <article className="feature-card">
            <img loading="lazy" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80" alt="Lounge" />
            <h3>Zonas comunes</h3>
            <p>Rincones para pausas, networking y cafés cortos sin interrupciones.</p>
          </article>
        </section>

        <section id="perfil" className="profile-card mt-5">
          <div>
            <h4>Tu perfil</h4>
            {usuario ? (
              <div className="profile-grid">
                <div><strong>Nombre</strong><div>{usuario.nombre}</div></div>
                <div><strong>Correo</strong><div>{usuario.correo}</div></div>
                <div><strong>Rol</strong><div>{usuario.rol}</div></div>
              </div>
            ) : (
              <div className="text-muted">No hay usuario registrado. Completa el formulario para ver tu información aquí.</div>
            )}
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <div className="container">
          <small>© 2026 Paseo Office • Minimal workspace</small>
        </div>
      </footer>
    </div>
  )
}