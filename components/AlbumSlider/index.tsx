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
  // Função para criar setas de navegação personalizadas
  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <Box 
        className={className}
        sx={{
          position: 'absolute',
          right: { xs: '5px', md: '15px' },
          zIndex: 2,
          width: { xs: '30px', sm: '40px', md: '50px' },
          height: { xs: '30px', sm: '40px', md: '50px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          borderRadius: '50%',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.8)'
          },
          '&::before': {
            color: '#000',
            fontSize: { xs: '20px', sm: '24px', md: '30px' }
          }
        }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <Box 
        className={className}
        sx={{
          position: 'absolute',
          left: { xs: '5px', md: '15px' },
          zIndex: 2,
          width: { xs: '30px', sm: '40px', md: '50px' },
          height: { xs: '30px', sm: '40px', md: '50px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          borderRadius: '50%',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.8)'
          },
          '&::before': {
            color: '#000',
            fontSize: { xs: '20px', sm: '24px', md: '30px' }
          }
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: false,
    cssEase: 'ease-out',
    lazyLoad: 'progressive' as const,
    swipe: true,
    swipeToSlide: true,
    dotsClass: 'slick-dots custom-dots',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: true,
          swipe: true
        }
      }
    ]
  };

  return (
    <Box 
      sx={{ 
        width: '100%', 
        margin: '0 auto',
        '.custom-dots': {
          bottom: -30,
          '& li button': {
            '&:before': {
              fontSize: '12px',
              color: '#808080',
            }
          },
          '& li.slick-active button': {
            '&:before': {
              color: '#1976d2',
            }
          }
        }
      }}
    >
      <Slider {...settings}>
        {images.map((src, index) => (
          <Box 
            key={index} 
            sx={{ 
              position: 'relative',
              width: '100%',
              height: { xs: '50vh', sm: '60vh', md: '65vh' },
              mx: 'auto',
              px: { xs: 1, sm: 2 }
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
              }}
            >
              <Image 
                src={src} 
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 960px) 90vw, 70vw"
                style={{ 
                  objectFit: 'contain',
                  backgroundColor: 'rgba(0,0,0,0.03)'
                }} 
                alt={`Foto ${index + 1}`}
                priority={index < 3}
                quality={90}
              />
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
