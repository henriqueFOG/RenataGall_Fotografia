// pages/portfolio.tsx
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  Dialog,
  DialogContent,
  DialogTitle
} from '@mui/material';
import { motion } from 'framer-motion';
import AlbumSlider from '../components/AlbumSlider';

interface Album {
  id: number;
  title: string;
  cover: string;
  images: string[];
}

const albums: Album[] = [
  // {
  //   id: 1,
  //   title: 'Casamentos',
  //   cover: '/albums/casamento/cover.jpg',
  //   images: [
  //     '/albums/casamento/img1.jpg',
  //     '/albums/casamento/img2.jpg',
  //     '/albums/casamento/img3.jpg'
  //   ],
  // },
  {
    id: 1,
    title: 'Concursos',
    cover: "/portfolio/concurso/concursoRenata.jpg",
    images: [
      "/portfolio/concurso/concurso.jpg",
      "/portfolio/concurso/concursoRenata.jpg",
    ],
  },  {
    id: 2,
    title: 'Aniversários',
    cover: "/portfolio/aniversario/aniversario_heitor_bolo.jpg",
    images: [
      "/portfolio/aniversario/aniversario_heitor_bolo.jpg",
      "/portfolio/aniversario/aniversario_heitor_piscina_de_bolinhas.jpg",
      "/portfolio/aniversario/aniversario_heitor_piscina_de_bolinhas2.jpg",
      "/portfolio/aniversario/aniversario_heitor_piscina_de_bolinhas3.jpg",
      "/portfolio/aniversario/aniversario_heitor.jpg",
      "/portfolio/aniversario/aniversario_julia_luiza_bolo.jpg",
      "/portfolio/aniversario/aniversario_julia_luiza_bolo2.jpg",
      "/portfolio/aniversario/aniversario_julia_luiza_coracao.jpg"
    ],
  },
  {
    id: 3,
    title: 'Cachaçarias',
    cover: "/portfolio/cachacaria/arara_cachaçaria.jpg",
    images: [
      "/portfolio/cachacaria/arara_cachaçaria.jpg",
      "/portfolio/cachacaria/arara_cachaçaria_asas.jpg",
      "/portfolio/cachacaria/arara_cachaçaria_lago.jpg",
      "/portfolio/cachacaria/arara_cachaçaria_lago2.jpg",
      "/portfolio/cachacaria/arara_cachaçaria_lago3.jpg",
      "/portfolio/cachacaria/cachaçaria_itajoana_adega.jpg",
      "/portfolio/cachacaria/cachaçaria_itajoana_lago.jpg",
      "/portfolio/cachacaria/Cachaças_Itajoana.jpg",
      "/portfolio/cachacaria/Cachaças_Itajoana2.jpg",
      "/portfolio/cachacaria/Chachaçaria_Itajoana.jpg",
    ],
  },
  {
    id: 4,
    title: 'Ensaios',
    cover: "/portfolio/ensaios/Ensaios_Itajoana.jpg",
    images: [
      "/portfolio/ensaios/ensaio_itajoana_sorrindo.jpg",
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Portfolio() {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Portfólio
      </Typography>
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        <Grid container spacing={4}>
          {albums.map((album) => (
            <Grid item xs={12} sm={6} md={4} key={album.id}>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <Card>
                  <CardActionArea onClick={() => setSelectedAlbum(album)}>
                    <CardMedia
                      component="img"
                      image={album.cover}
                      alt={album.title}
                      sx={{
                        height: { xs: 180, sm: 200, md: 250 },
                        objectFit: 'cover'
                      }}
                    />
                    <Typography variant="h6" align="center" sx={{ py: 2 }}>
                      {album.title}
                    </Typography>
                  </CardActionArea>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      <Dialog
        open={Boolean(selectedAlbum)}
        onClose={() => setSelectedAlbum(null)}
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle>{selectedAlbum?.title}</DialogTitle>
        <DialogContent>
          {selectedAlbum && <AlbumSlider images={selectedAlbum.images} />}
        </DialogContent>
      </Dialog>
    </Container>
  );
}
