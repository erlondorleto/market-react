import React from 'react';

// Array de alimentos
const alimentos = [
  {
    _id: 'a01',
    nome: 'Arroz Carolino 1Kg',
    preco: 1.29,
    imagem: '/trabalho/arroz.webp',
   stock: 120,
  },
  {
    _id: 'a02',
    nome: 'Massa Milaneza 500g',
    preco: 0.99,
    imagem: '/trabalho/milaneza.jpg',
    
    stock: 80,
  },
  {
    _id: 'a03',
    nome: 'Pimentão',
    preco: 1.49,
    imagem: '/trabalho/pimentao.jpg',
   
    stock: 100,
  },
  {
    _id: 'a04',
    nome: 'Salsicha Frankfurt',
    preco: 1.10,
    imagem: '/trabalho/salsicha.jpg',
  
    stock: 90,
  },
];

// Componente de página de alimentos
function Alimentos() {
  return (
    <div style={{ padding: '2rem', maxWidth: '100%', overflowX: 'hidden' }}>
      <h2>Página de Alimentos</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center',
        }}
      >
        {alimentos.map((item) => (
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
            <p><strong>Preço:</strong> €{item.preco.toFixed(2)}</p>
            <p><strong>Stock:</strong> {item.stock} unidades</p>
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

export default Alimentos;
