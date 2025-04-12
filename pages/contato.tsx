// pages/contato.tsx
import React from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from '@mui/material';
import { motion } from 'framer-motion';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Contato() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Contato
      </Typography>

      {/* Seção de Contato com Informações e Links */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          mb: 4,
          maxWidth: 600,
          margin: '0 auto',
          p: 2,
          border: '1px solid #ddd',
          borderRadius: 2,
          boxShadow: 5,
          backgroundColor: 'lightblue',
          '&:hover': {
            boxShadow: 10,
            transition: 'box-shadow 0.3s ease-in-out',
          },
        }}
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <PhoneIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Link
                  href="tel:+5511999999999"
                  underline="hover"
                  color="inherit"
                  sx={{ fontWeight: 'bold' }}
                >
                  +55 24 99295-2132
                </Link>
              }
              secondary="Telefone"
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <WhatsAppIcon color="success" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Link
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  underline="hover"
                  color="inherit"
                  sx={{ fontWeight: 'bold' }}
                >
                  WhatsApp: +55 24 99295-2132
                </Link>
              }
              secondary="Envie uma mensagem"
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <InstagramIcon color="secondary" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Link
                  href="https://www.instagram.com/fotosdarg/"
                  target="_blank"
                  underline="hover"
                  color="inherit"
                  sx={{ fontWeight: 'bold' }}
                >
                  @fotosdarg
                </Link>
              }
              secondary="Siga no Instagram"
            />
          </ListItem>
        </List>
      </Box>
      
      {/* <Box
        component={motion.form}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          maxWidth: 600,
          margin: '0 auto',
        }}
        noValidate
        autoComplete="off"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <TextField label="Nome" variant="outlined" fullWidth />
        <TextField label="Email" variant="outlined" fullWidth type="email" />
        <TextField label="Mensagem" variant="outlined" fullWidth multiline rows={4} />
        <Button variant="contained" color="primary">
          Enviar
        </Button>
      </Box> */}
    </Container>
  );
}
