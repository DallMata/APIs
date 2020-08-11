import React from 'react';
import './App.css';
import AppBar from './components/AppBar';
import backgroundImage from './images/backgroundImage.jpg';
//import Button from '@material-ui/core/Button';
import VerticalMenu from './components/VerticalMenu';
import MisTurnos from './components/TurnosPaciente/MisTurnos';
import ReservarTurno from './components/TurnosPaciente/ReservarTurno';
import HistorialTurnos from './components/TurnosPaciente/HistorialTurnos';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

/*function createDataVM(title, menuItems) {
  return { title: title,  menuItems :  };
}*/

const dataVM = [
  {
    title: 'Turnos',
    menuItems: [
      {
        label: 'Mis Turnos',
        link: '/misTurnos'
      },
      {
        label: 'Reservar Turos',
        link: '/reservarTurno'
      },
      {
        label: 'Historial de Turnos',
        link: '/historialDeTurnos'
      },
    ]
  },
  {
    title: 'Recetas',
    menuItems: [
      {
        label: 'Ver/Descargar Recetas',
        link: '/descargarReceta'
      },
      {
        label: 'Subir Receta',
        link: '/subirReceta'
      },
    ]
  },
  {
    title: 'Historia Clínica',
    menuItems: [
      {
        label: 'Consultar Historia Clínica',
        link: '/consulHistCl'
      },
      {
        label: 'Modificar Historia Clínica',
        link: '/modfiHistCl'
      },
    ]
  },
]

export default function App() {
  return (
      <body style={{
        backgroundImage: `url(${backgroundImage})`,backgroundRepeat: 'no-repeat',minWidth:'100%', width: '800px',minHeight:'100vh', height:'500px',color:'white',  backgroundPosition: 'left',
        backgroundSize: 'cover', paddingTop:'5px'}} >
          <Router>
        <header>
          <AppBar></AppBar>
        </header>
        <div className="d-flex justify-content-around">
            <VerticalMenu data = { dataVM[0] }/>   
            <VerticalMenu data = { dataVM[1] }/>   
            <VerticalMenu data = { dataVM[2] }/>   
        </div> 
        <div className="col-12 d-flex justify-content-center" style={{height:'800px', marginTop:'80px'}}>
            <Switch>
              {/* <Redirect 
                from = '/'
                to= '/misTurnos' /> */}
              <Route  
                exact path="/misTurnos"
                
                >
                  <MisTurnos/>
              </Route>
              <Route path="/reservarTurno">
                <ReservarTurno/>
              </Route>
              <Route path="/historialDeTurnos">
                <HistorialTurnos/>
              </Route>
            </Switch>
        </div>
          </Router>

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous"></script>
      </body>
  );
}
