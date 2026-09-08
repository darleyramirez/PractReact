import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initial = { tiempo: '', fecha: '' }

export function Reserva() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const validate = (d) => {
    const e = {}
    if (!d.tiempo) e.tiempo = 'Selecciona una franja horaria.'
    if (!d.fecha) e.fecha = 'Debes escoger fecha y hora.'
    return e
  }

  const validarCampo = (name, value) => {
    switch (name) {
      case 'tiempo':
        if (!value) return 'Selecciona una franja horaria.'
        return ''
      case 'fecha':
        if (!value) return 'Debes escoger fecha y hora.'
        // opcional: validar formato
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
    localStorage.setItem('reserva', JSON.stringify(form))
    navigate('/home')
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h3 className="mb-4">Formulario Reserva</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Franja Horaria</label>
              <select name="tiempo" value={form.tiempo} onChange={handleChange} className={`form-select ${errors.tiempo ? 'is-invalid' : ''}`}>
                <option value="">Selecciona...</option>
                <option value="Hora_6">06:00</option>
                <option value="Hora_7">07:00</option>
                <option value="Hora_8">08:00</option>
                <option value="Hora_9">09:00</option>
                <option value="Hora_10">10:00</option>
              </select>
              {errors.tiempo && <div className="invalid-feedback d-block">{errors.tiempo}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Fecha y hora</label>
              <input type="datetime-local" name="fecha" value={form.fecha} onChange={handleChange} className={`form-control ${errors.fecha ? 'is-invalid' : ''}`} />
              {errors.fecha && <div className="invalid-feedback d-block">{errors.fecha}</div>}
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
