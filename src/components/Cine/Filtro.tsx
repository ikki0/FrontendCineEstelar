import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';

type Anchor = 'left';

interface Genero {
  idGenero: number;
  nameGenero: string;
}

interface RequestOptions {
  method: string;
  redirect?: RequestRedirect | undefined;
}

export default function Filtro() {
  const [state, setState] = React.useState<{ [key in Anchor]: boolean }>({
    left: false,
  });

  const [openGender, setOpenGender] = React.useState(false);
  const [generos, setGeneros] = React.useState<Genero[]>([]);

  React.useEffect(() => {
    const requestOptions: RequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch("http://localhost:8081/generos", requestOptions)
      .then(response => response.json())
      .then(data => setGeneros(data))
      .catch(error => console.log('error', error));
  }, []);

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
            {/* Aquí se sitúa la lista de géneros */}
            <div className='genres'>
              {generos.map(genero => (
                <ListItemButton key={genero.idGenero} sx={{ pl: 4 }}>
                  <ListItemText primary={genero.nameGenero} />
                </ListItemButton>
              ))}

            </div>
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
            PaperProps={{ style: { backgroundColor: '#ffc22c' } }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}
