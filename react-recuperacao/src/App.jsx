import './App.css'
import Galeria from './components/Galeria.jsx'
import Cabecalho from './components/Cabecalho.jsx'
import Rodape from './components/Rodape.jsx'
import Biblioteca from './components/Biblioteca.jsx'
import Livro from './components/Livro.jsx'

function App() {
  return(
    <>
    <Cabecalho />
    <Biblioteca />
    <Livro
    titulo={"Sherlock Holmes - Aventuras Secretas"}
    autor={" Autor: Arthur Conan Doyle"}
    ano={"publicada pela primeira vez em 2015"}
    sinopse={"Sinopse do livro:É uma coletânea de contos escrita por diversos autores contemporâneos, que exploram novas aventuras do famoso detetive Sherlock Holmes e seu parceiro, Dr. John Watson. Nestas histórias, Holmes enfrenta novos desafios e mistérios, utilizando sua notável inteligência e perspicácia para resolver os casos mais intrigantes "}
    sinopse2={" Cada conto oferece uma nova perspectiva sobre o universo criado por Arthur Conan Doyle, mantendo o espírito original das histórias de Sherlock Holmes.    "}
    />
    <h3>Livros Disponíveis</h3>
    <Galeria />
    <Rodape />
    </>
  )
}

export default App
