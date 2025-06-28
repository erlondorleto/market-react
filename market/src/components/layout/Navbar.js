import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

function Navbar({ onSearchProduto, onSearchCategoria }) {
  const [buscaProduto, setBuscaProduto] = useState('');
  const [buscaCategoria, setBuscaCategoria] = useState('');

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

  return (
    <nav className={styles.navbar}>
      {/* Logo no canto esquerdo */}
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
        <li className={styles.item}><Link to="/AcaoSocial">AcaoSocial</Link></li>
      </ul>

      {/* Buscas no canto direito */}
      <div className={styles.searchRow}>
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
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
