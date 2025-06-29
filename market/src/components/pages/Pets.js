import React from 'react';

// Lista de produtos para animais
const animais = [
  {
    _id: 'p01',
    nome: 'Areia Aglomerante Clumping',
    preco: 9.99,
    imagem: '/trabalho/sanicat.jpg',
  
    stock: 50,
  },
  {
    _id: 'p02',
    nome: 'Ração para Cão Adulto',
    preco: 4.49,
    imagem: '/trabalho/mypet.jpg',
   
    stock: 70,
  },
  {
    _id: 'p03',
    nome: 'Comida para Agapornis African',
    preco: 1.99,
    imagem: '/trabalho/african.jpg',
    
    stock: 30,
  },
  {
    _id: 'p04',
    nome: 'Ração para Cão Adulto Esterilizado Médio e Maxi Peru e Arroz',
    preco: 3.29,
    imagem: '/trabalho/onepurina.jpg',
  
    stock: 40,
  },
];

// Componente Pets
function Pets() {
  return (
    <div style={{ padding: '2rem', maxWidth: '100%', overflowX: 'hidden' }}>
      <h2>Página de Animais</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2.5rem',
          justifyContent: 'center',
        }}
      >
        {animais.map((item) => (
          <div
            key={item._id}
            style={{
              border: '1px solid #ccc',
              padding: '1rem',
              width: '100%',
              maxWidth: '250px',
              boxSizing: 'border-box',
              flex: '1 1 200px',
              backgroundColor: '#f9f9f9',
              borderRadius: '8px',
            }}
          >
            <img
              src={item.imagem}
              alt={item.nome}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                marginBottom: '1rem',
              }}
            />
            <h3>{item.nome}</h3>
            <p>{item.descricao}</p>
            <p><strong>Preço:</strong> €{item.preco.toFixed(2)}</p>
            <p><strong>Stock:</strong> {item.stock} unidades</p>
            <button
              style={{
                marginTop: '0.7rem',
                padding: '0.6rem 1rem',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
              onClick={() => alert(`"${item.nome}" adicionado ao carrinho!`)}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pets;
