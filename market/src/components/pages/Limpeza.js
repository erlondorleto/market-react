import React from 'react';

// Lista de produtos de limpeza
const limpeza = [
  {
    _id: 'l01',
    nome: 'Multisuperfícies Spray Bang pack 3',
    preco: 2.19,
    imagem: '/trabalho/bang.jpg',
  
    stock: 60,
  },
  {
    _id: 'l02',
    nome: 'Lixívia Tradicional Neoblanc',
    preco: 1.49,
    imagem: '/trabalho/neoblanc.jpg',
  
    stock: 75,
  },
  {
    _id: 'l03',
    nome: 'Detergente Manual Loiça Ultra limão',
    preco: 0.99,
    imagem: '/trabalho/fairydete.jpg',
    descricao: '',
    stock: 100,
  },
  {
    _id: 'l04',
    nome: 'Abrilhentador Máquina de Loiça Finish',
    preco: 1.89,
    imagem: '/trabalho/finish.jpg',
   
    stock: 40,
  },
];

function Limpeza() {
  return (
    <div style={{ padding: '2rem', maxWidth: '100%', overflowX: 'hidden' }}>
      <h2>Página de Limpeza</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2.5rem',
          justifyContent: 'center',
        }}
      >
        {limpeza.map((item) => (
          <div
            key={item._id}
            style={{
              border: '1px solid #ccc',
              padding: '1rem',
              width: '100%',
              maxWidth: '250px',
              boxSizing: 'border-box',
              flex: '1 1 200px',
              backgroundColor: '#f5f5f5',
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

export default Limpeza;
