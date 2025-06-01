// pages/index.tsx
import React, { useRef, useEffect, useState } from "react";
import { Container, Typography, Box, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Image from "next/image";

// Variantes para animação dos container e itens
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  // Defina as fotos que serão exibidas no slider
  const photos = [
    // Fotos de concurso
    "/portfolio/home/renata_fotografa.jpg",
    "/portfolio/concurso/concursoRenata.jpg",
    "/portfolio/concurso/concurso.jpg",
    
    
    
    // Fotos de aniversário
    "/portfolio/aniversario/aniversario_heitor_bolo.jpg",
    "/portfolio/aniversario/aniversario_heitor_piscina_de_bolinhas.jpg",
    "/portfolio/aniversario/aniversario_heitor_piscina_de_bolinhas2.jpg",
    "/portfolio/aniversario/aniversario_heitor_piscina_de_bolinhas3.jpg",
    "/portfolio/aniversario/aniversario_julia_luiza_bolo.jpg",
    "/portfolio/aniversario/aniversario_julia_luiza_bolo2.jpg",
    "/portfolio/aniversario/aniversario_julia_luiza_coracao.jpg",
    
    // Fotos de cachaçaria
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
    
    // Fotos de ensaios
    "/portfolio/ensaios/ensaio_itajoana_sorrindo.jpg",
    "/portfolio/ensaios/Ensaios_Itajoana.jpg"
  ];

  // Estados para controle do carrossel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Função para ir para a próxima imagem
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % photos.length; // Garante que o índice volte ao início
      return newIndex;
    });
  };

  // Função para ir para a imagem anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + photos.length) % photos.length; // Garante que o índice vá para o final ao ultrapassar o início
      return newIndex;
    });
  };

  // Ajuste no useEffect para evitar reinicializações desnecessárias
  useEffect(() => {
    if (isAutoPlaying) {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
        }, 3000);
      }
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isAutoPlaying]);

  // Pausar autoplay quando hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <Container maxWidth="lg">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{ textAlign: "center", marginTop: "3rem" }}
      >
        <motion.div variants={itemVariants}>
          <Typography variant="h2" component="h1" gutterBottom>
            Bem vindo ao meu portfólio
          </Typography>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Typography variant="h5" color="textSecondary" gutterBottom>
            Olá, eu sou Renata Gall.
          </Typography>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Typography variant="body1" color="textSecondary" paragraph>
            Tenho 26 anos e sou apaixonada pela fotografia. Recentemente,
            conquistei um concurso que celebrou minha visão artística e
            criatividade. Essa vitória me inspira a criar imagens que contam
            histórias e capturam emoções de maneira única.
          </Typography>
        </motion.div>        <motion.div variants={itemVariants}>
          {/* Área do slider de imagens com setas e autoplay */}
          <Box 
            sx={{ 
              position: 'relative',
              overflow: "hidden", 
              mb: 2,
              maxWidth: '100%'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Container das imagens */}
            <Box
              sx={{
                display: 'flex',
                transform: `translateX(-${currentIndex * (100 / photos.length)}%)`,
                transition: 'transform 0.5s ease-in-out',
                width: `${photos.length * 100}%`
              }}
            >
              {photos.map((src, index) => (
                <Box
                  key={index}
                  sx={{
                    width: `${100 / photos.length}%`,
                    display: 'flex',
                    justifyContent: 'center',
                    px: 1
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 250, sm: 300, md: 350 },
                      height: { xs: 250, sm: 300, md: 350 },
                      borderRadius: "50%",
                      overflow: "hidden",
                      boxShadow: 3,
                      border: "4px solid #1976d2",
                      position: "relative",
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)'
                      }
                    }}
                  >
                    <Image
                      src={src}
                      alt={`Renata Gall - Imagem ${index + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                      priority={index < 3}
                    />
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Seta esquerda */}
            <IconButton
              onClick={prevSlide}
              sx={{
                position: 'absolute',
                left: { xs: 8, md: 16 },
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                color: '#1976d2',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  transform: 'translateY(-50%) scale(1.1)'
                },
                zIndex: 2,
                boxShadow: 2,
                transition: 'all 0.3s ease'
              }}
            >
              <ArrowBackIos />
            </IconButton>

            {/* Seta direita */}
            <IconButton
              onClick={nextSlide}
              sx={{
                position: 'absolute',
                right: { xs: 8, md: 16 },
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                color: '#1976d2',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  transform: 'translateY(-50%) scale(1.1)'
                },
                zIndex: 2,
                boxShadow: 2,
                transition: 'all 0.3s ease'
              }}
            >
              <ArrowForwardIos />
            </IconButton>

            {/* Indicadores de posição */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 2,
                gap: 1
              }}
            >
              {photos.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    backgroundColor: index === currentIndex ? '#1976d2' : 'rgba(0,0,0,0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.2)',
                      backgroundColor: index === currentIndex ? '#1976d2' : 'rgba(0,0,0,0.5)'
                    }
                  }}
                />
              ))}
            </Box>
          </Box>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Typography variant="body2" color="textSecondary">
            Seja bem-vindo(a) e espero que se encante com cada clique!
          </Typography>
        </motion.div>
      </motion.div>
    </Container>
  );
}
