import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';

export default class CustomSlider extends Component {
  render() {
    const settings =  {
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        duration: 500,
        initialSlide: 0,
        minHeight:'800px',
    };
    return (
      <div>
        <Slider { ...settings }>
          <div>
            <h1>Informe Covid-19</h1>
            <h2>Rusia anuncia que su vacuna contra el coronavirus estará certificada el 12 de agosto</h2>
            <p style={{height:'150px'}}>El viceministro de Salud de Rusia, Oleg Grídnev, anunció que el 
              Centro de Investigación Nacional de Epidemiología y Microbiología 
              Gamaléi de Moscú (NITsEM) comenzó los trámites para obtener la 
              certificación de la primera vacuna contra el coronavirus y que la 
              licencia estará lista el 12 de agosto.
            </p>
          </div>
          <div>
            <h1>2</h1>
          </div>
          <div>
            <h1>3</h1>
          </div>
          <div>
            <h1>4</h1>
          </div>
        </Slider>
      </div>
    );
  }
}