import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ListItem from '@mui/material/ListItem';

type Anchor = 'left';

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
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Terror" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Acción" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Aventura" />
            </ListItem>
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
