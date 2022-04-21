import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { restApi } from '../services/api';
import { Driver, Vehicle } from '../types';

type VehicleFormModalProps = {
  vehicle?: Vehicle;
  drivers: Driver[];
  open: boolean;
  handleClose: () => void;
  reload: () => void;
}

export default function VehicleFormModal({ vehicle, drivers, open, handleClose, reload }: VehicleFormModalProps) {
  const [plate, setPlate] = useState(vehicle?.plate || '');
  const [model, setModel] = useState(vehicle?.model || '');
  const [type, setType] = useState(vehicle?.type || '');
  const [capacity, setCapacity] = useState(vehicle?.capacity || '');
  const [driverId, setDriverId] = useState<number | string | undefined>(vehicle?.driver.id || '')

  useEffect(() => {
    setPlate(vehicle?.plate || '');
    setModel(vehicle?.model || '');
    setType(vehicle?.type || '');
    setCapacity(vehicle?.capacity || '');
    setDriverId(vehicle?.driver.id || '')
  }, [vehicle])

  const handleAdd = async () => {
    const response = await restApi.post('/vehicle', {
      plate,
      model,
      type,
      capacity,
      driverId: Number(driverId),
    });

    if (response.ok) {
      reload();
      handleClose();
      return;
    }

    alert('Could not add vehicle!')
  }

  const handleEdit = async () => {
    const response = await restApi.patch(`/vehicle/${vehicle?.id}`, {
      plate,
      model,
      type,
      capacity,
      driverId: Number(driverId),
    });

    if (response.ok) {
      reload();
      handleClose();
      return;
    }

    alert('Could not update vehicle!');
  }

  return (
    <Dialog open={open} onClose={handleClose} >
      <DialogTitle>{vehicle ? 'Edit' : 'Add'} vehicle</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              value={plate}
              defaultValue={plate}
              onChange={(e) => setPlate(e.target.value)}
              id="plate"
              label="plate"
              fullWidth
              size="small"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={model}
              defaultValue={model}
              onChange={(e) => setModel(e.target.value)}
              id="model"
              label="model"
              fullWidth
              size="small"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={type}
              defaultValue={type}
              onChange={(e) => setType(e.target.value)}
              id="type"
              label="type"
              fullWidth
              size="small"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={capacity}
              defaultValue={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              id="capacity"
              label="capacity"
              fullWidth
              size="small"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>driver</InputLabel>
              <Select
                size="small"
                value={driverId}
                label="driver"
                onChange={(e) => setDriverId(e.target.value)}
              >
                <MenuItem value="" key="">none</MenuItem>
                {drivers.map(item => (
                  <MenuItem value={item.id} key={item.id}>
                    {`${item.id} - ${item.firstName} ${item.lastName || ''}`}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="text">cancel</Button>
        <Button onClick={() => vehicle ? handleEdit() : handleAdd()} variant="contained">confirm</Button>
      </DialogActions>
    </Dialog>
  );
}

VehicleFormModal.defaultProps = {
  vehicle: undefined,
}
