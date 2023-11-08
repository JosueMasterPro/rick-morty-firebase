import rick from './img/rick-morty.png';
import {useState} from 'react';
import Characters from './components/Characters';
import FireBaseTest from './pages/firebasetest';

// https://www.youtube.com/watch?v=jCY6DH8F4oc
//This video has to connect firebase to react
function App() {

  const [characters, setCharacters] = useState(null);
  //Variable para pasar los datos de firebase
  const [info, setinfo] = useState(null);

  //Funcion para pedir datos de la api
  const reApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterapi = await api.json();
    
    setCharacters(characterapi.results);
  }

/* Pasar los datos, que fijo se hace desde aqui
  const data = async () => {
    const docRef = doc(db, "testReactNoob","TEST");
    const docSnap = await getDoc(docRef);
    const datos = docSnap.data() 
    setinfo(datos);
  }
*/
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Rick & Morty </h1>
        { characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
          ) : (
          <>
            {info ? (
              <FireBaseTest info={info} setinfo={setinfo}></FireBaseTest>
            ) : 
            (
            <>
              <img src={rick} alt="Rick & Morty" className="img-home"/>
              <button onClick={reApi} className="btn-search"> Buscar Personajes</button><br/>
              {/* <button onClick={data} className="btn-search"> Ir A Otra Pagina</button> */}
            </>
            )
            }
          </>
        )}
      
      </header>
    </div>
  );
}

export default App;
