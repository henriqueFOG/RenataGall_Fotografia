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
  DialogTitle,
  Box
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
      "/portfolio/concurso/concurso_vinicola_arouca.jpg",
      "/portfolio/concurso/concurso_vinicola_arouca2.jpg",
      "/portfolio/concurso/concurso_vinicola_arouca3.jpg",
      "/portfolio/concurso/concurso_vinicola_arouca4.jpg",
      "/portfolio/concurso/concurso_vinicola_arouca5.jpg",
      "/portfolio/concurso/concurso_vinicola_arouca6.jpg",
      "/portfolio/concurso/concurso_vinicola_arouca7.jpg",
      "/portfolio/concurso/concurso_vinicola_arouca8.jpg",    ],
  },
  {
    id: 2,
    title: 'Aniversários',
    cover: "/portfolio/aniversario/aniversario_heitor_bolo.jpg",
    images: [
      "/portfolio/aniversario/aniversario_heitor_bolo.jpg",
      "/portfolio/aniversario/aniversario_heitor_piscina_de_bolinhas.jpg",
      "/portfolio/aniversario/aniversario_heitor_piscina_de_bolinhas2.jpg",
      "/portfolio/aniversario/aniversario_heitor_piscina_de_bolinhas3.jpg",
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
  },  {
    id: 4,
    title: 'Ensaios',
    cover: "/portfolio/ensaios/Ensaios_Itajoana.jpg",
    images: [
      "/portfolio/ensaios/Ensaios_Itajoana.jpg",
      "/portfolio/ensaios/ensaio_itajoana_sorrindo.jpg",
      "/portfolio/ensaios/ensaio_henrique_bruna.jpg",
      "/portfolio/ensaios/ensaio_henrique_bruna_costas.jpg",
      "/portfolio/ensaios/ensaio_henrique_bruna_costas2.jpg",
    ],
  },
  {
    id: 5,
    title: 'Ensaio de Produtos',
    cover: "/portfolio/Ensaio_de_produtos/fudge.jpg",
    images: [
      "/portfolio/Ensaio_de_produtos/fudge.jpg",
      "/portfolio/Ensaio_de_produtos/fudge2.jpg",
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
              >                <Card 
                  sx={{ 
                    borderRadius: 2,
                    boxShadow: 3,
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      boxShadow: 6,
                    }
                  }}
                >
                  <CardActionArea onClick={() => setSelectedAlbum(album)}>
                    <Box sx={{ 
                      position: 'relative',
                      paddingTop: '75%', // Proporção 4:3 para manter consistência
                      overflow: 'hidden'
                    }}>
                      <CardMedia
                        component="img"
                        image={album.cover}
                        alt={album.title}
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease-in-out',
                          '&:hover': {
                            transform: 'scale(1.05)'
                          }
                        }}
                      />
                    </Box>
                    <Typography 
                      variant="h6" 
                      align="center" 
                      sx={{ 
                        py: 2,
                        fontWeight: 500
                      }}
                    >
                      {album.title}
                    </Typography>
                  </CardActionArea>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>      <Dialog
        open={Boolean(selectedAlbum)}
        onClose={() => setSelectedAlbum(null)}
        maxWidth="xl"
        fullWidth
        PaperProps={{
          sx: {
            height: { xs: '90vh', sm: '90vh' },
            maxHeight: '95vh',
            borderRadius: { xs: 1, sm: 2 },
            bgcolor: '#fafafa',
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            overflow: 'hidden'
          }
        }}
        TransitionProps={{
          timeout: 400
        }}
        sx={{
          '.MuiDialog-paper': {
            m: { xs: 1, sm: 2, md: 3 }
          },
          '.MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
          }
        }}
      >
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            height: '100%',
            position: 'relative'
          }}
        >
          <DialogTitle 
            sx={{ 
              textAlign: 'center', 
              fontSize: { xs: '1.5rem', md: '2rem' },
              pb: { xs: 0.5, sm: 1 },
              pt: { xs: 2, sm: 2.5 },
              fontWeight: 500,
              color: '#222'
            }}
          >
            {selectedAlbum?.title}
          </DialogTitle>
          <DialogContent 
            sx={{ 
              flex: 1,
              pb: { xs: 2, sm: 3, md: 4 }, 
              px: { xs: 1, sm: 2, md: 4 }, 
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {selectedAlbum && <AlbumSlider images={selectedAlbum.images} />}
          </DialogContent>
          
          <Box 
            sx={{ 
              position: 'absolute', 
              top: 8, 
              right: 8, 
              zIndex: 10 
            }}
            onClick={() => setSelectedAlbum(null)}
          >
            <Box 
              sx={{
                width: { xs: 36, sm: 42 },
                height: { xs: 36, sm: 42 },
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255,255,255,0.7)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  transform: 'scale(1.1)'
                }
              }}
            >
              <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>✕</Typography>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </Container>
  );
}
