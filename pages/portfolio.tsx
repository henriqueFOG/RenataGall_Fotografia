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
  {
    id: 1,
    title: 'Casamentos',
    cover: '/albums/casamento/cover.jpg',
    images: [
      '/albums/casamento/img1.jpg',
      '/albums/casamento/img2.jpg',
      '/albums/casamento/img3.jpg'
    ],
  },
  {
    id: 2,
    title: 'Retratos',
    cover: "/portfolio/concurso.jpg",
    images: [
      "/images/renataGall.png",
      "/portfolio/concurso.jpg",
      "/portfolio/concursoRenata.jpg",
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
