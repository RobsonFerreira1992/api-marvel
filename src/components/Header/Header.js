import React from 'react'
import LogoMarvel from '../../imagens/marvel.svg'
import Cabecalho from './styles'
const Header = () => {
  return (
    <Cabecalho>
      <img src={LogoMarvel} alt="Imagem logo da marvel" />
    </Cabecalho>
  )
}

export default Header
