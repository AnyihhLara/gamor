// Si estás utilizando Vite con React y TypeScript, puedes crear un endpoint para obtener un token de acceso siguiendo un enfoque más moderno y basado en TypeScript. Aquí tienes un ejemplo de cómo podrías implementar este endpoint utilizando Vite y el enrutador React-Router:

// Primero, asegúrate de tener instaladas las dependencias necesarias. Puedes instalarlas usando npm o yarn:
// CSS
// Copy
// npm install react-router-dom @types/react-router-dom
// Luego, puedes crear un componente funcional en tu aplicación React que maneje la lógica para obtener el token de acceso. Aquí hay un ejemplo de cómo podrías hacerlo:
// JAVASCRIPT
// Copy
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// const AccessTokenEndpoint = () => {
//   const { search } = useLocation();
//   const params = new URLSearchParams(search);
//   const client_id = params.get('client_id');
//   const client_secret = params.get('client_secret');
//   const grant_type = params.get('grant_type');

//   useEffect(() => {
//     const fetchAccessToken = async () => {
//       if (grant_type !== 'client_credentials') {
//         console.error('grant_type must be client_credentials');
//         return;
//       }

//       // Validar el client_id y client_secret (deberías tener tu propia lógica de validación)

//       // Generar un token de acceso (puedes usar fetch u otras librerías)

//       // Devolver el token de acceso
//       const response = await fetch('https://id.twitch.tv/oauth2/token', {
//         method: 'POST',
//         body: new URLSearchParams({ client_id, client_secret, grant_type }),
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded'
//         }
//       });
//       const data = await response.json();
//       console.log(data);
//     };

//     fetchAccessToken();
//   }, [client_id, client_secret, grant_type]);

//   return null; // No se muestra nada en la interfaz
// };

// export default AccessTokenEndpoint;
// En tu archivo de rutas principal, asegúrate de incluir este componente en la ruta correspondiente:
// JAVASCRIPT
// Copy
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import AccessTokenEndpoint from './AccessTokenEndpoint';

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/oauth2/token">
//           <AccessTokenEndpoint />
//         </Route>
//         {/* Otras rutas de tu aplicación */}
//       </Switch>
//     </Router>
//   );
// };

// export default App;
// Este enfoque utiliza React Hooks y el enrutador react-router-dom para manejar la lógica de obtener el token de acceso en un componente funcional. Recuerda adaptar esta implementación a tus necesidades específicas y a la autenticación y generación de tokens de acceso seguros según los requisitos de tu proyecto.
