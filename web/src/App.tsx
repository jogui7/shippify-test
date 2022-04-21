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
import { Driver, Vehicle } from './types';

export default function App() {
  const [open, setOpen] = useState(false);
  const [drivers, setDrivers] = useState<Driver[]>([])
  const [driver, setDriver] = useState<number | string>(0);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [modalData, setModalData] = useState<Vehicle>();

  const deleteVehicle = async (id: number) => {
    const response = await restApi.delete(`/vehicle/${id}`);

    if(response.ok) {
      fetchVehicles();
    }
  }

  const fetchDrivers = useCallback(async () => {
    const response = await restApi.get<Driver[]>(`/driver`);

    if(response.ok && response.data) {
      setDrivers(response.data);
    }
  }, [setDrivers]);

  const fetchVehicles = useCallback(async () => {
    const response = await restApi.get<Vehicle[]>(`/driver/${driver}/vehicle`);

    if(response.ok && response.data) {
      setVehicles(response.data);
    }
  }, [setVehicles, driver]);

  useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles]);

  useEffect(() => {
    fetchDrivers();
  }, [fetchDrivers]);

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
                        {drivers.map(item => (
                          <MenuItem value={item.id} key={item.id}>
                            {`${item.id} - ${item.firstName} ${item.lastName || ''}`}
                          </MenuItem>
                        ))}
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
          setModalData(undefined);
          setOpen(false);
        }}
        reload={fetchVehicles}
        vehicle={modalData}
        drivers={drivers}
      />
    </>
  );
}
