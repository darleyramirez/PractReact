import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initial = {
  nombres: '',
  correo: '',
  contraseña: '',
  rol: '',
}

export function Usuario() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const validate = (data) => {
    const e = {}
    if (!data.nombres.trim()) e.nombres = 'El nombre es obligatorio.'
    if (!data.correo.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.correo)) e.correo = 'Correo inválido.'
    if (!data.contraseña || data.contraseña.length < 6) e.contraseña = 'Mínimo 6 caracteres.'
    if (!data.rol) e.rol = 'Selecciona un rol.'
    return e
  }

  const validarCampo = (name, value) => {
    switch (name) {
      case 'nombres':
        {
          const v = String(value ?? '').trim()
          if (!v) return 'El nombre es obligatorio.'
          if (v.length < 2) return 'El nombre debe tener al menos 2 caracteres.'
          if (v.length > 50) return 'El nombre no puede superar 50 caracteres.'
          return ''
        }
      case 'correo':
        if (String(value).trim() === '') return 'El correo es obligatorio.'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Ingresa un correo válido.'
        return ''
      case 'contraseña':
        if (!value) return 'La contraseña es obligatoria.'
        if (value.length < 6) return 'La contraseña debe tener al menos 6 caracteres.'
        return ''
      case 'rol':
        if (!value) return 'Debes seleccionar un rol.'
        return ''
      default:
        return ''
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: validarCampo(name, value) }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const egs = validate(form)
    if (Object.keys(egs).length > 0) return setErrors(egs)
    // guardar simuladamente en localStorage
    localStorage.setItem('usuario', JSON.stringify(form))
    navigate('/home', { state: { usuario: form } })
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h3 className="mb-4">Formulario Usuario</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombres</label>
              <input name="nombres" value={form.nombres} onChange={handleChange} className={`form-control ${errors.nombres ? 'is-invalid' : ''}`} />
              {errors.nombres && <div className="invalid-feedback d-block">{errors.nombres}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Correo</label>
              <input name="correo" value={form.correo} onChange={handleChange} className={`form-control ${errors.correo ? 'is-invalid' : ''}`} />
              {errors.correo && <div className="invalid-feedback d-block">{errors.correo}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input type="password" name="contraseña" value={form.contraseña} onChange={handleChange} className={`form-control ${errors.contraseña ? 'is-invalid' : ''}`} />
              {errors.contraseña && <div className="invalid-feedback d-block">{errors.contraseña}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Rol</label>
              <select name="rol" value={form.rol} onChange={handleChange} className={`form-select ${errors.rol ? 'is-invalid' : ''}`}>
                <option value="">Selecciona...</option>
                <option value="Administrador">Administrador</option>
                <option value="Usuario">Usuario</option>
              </select>
              {errors.rol && <div className="invalid-feedback d-block">{errors.rol}</div>}
            </div>

            <div className="d-grid">
              <button className="btn btn-primary">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
