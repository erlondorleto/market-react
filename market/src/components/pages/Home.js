import styles from './Home.module.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const categoriasPrincipais = [
    { src: '/alimentos.png', alt: 'alimentos', label: 'Alimentos', rota: '/alimentos' },
    { src: '/bebidas.png', alt: 'bebidas', label: 'Bebidas', rota: '/bebidas' },
    { src: '/animal.png', alt: 'animal', label: 'Pets', rota: '/pets' },
    { src: '/limpeza.png', alt: 'limpeza', label: 'Limpeza', rota: '/limpeza' }
  ];

  const destaqueProdutos = [
    { src: '/fairy.png', alt: 'fairy', label: 'Fairy' },
    { src: '/one.png', alt: 'one', label: 'One' },
    { src: '/redbull.png', alt: 'redbull', label: 'Red Bull' },
    { src: '/skip.png', alt: 'skip', label: 'Skip' }
  ];

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    maxWidth: '1000px',
    margin: '0 auto'
  };

  const sectionStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
    width: '100%',
    marginBottom: '3rem'
  };

  const itemStyle = {
    textAlign: 'center',
    flex: '0 1 auto',
    cursor: 'pointer'
  };

  const imageStyle = {
    width: 'min(30vw, 60px)',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '10px',
    display: 'block',
    margin: '0 auto 0.5rem'
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Categorias</h1>

      <div style={sectionStyle}>
        {categoriasPrincipais.map((item, index) => (
          <div
            key={index}
            style={itemStyle}
            onClick={() => navigate(item.rota)}
          >
            <img src={item.src} alt={item.alt} style={imageStyle} />
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Destaques</h2>

      <div style={sectionStyle}>
        {destaqueProdutos.map((item, index) => (
          <div key={index} style={itemStyle}>
            <img src={item.src} alt={item.alt} style={imageStyle} />
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;