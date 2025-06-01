// pages/index.tsx
import React, { useRef, useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
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

export default function Home() {  // Defina as fotos que serão exibidas no slider
  const photos = [
    // Fotos de concurso
    "/portfolio/concurso/concurso.jpg",
    "/portfolio/concurso/concursoRenata.jpg",
    
    // Fotos de aniversário
    "/portfolio/aniversario/aniversario_heitor_bolo.jpg",
    "/portfolio/aniversario/aniversario_heitor_piscina_de_bolinhas.jpg",
    "/portfolio/aniversario/aniversario_heitor_piscina_de_bolinhas2.jpg",
    "/portfolio/aniversario/aniversario_heitor_piscina_de_bolinhas3.jpg",
    "/portfolio/aniversario/aniversario_heitor.jpg",
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

  // Referência para o container do carrossel para calcular a largura arrastável
  const carouselRef = useRef<HTMLDivElement>(null);
  const [dragWidth, setDragWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      // Calcula a largura total que pode ser arrastada (scrollWidth menos a largura visível)
      setDragWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, []);

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
        </motion.div>
        <motion.div variants={itemVariants}>
          {/* Área do slider de imagens */}
          <Box sx={{ overflow: "hidden", mb: 2 }}>
            <motion.div
              ref={carouselRef}
              drag="x"
              dragConstraints={{ right: 0, left: -dragWidth }}
              style={{ display: "flex", gap: "1rem", cursor: "grab" }}
            >
              {photos.map((src, index) => (
                <Box
                  key={index}
                  sx={{
                    minWidth: 300,
                    height: 300,
                    borderRadius: "50%",
                    overflow: "hidden",
                    boxShadow: 3,
                    border: "4px solid #1976d2",
                    position: "relative",
                  }}
                >
                  <Image
                    src={src}
                    alt={`Renata Gall - Imagem ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              ))}
            </motion.div>
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
