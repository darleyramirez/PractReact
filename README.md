 # PractReact — Guía completa
 
 Este repositorio contiene una pequeña aplicación React creada con Vite que implementa un Home minimalista y tres formularios principales: Registro, Usuario, Reserva y Espacio. El propósito de este README es explicar el proyecto desde cero, cómo ejecutarlo, qué archivos importan y cómo funcionan las validaciones y estilos.
 
 **Requisitos**
 - **Node.js**: 16+ recomendado.
 - **npm**: el gestor usado en este proyecto.
 
 **Comandos útiles**
 - **Instalar dependencias:** `npm install`
 - **Desarrollo (hot-reload):** `npm run dev` — abre http://localhost:5173/ (o el puerto que Vite asigne).
 - **Build producción:** `npm run build` — genera `dist/` con los archivos optimizados.
 - **Previsualizar build:** `npm run preview` (si está configurado).
 
 **Estructura principal del proyecto**
 - **`index.html`**: entrada HTML que carga el bundle.
 - **`src/main.jsx`**: punto de arranque React — carga Bootstrap y el `Router`.
 - **`src/index.css`**: estilos globales creados para neutralizar acentos azules y aplicar paleta minimalista.
 - **`src/assets/Components/Router/Router.jsx`**: componente de enrutado principal y la barra de navegación.
 - **`src/assets/Components/Pages/Home/Home.jsx`**: página de inicio minimalista.
 - **`src/assets/Components/Pages/Home/home.css`**: estilos específicos del Home.
 - **`src/assets/Components/Pages/Registro/Registro.jsx`**: formulario de registro con validación en tiempo real.
 - **`src/assets/Components/Pages/Usuario/Usuario.jsx`**: formulario de usuario; validación por campo (onChange) implementada.
 - **`src/assets/Components/Pages/Reserva/Reserva.jsx`**: formulario para crear reservas; validación por campo implementada.
 - **`src/assets/Components/Pages/Espacio/Espacio.jsx`**: formulario para crear/registrar espacios; validación por campo implementada.
 
 **Qué hace cada componente (resumen técnico)**
 - **`Router.jsx`**: define rutas `/`, `/registro`, `/home`, `/usuario`, `/reserva`, `/espacio`. También contiene la barra de navegación (ahora con estilos neutrales para un aspecto minimalista).
 - **`Home.jsx`**: muestra una hero con imagen y secciones con tarjetas de espacios (salas, estaciones, zonas comunes). Lee el usuario del `location.state` o `localStorage` para mostrar perfil resumido.
 - Formularios (`Registro`, `Usuario`, `Reserva`, `Espacio`):
	 - Usan `useState` para el estado local del formulario.
	 - Usan `useNavigate` para redirigir al `Home` después de un registro exitoso.
	 - Implementan validación por campo **en tiempo real**: cada `handleChange` actualiza `errors` con el resultado de `validarCampo` (o `validarCampo`/`validarName` según el archivo).
	 - Se muestran mensajes y estilos (clases `is-invalid` / `.invalid-feedback`) cuando un campo no pasa validación.
	 - Al enviar, los datos se guardan en `localStorage` como demo (clave: `usuarioRegistrado`, `reserva`, `espacio` o `usuario`).
 
 **Validaciones principales ya incluidas**
 - `nombre` / `nombres`: obligatorio, trim (sin espacios en los extremos), mínimo 2 caracteres, máximo 50 caracteres.
 - `correo`: obligatorio y formato básico con expresión regular `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`.
 - `contraseña`: obligatorio, mínimo 6 caracteres.
 - `confirmarContrasena`: debe coincidir con `contrasena`.
 - `aforo`: obligatorio y número positivo.
 - `tiempo` y `fecha` en `Reserva`: obligatorios.
 
 Si quieres reforzar la regla de `nombre` para permitir sólo letras y algunos signos (guiones, apóstrofes), puedo añadir la expresión regular sugerida.
 
 **Estilos y paleta**
 - Se incorporó Bootstrap para la base visual (`src/main.jsx` importa `bootstrap/dist/css/bootstrap.min.css`).
 - Añadimos `src/index.css` para sobreescribir las clases `text-primary` / `btn-primary` y otras, sustituyendo el azul por grises oscuros (estética minimalista).
 - `Home` tiene su CSS local en `src/assets/Components/Pages/Home/home.css` para layout de hero, tarjetas y perfil.
 
 **Imágenes**
 - Las imágenes usadas provienen de Unsplash (enlaces dentro de `Home.jsx`). Si una URL falla, el componente se cambió para usar `loading="lazy"` y una URL alternativa puede ser aplicada.
 
 **Deployment rápido**
 - Si quieres publicar la app como página estática: crear un build (`npm run build`) y servir `dist/` desde cualquier servidor estático (Netlify, Vercel, GitHub Pages, o un bucket en S3/Cloudfront). Puedo ayudarte a configurar GitHub Pages o una GitHub Action para desplegar automáticamente.
 
 **Dónde mirar primero (para aprender/estudiar)**
 1. `src/main.jsx` — cómo arranca la app y se integran Bootstrap y CSS global.
 2. `src/assets/Components/Router/Router.jsx` — entender las rutas y la estructura de navegación.
 3. `src/assets/Components/Pages/Registro/Registro.jsx` — patrón de validación en tiempo real que se replicó en los demás formularios.
 4. `src/assets/Components/Pages/Home/Home.jsx` y `home.css` — para entender la estética minimalista aplicada.
 
 **Siguientes pasos sugeridos**
 - (Opcional) Añadir regex para `nombre` si quieres restringir caracteres.
 - (Opcional) Conectar formularios a un backend real (POST fetch/axios) — necesitaríamos la URL del API y posibles headers/CORS.
 - (Opcional) Crear pruebas unitarias o E2E que verifiquen validaciones y navegación.
 
 **Contacto y control de versiones**
 - El código fue subido a: https://github.com/darleyramirez/PractReact
 - Commit principal que contiene los cambios recientes: "feat: add forms, field validations, minimal Home styling".
 
 Si quieres, añado una sección de ejercicios de estudio paso a paso o convierto este README en una guía de clase separada con ejemplos interactivos.
 
 ***
 Archivo creado automáticamente por asistente — si falta detalle en alguna parte dímelo y lo amplío.
 
# Proyecto de registro con React y Vite

Este proyecto es una versión mejorada de un formulario de registro, manteniendo tus variables principales como `nombre`, `correo`, `contrasena` y `rol`, y agregando la lógica que faltaba para que funcione como una aplicación real.

## ¿Qué se agregó?

- Validación de campos del formulario.
- Manejo de estado con `useState`.
- Confirmación de contraseña.
- Checkbox de términos y condiciones.
- Mensajes de error y éxito.
- Navegación con `react-router-dom` entre `Registro` y `Home`.
- Persistencia con `localStorage` para guardar la información del usuario registrado.
- Vista de bienvenida con la información del usuario en la página de inicio.

## ¿Para qué sirve?

Sirve para registrar usuarios en una aplicación web con un flujo completo:

1. El usuario llena sus datos.
2. El sistema valida que la información sea correcta.
3. Se guarda la información del usuario.
4. Se navega a la vista principal para mostrar la información registrada.

## Estructura principal

- `src/assets/Components/Pages/Registro/Registro.jsx`: formulario de registro.
- `src/assets/Components/Pages/Home/Home.jsx`: vista de bienvenida con datos del usuario.
- `src/assets/Components/Router/Router.jsx`: rutas de navegación de la app.

## Cómo ejecutar el proyecto

```bash
npm install
npm run dev
```

## Variables principales usadas

- `nombre`
- `correo`
- `contrasena`
- `rol`

Estas variables se mantienen y se usan en el formulario y en la vista final para mostrar el contenido registrado.

## Resultado esperado

La aplicación permite:

- registrar un usuario,
- validar campos,
- confirmar contraseña,
- mostrar errores si falta información,
- guardar la información del usuario,
- redirigir a la vista home con los datos del registro.

## Teoría (conceptos clave)

1. React y Vite
	 - React es una librería para construir interfaces. Vite es una herramienta de desarrollo que compila y sirve la app en modo desarrollo rápidamente.
	 - `src/main.jsx` es el punto de entrada: monta la app en el DOM y carga estilos y rutas.

2. `useState`
	 - Hook para manejar estado local en componentes funcionales.
	 - Ejemplo: `const [value, setValue] = useState('')`.

3. `useNavigate` (react-router-dom)
	 - Permite navegar programáticamente: `const navigate = useNavigate(); navigate('/home')`.

4. Validación de formularios
	 - Implementamos validación por campo en `handleChange` y validación completa en `handleSubmit`.
	 - Mostrar errores usa clases Bootstrap: `is-invalid` y `.invalid-feedback`.

5. Persistencia con `localStorage`
	 - Guardamos objetos serializados: `localStorage.setItem('usuarioRegistrado', JSON.stringify(obj))`.
	 - Para leer: `JSON.parse(localStorage.getItem('usuarioRegistrado'))`.

6. Estilos
	 - Bootstrap aporta la base; `src/index.css` sobrescribe colores para una paleta minimalista y neutraliza clases `.text-primary` y `.btn-primary`.

## Ejemplos de código útiles

- validateName (trim, min=2, max=50):

```js
function validateName(value) {
	const v = String(value ?? '').trim();
	if (!v) return 'El nombre es obligatorio.';
	if (v.length < 2) return 'El nombre debe tener al menos 2 caracteres.';
	if (v.length > 50) return 'El nombre no puede superar 50 caracteres.';
	return '';
}
```

- Enviar formulario a un backend (fetch):

```js
async function sendUsuario(data) {
	const res = await fetch('http://localhost:8080/api/usuarios', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	});
	if (!res.ok) throw new Error('Error en el servidor');
	return res.json();
}
```

- Uso básico de `useNavigate`:

```js
import { useNavigate } from 'react-router-dom';
function MiComponente() {
	const navigate = useNavigate();
	return <button onClick={() => navigate('/home')}>Ir a Home</button>;
}
```

## Ejercicios prácticos (para estudiar)

1) Ejecutar y explorar
	- Objetivo: ejecutar la app localmente y navegar los formularios.
	- Pasos: `npm install` → `npm run dev` → abrir la URL que Vite muestre.
	- Comprobar: que al enviar datos válidos en `Registro` la app guarda en `localStorage` y redirige.

2) Restringir caracteres del `nombre`
	- Objetivo: aplicar una regex para permitir sólo letras, espacios, guiones y apóstrofes.
	- Pista: modifica `validateName` para usar `/^[A-Za-zÀ-ÖØ-öø-ÿ'\\-\\s]+$/`.
	- Resultado esperado: nombres con números o símbolos muestran error.

3) Conexión a backend (simulado)
	- Objetivo: modificar `Registro.jsx` para enviar los datos a un endpoint (usar la función `sendUsuario`).
	- Pista: llama `await sendUsuario(usuario)` dentro de `handleSubmit` antes de guardar en `localStorage`.
	- Consideración: si no hay backend, usa `fetch` a `https://httpbin.org/post` para pruebas.

4) Añadir prueba unitaria simple (Jest)
	- Objetivo: probar `validateName`.
	- Pista: crea `validate.test.js` con casos: vacío, muy corto, válido, con símbolos.

5) Cambiar paleta y verificar impacto
	- Objetivo: ajustar colores en `src/index.css` y observar cambios.
	- Pista: busca `.text-primary` y `.btn-primary` en `index.css` y cambia a tu color preferido.

## Soluciones / Pistas

1) Ejecutar y explorar
	- Solución: `npm install && npm run dev` y abrir la URL que Vite muestre.

2) Regex para `nombre` (ejemplo de solución):

```js
function validateName(value) {
	const v = String(value ?? '').trim();
	if (!v) return 'El nombre es obligatorio.';
	if (v.length < 2) return 'El nombre debe tener al menos 2 caracteres.';
	if (v.length > 50) return 'El nombre no puede superar 50 caracteres.';
	if (!/^[A-Za-zÀ-ÖØ-öø-ÿ'\\-\\s]+$/.test(v)) return 'Sólo letras, espacios, guiones y apóstrofes.';
	return '';
}
```

3) Envío a backend (ejemplo básico):

```js
async function handleSubmit(e) {
	e.preventDefault();
	const errs = validateAll(formData);
	if (Object.keys(errs).length) return setErrors(errs);
	try {
		const saved = await sendUsuario(formData);
		localStorage.setItem('usuarioRegistrado', JSON.stringify(saved));
		navigate('/home', { state: { usuario: saved } });
	} catch (err) {
		console.error(err);
		alert('Error al conectar con el servidor');
	}
}
```

4) Prueba Jest (esqueleto):

```js
import { validateName } from './utils';
test('nombre vacío', () => expect(validateName('')).toBe('El nombre es obligatorio.'));
test('nombre corto', () => expect(validateName('A')).toBe('El nombre debe tener al menos 2 caracteres.'));
test('nombre válido', () => expect(validateName('María Pérez')).toBe(''));
```

## ¿Quieres que genere material didáctico extra?
Puedo generar:
- Un set de preguntas tipo quiz con respuestas.
- Una guía paso a paso para desplegar en GitHub Pages.
- Unos tests automatizados (Jest + React Testing Library) para las validaciones.

---
Actualizo la tarea correspondiente en la lista.

## Preguntas de repaso (Q&A)

1. ¿Qué es este proyecto y para qué sirve?
   - Es una aplicación de ejemplo hecha con React + Vite que muestra un `Home` minimalista y tres formularios (Registro, Usuario, Reserva, Espacio). Sirve para practicar formularios, validaciones, navegación y despliegue estático.

2. ¿Cómo levanto el proyecto localmente?
   - Ejecuta `npm install` y luego `npm run dev`. Abre la URL que Vite muestre (ej. http://localhost:5173).

3. ¿Dónde está el punto de entrada de la app?
   - En `src/main.jsx`. Ahí se monta React y se importan Bootstrap y `index.css`.

4. ¿Qué archivo controla las rutas de la aplicación?
   - `src/assets/Components/Router/Router.jsx` define las rutas y la barra de navegación.

5. ¿Cómo se valida un campo en tiempo real?
   - Cada formulario tiene un `handleChange` que llama a una función `validarCampo(name, value)` y guarda mensajes en un objeto `errors` en el estado. Se usa `is-invalid` para marcar visualmente.

6. ¿Dónde puedo ver la lógica de validación del `nombre`?
   - En `Registro.jsx`, `Usuario.jsx` y `Espacio.jsx` hay funciones `validarCampo` que aplican trim, mínimo 2 y máximo 50 caracteres.

7. ¿Cómo se muestra un mensaje de error bajo un input?
   - Se renderiza un `<div className="invalid-feedback d-block">{errors.field}</div>` cuando existe error.

8. ¿Qué hace `useNavigate` en los formularios?
   - Permite redirigir al usuario después de un envío exitoso, por ejemplo `navigate('/home')`.

9. ¿Qué datos se guardan en `localStorage` y por qué?
   - Se guardan objetos de ejemplo: `usuarioRegistrado`, `reserva`, `espacio` y `usuario` para simular persistencia y permitir mostrar datos en `Home`.

10. ¿Cómo cambio la paleta de colores del proyecto?
	- Edita `src/index.css` y/o `src/assets/Components/Pages/Home/home.css`. `index.css` sobrescribe las clases Bootstrap principales como `.text-primary` y `.btn-primary`.

11. ¿Dónde están las imágenes usadas en `Home`?
	- Enlaces directos a Unsplash dentro de `Home.jsx`. Puedes reemplazarlos por URLs propias o por imágenes locales copiándolas a `public/`.

12. ¿Cómo hago para que el formulario envíe datos a un backend real?
	- Dentro de `handleSubmit`, antes de guardar en `localStorage`, llama a una función `sendUsuario` que haga `fetch` o `axios.post` al endpoint del backend; maneja errores y estados de carga.

13. ¿Qué pruebas mínimas puedo hacer manualmente?
	- Campos vacíos muestran errores, contraseñas deben coincidir, email con formato inválido debe mostrar error, aforo debe ser un número positivo, reserva requiere fecha y tiempo.

14. ¿Cómo genero la versión de producción?
	- `npm run build` crea `dist/` con archivos optimizados listos para servir.

15. ¿Puedo desplegarlo en GitHub Pages o Netlify?
	- Sí. Para GitHub Pages sirve `dist/` (o usa GitHub Actions para automatizar). Netlify o Vercel detectan el proyecto y ejecutan `npm run build` automáticamente.

16. ¿Cómo añado una nueva validación (p. ej. regex para nombre)?
	- Modifica `validarCampo` en el componente correspondiente e incluye la prueba con `if (!/regex/.test(v)) return 'mensaje'`.

17. ¿Dónde puedo agregar tests automáticos?
	- Añade Jest y React Testing Library; crea tests en `__tests__` o `src/__tests__` y ejecuta con `npm test` (configurar scripts si hace falta).

18. ¿Cómo revertir cambios o crear una nueva rama para experimentar?
	- Usa `git checkout -b feature/nombre` para crear una rama nueva y `git push -u origin feature/nombre` para subirla.

19. ¿Qué archivo debo editar para cambiar la navegación o añadir rutas nuevas?
	- `src/assets/Components/Router/Router.jsx` — añade un nuevo `<Route path="/ruta" element={<MiComponente/>} />` y un `NavLink` si quieres un enlace en la barra.

20. ¿Dónde puedo ver los commits y la versión subida al repositorio?
	- En https://github.com/darleyramirez/PractReact; el commit reciente que subí contiene las validaciones y README actualizado.

Si quieres, convierto estas preguntas en un quiz interactivo o un archivo `questions.md` separado con formato de estudio para Gemini. ¿Lo genero ahora? 
