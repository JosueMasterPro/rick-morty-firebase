import rick from './img/rick-morty.png';
import {useEffect, useState} from 'react';
import Characters from './components/Characters';
import FireBaseTest from './pages/firebasetest';

//This video has to connect firebase to react
// https://www.youtube.com/watch?v=jCY6DH8F4oc
/**
 * this other video was to update realtime data from firebase also you can see it to get the CRUD
 * https://www.youtube.com/watch?v=F7t-n5c7JsE
 *  
 */
function App() {

  const [characters, setCharacters] = useState(null);
  //Variable para pasar los datos de firebase
  const [ info , setInfo] = useState(null);

  //Funcion para pedir datos de la api
  const reApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterapi = await api.json();
    
    setCharacters(characterapi.results);
  }

/* Pasar los datos, que fijo se hace desde aqui*/
  const data = async () => {
    /*const docRef = doc(db, "testReactNoob","TEST");
    const docSnap = await getDoc(docRef);
    const datos = docSnap.data() 
    setUsers(datos);*/
    setInfo(1);
  }
  return (
    <div className="App">
        
        { characters ? (
          <>
            <header className="App-header">
              <h1 className="title"> Rick & Morty </h1>
             <Characters characters={characters} setCharacters={setCharacters}/>
            </header>
          </>
          ) : (
          <>
            {info ? (
              <header className='head'>
              <FireBaseTest info={info} setinfo={setInfo}></FireBaseTest>
              </header>
            ) : 
            (
            <>
            <header className="App-header">
              <h1 className="title"> Rick & Morty </h1>
                <img src={rick} alt="Rick & Morty" className="img-home"/>
                <button onClick={reApi} className="btn-search"> Buscar Personajes</button><br/>
                <button onClick={data} className="btn-search"> Ir A Otra Pagina</button>
              </header>
            </>
            )
            }
          </>
        )}
      
    </div>
  );
}

export default App;
