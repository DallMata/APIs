import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import ToolTip from '@material-ui/core/Tooltip';


function createData(id, name, calories, fat, carbs, protein) {
  return {id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('1', '10/8/2020', '10:30', 'Jean Claude Van Damme', 'Urología', 'Palermo'),
  createData('2', '24/9/2020', '15:00', 'Eren Jaeger', 'Psiquiatría', 'Palermo'),
  createData('3', '2/10/2020', '09:00', 'Neo Matrix', 'Dermatología', 'Palermo'),
  createData('4', '.', '.', '.', '.', '.'),
  createData('5', '.', '.', '.', '.', '.'),
];

export default function HistorialTurnos() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div style={{border: '1px solid #000000', height: '800px', width: '1500px',}}>
      <TableContainer style={{backgroundColor:'#940B1C00',}} component={Paper}>
      <Table className="" aria-label="simple table">
        <TableHead style={{backgroundColor: '#940B1C'}}>
          <TableRow >
            <TableCell style = {{color:'#fff', fontSize: '25px', fontWeight:'bold'}} align="center">Fecha</TableCell>
            <TableCell style = {{color:'#fff', fontSize: '25px', fontWeight:'bold'}} align="center">Hora</TableCell>
            <TableCell style = {{color:'#fff', fontSize: '25px', fontWeight:'bold'}} align="center">Profesional</TableCell>
            <TableCell style = {{color:'#fff', fontSize: '25px', fontWeight:'bold'}} align="center">Especialidad</TableCell>
            <TableCell style = {{color:'#fff', fontSize: '25px', fontWeight:'bold'}} align="center">Sucursal</TableCell>
            <TableCell style = {{color:'#fff', fontSize: '25px', fontWeight:'bold'}} align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row" style={{ fontSize:'20px', fontWeight:'bold'}} align="center">
                {row.name}
              </TableCell>
              <TableCell style={{ fontSize:'20px', fontWeight:'bold'}} align="center">{row.calories}</TableCell>
              <TableCell style={{ fontSize:'20px', fontWeight:'bold'}} align="center">{row.fat}</TableCell>
              <TableCell style={{ fontSize:'20px', fontWeight:'bold'}} align="center">{row.carbs}</TableCell>
              <TableCell style={{ fontSize:'20px', fontWeight:'bold'}} align="center">{row.protein}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </div>
  );
}