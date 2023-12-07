import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

function Proyecciones(): React.JSX.Element {
  return (
    <>
      <header>
        <h1>Disfruta de tus películas ODS!</h1>
      </header>

      <main>
        {/* <ImageList sx={{ width: 500, height: 450 }}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={<span>by: {item.author}</span>}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList> */}
      </main>
    </>
  );
}

export { Proyecciones };
