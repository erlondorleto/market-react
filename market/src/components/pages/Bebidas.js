import React from 'react';

// Array de bebidas
const bebidas = [
  {
    _id: 'b01',
    nome: 'Compal Laranja do Algarve',
    preco: 0.89,
    imagem: '/trabalho/compal.jpg',
    
  },
  {
    _id: 'b02',
    nome: 'Frize limão',
    preco: 2.39,
    imagem: '/trabalho/frize.webp',
   
    stock: 80,
  },
  {
    _id: 'b03',
    nome: 'Gordon`s Gin',
    preco: 1.29,
    imagem: '/trabalho/gordon.jpg',
    
    stock: 60,
  },
  {
    _id: 'b04',
    nome: 'Bebida energética Redbull',
    preco: 2.19,
    imagem: '/redbull.png',
   
    stock: 40,
  },
];

// Componente de página de bebidas
function Bebidas() {
  return (
    <div style={{ padding: '2rem', maxWidth: '100%', overflowX: 'hidden' }}>
      <h2>Página de Bebidas</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center',
        }}
      >
        {bebidas.map((item) => (
          <div
            key={item._id}
            style={{
              border: '1px solid #ccc',
              padding: '1rem',
              width: '100%',
              maxWidth: '250px',
              boxSizing: 'border-box',
              flex: '1 1 200px',
            }}
          >
            <img
              src={item.imagem}
              alt={item.nome}
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
            <h3>{item.nome}</h3>
            <p>{item.descricao}</p>
            <p>
              <strong>Preço:</strong> €{item.preco.toFixed(2)}
            </p>
            <p>
              <strong>Stock:</strong> {item.stock} unidades
            </p>
            <button
              style={{
                marginTop: '0.5rem',
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

export default Bebidas;
