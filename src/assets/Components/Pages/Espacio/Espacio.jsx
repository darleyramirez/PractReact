import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initial = { nombre: '', foto: '', aforo: '', descripcion: '' }

export function Espacio() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const validate = (d) => {
    const e = {}
    if (!d.nombre.trim()) e.nombre = 'El nombre es obligatorio.'
    if (!d.aforo || isNaN(Number(d.aforo)) || Number(d.aforo) <= 0) e.aforo = 'Aforo inválido.'
    return e
  }

  const validarCampo = (name, value) => {
    switch (name) {
      case 'nombre':
        {
          const v = String(value ?? '').trim()
          if (!v) return 'El nombre es obligatorio.'
          if (v.length < 2) return 'El nombre debe tener al menos 2 caracteres.'
          if (v.length > 50) return 'El nombre no puede superar 50 caracteres.'
          return ''
        }
      case 'aforo':
        if (!value) return 'El aforo es obligatorio.'
        if (isNaN(Number(value)) || Number(value) <= 0) return 'Aforo inválido.'
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
    const es = validate(form)
    if (Object.keys(es).length > 0) return setErrors(es)
    localStorage.setItem('espacio', JSON.stringify(form))
    navigate('/home')
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h3 className="mb-4">Formulario Espacio</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input name="nombre" value={form.nombre} onChange={handleChange} className={`form-control ${errors.nombre ? 'is-invalid' : ''}`} />
              {errors.nombre && <div className="invalid-feedback d-block">{errors.nombre}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Foto (URL)</label>
              <input name="foto" value={form.foto} onChange={handleChange} className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">Aforo</label>
              <input name="aforo" value={form.aforo} onChange={handleChange} className={`form-control ${errors.aforo ? 'is-invalid' : ''}`} />
              {errors.aforo && <div className="invalid-feedback d-block">{errors.aforo}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Descripción</label>
              <textarea name="descripcion" value={form.descripcion} onChange={handleChange} className="form-control" />
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
