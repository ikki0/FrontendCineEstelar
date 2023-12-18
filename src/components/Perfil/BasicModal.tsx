import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { ButtonSubmitOnClick } from '../Button/ButtonSubmitOnClick';
import './BasicModal.css'

interface BasicModalProps {
  currentPassword: string;
  setCurrentPassword: React.Dispatch<React.SetStateAction<string>>;
  newPassword: string;
  setNewPassword: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
}

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'var(--secondaryColor)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px',
};

export default function BasicModal({currentPassword, setCurrentPassword, newPassword, setNewPassword, onSubmit}: BasicModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void{
    setCurrentPassword(e.target.value);
  }

  function handleChangeNewPassword(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setNewPassword(e.target.value);
  }

  return (
    <div>
      <Button className='btn' onClick={handleOpen}>Cambiar Contraseña</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='modal' sx={style}>
          <picture className="picture-close">
            <img 
                onClick={handleClose}
                className='img-close' src="src/assets/images/Header/closeWhite.svg" 
                alt="image close"/>
          </picture>

          <Typography id="modal-modal-title" variant="h6" component="h2">
            Cambiar Contraseña
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
                type="password" 
                id="outlined-basic" 
                label="Contraseña actual" 
                variant="outlined" 
                value={currentPassword}
                onChange={handleChange}
                sx={{
                    width: '100%',
                    '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'var(--colorBorder)',
                    },
                    '&:hover fieldset': {
                        borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'white',
                    },
                    },
                    '& .MuiInputBase-input': {
                    color: 'white',
                    '&::placeholder': {
                        color: 'white',
                    },
                    },
                    '& .MuiFormLabel-root': {
                        color: 'white',
                    },
                }}
            />
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField 
                type="password"
                id="outlined-basic" 
                label="Nueva Contraseña" 
                variant="outlined" 
                value={newPassword}
                onChange={handleChangeNewPassword}
                sx={{
                    width: '100%',
                    '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'var(--colorBorder)',
                    },
                    '&:hover fieldset': {
                        borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'white',
                    },
                    },
                    '& .MuiInputBase-input': {
                    color: 'white',
                    '&::placeholder': {
                        color: 'white',
                    },
                    },
                    '& .MuiFormLabel-root': {
                        color: 'white',
                    },
                }}
            />
          </Typography>
          <ButtonSubmitOnClick text="Actualizar contraseña" onClick={onSubmit}/>
        </Box>
      </Modal>
    </div>
  );
}
