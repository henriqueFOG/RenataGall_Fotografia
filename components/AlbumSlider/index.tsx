// components/AlbumSlider.tsx
import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import Image from 'next/image';

// Importa os estilos do slick-carousel (adicione esses imports em seu arquivo global, por exemplo, em styles/globals.css)
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface AlbumSliderProps {
  images: string[];
}

export default function AlbumSlider({ images }: AlbumSliderProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true, // Efeito de transição parecido com virar páginas de um book
    cssEase: 'linear',
  };

  return (
    <Box sx={{ maxWidth: 800, margin: '0 auto' }}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <Box key={index} sx={{ position: 'relative', height: 500 }}>
            <Image src={src} fill style={{ objectFit: 'cover' }} alt={`Foto ${index + 1}`} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
