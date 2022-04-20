import React, { useCallback, useEffect, useState } from 'react';
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
  Typography,
  Box
} from '@mui/material';
import ShippifyLogo from './components/ShippifyLogo';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { restApi } from './services/api';
import AddIcon from '@mui/icons-material/AddCircleRounded';
import VehicleFormModal from './components/VehicleFormModal';

type Driver = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type Vehicle = {
  id: number;
  plate: string;
  model: string;
  type: string;
  capacity: string;
  driver: Driver;
};

export default function App() {
  const [open, setOpen] = useState(false);
  const [driver, setDriver] = useState<number | string>(0);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [modalData, setModalData] = useState<Vehicle>()

  const deleteVehicle = async (id: number) => {
    const response = await restApi.delete(`/vehicle/${id}`);

    if(response.ok) {
      fetchVehicles();
    }
  }

  const fetchVehicles = useCallback(async () => {
    const response = await restApi.get<Vehicle[]>(`/driver/${driver}/vehicle`);

    if(response.ok && response.data) {
      setVehicles(response.data);
    }
  }, [setVehicles, driver]);

  useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles]);

  return (
    <>
      <Container maxWidth="lg">
        <Box my={4} display="flex" justifyContent="center" alignItems="center">
          <ShippifyLogo />
          <Typography variant="h4" component="h1" align="center" style={{ marginLeft: 16 }}>
            Test
          </Typography>
        </Box>
        <Box>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <FormControl fullWidth>
                      <InputLabel>driver</InputLabel>
                      <Select
                        size="small"
                        value={driver}
                        label="driver"
                        onChange={(e) => setDriver(e.target.value)}
                      >
                        <MenuItem value={1}>joao guis</MenuItem>
                        <MenuItem value={2}>belen</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                  <TableCell>id</TableCell>
                  <TableCell>plate</TableCell>
                  <TableCell>model</TableCell>
                  <TableCell>type</TableCell>
                  <TableCell>capacity</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => setOpen(true)}
                    >
                      <AddIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {vehicles.map(vehicle => (
                  <TableRow hover key={vehicle.id}>
                    <TableCell />
                    <TableCell>{vehicle.id}</TableCell>
                    <TableCell>{vehicle.plate}</TableCell>
                    <TableCell>{vehicle.model}</TableCell>
                    <TableCell>{vehicle.type}</TableCell>
                    <TableCell>{vehicle.capacity}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        onClick={() => {
                          setModalData(vehicle);
                          setOpen(true);
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => deleteVehicle(vehicle.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
      <VehicleFormModal
        open={open}
        handleClose={() => {
          setOpen(false);
          setModalData(undefined);
        }}
        reload={fetchVehicles}
        vehicle={modalData}
      />
    </>
  );
}
