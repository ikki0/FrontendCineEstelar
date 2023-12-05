import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ListItem from '@mui/material/ListItem';

type Anchor = 'left';

interface Genero {
  id: number;
  nombre: string;
}
  
const response: Genero[] =[
  { "id": 1, "nombre": "Acción" },
  { "id": 2, "nombre": "Comedia" },
  { "id": 3, "nombre": "Drama" },
  { "id": 4, "nombre": "Ciencia ficción" },
  { "id": 5, "nombre": "Aventura" }
]

export default function Filtro() {
  const [state, setState] = React.useState<{ [key in Anchor]: boolean }>({
    left: false,
  });

  const [openGender, setOpenGender] = React.useState(false);

  const handleGenderClick = () => {
    setOpenGender(!openGender);
  };

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItemButton onClick={handleGenderClick}>
          <ListItemText primary="Género" />
        </ListItemButton>
        <Collapse in={openGender} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* Esta es la sección actualizada con la lista de géneros */}
            <div className='genres'> {/* Comentario: Aquí se sitúa la lista de géneros */}
              {response.map(generos => (
                <ListItem key={generos.id} sx={{ pl: 4 }}>
                  <ListItemText primary={generos.nombre} />
                </ListItem>
              ))}
            </div>
            {/* Fin de la sección actualizada */}
          </List>
        </Collapse>
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      {(['left'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <img
            src="src/assets/images/Cines/flechaN.png"
            alt="Filtros"
            onClick={toggleDrawer(anchor, true)}
            style={{ width: '50px', height: '50px', cursor: 'pointer' }}
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{ style: { backgroundColor: '#ffc22c' } }} // Establecer el color de fondo
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}
