import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar({ onSearchProduto, onSearchCategoria }) {
  const [buscaProduto, setBuscaProduto] = useState('');
  const [buscaCategoria, setBuscaCategoria] = useState('');
  const [cep, setCep] = useState('');

  const handleProdutoChange = (e) => {
    const valor = e.target.value;
    setBuscaProduto(valor);
    if (onSearchProduto) {
      onSearchProduto(valor);
    }
  };

  const handleCategoriaChange = (e) => {
    const valor = e.target.value;
    setBuscaCategoria(valor);
    if (onSearchCategoria) {
      onSearchCategoria(valor);
    }
  };

  const consultarCep = async () => {
    if (cep.length < 8) {
      alert("CEP incompleto!");
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        alert("CEP não encontrado");
      } else {
        alert(`Localidade: ${data.localidade} - ${data.uf}`);
      }
    } catch (error) {
      alert("Erro ao consultar o CEP");
    }
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/home">
        <img src="/download.png" alt="Logo" className={styles.logo} />
      </Link>

      <div className={styles.navContent}>
        <ul className={styles.list}>
          <li className={styles.item}><Link to="/home">Home</Link></li>
          <li className={styles.item}><Link to="/produtos">Produtos</Link></li>
          <li className={styles.item}><Link to="/promocao">Promoção</Link></li>
          <li className={styles.item}><Link to="/sobre">Sobre</Link></li>
          <li className={styles.item}><Link to="/company">Company</Link></li>
          <li className={styles.item}><Link to="/contact">Contato</Link></li>
          
        </ul>

        <div className={styles.searchRow}>
          {/* Produto */}
          <div className={styles.searchContainer}>
            <input
              type="text"
              className={`${styles.searchInput} ${styles.produtoInput}`}
              placeholder="Entrega em casa..."
              value={buscaProduto}
              onChange={handleProdutoChange}
            />
            <i className={`fas fa-search ${styles.searchIcon}`}></i>
          </div>

          {/* Categoria */}
          <div className={styles.searchContainer}>
            <input
              type="text"
              className={`${styles.searchInput} ${styles.categoriaInput}`}
              placeholder="Buscar categorias..."
              value={buscaCategoria}
              onChange={handleCategoriaChange}
            />
            <i className={`fas fa-search ${styles.searchIcon}`}></i>
          </div>

          {/* CEP */}
          <div className={styles.searchContainer}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Digite seu CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              maxLength={8}
            />
            <button className={styles.cepButton} onClick={consultarCep}>
              Consultar
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
