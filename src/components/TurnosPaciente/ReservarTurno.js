import React from 'react';
import TextField from '@material-ui/core/TextField';
import GenerateSelectionBox from '../GenerateSelectionBox'


const especialidades = [
    {
      value: '1',
      label: 'Oftalmología',
    },
    {
      value: '2',
      label: 'Urología',
    },
    {
      value: '3',
      label: 'Traumatología',
    },
    {
      value: '4',
      label: 'Dermatología',
    },
  ];

export default function ReservarTurnos(){

    return (
        <form>
        <GenerateSelectionBox currencies= {especialidades}/>
        <TextField
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className=''
        InputLabelProps={{
          shrink: true,
        }}
      />
        </form>
    );
}