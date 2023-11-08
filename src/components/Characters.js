import CharacterInfo from '../pages/characterInfo';
import {useState} from 'react';

export default function Characters(props) {
const [ID, setID] = useState(null)

const { characters, setCharacters } = props;

const ChangeValue = async (event) => {
    //console.log("BTN ID: " + event.target.id);
    setID(event.target.id);
  }

//Reiniciar valores para volver a la pagina principal
const resetCharacter = () =>{
    setCharacters(null);
}

    return(

        <div className="characters">
            
            {ID ? (
                <CharacterInfo ID={ID} setID={setID} characters={characters}/> 
                ) 
                : 
                (
                <>
                    <h1> Personajes</h1>
                    <span className="back-home" onClick={resetCharacter}>Back</span>

                    <div className="container-characters">
                        {characters.map((Character,index)=>(
                            <div className="character-container" key={index} id={Character.id}>
                                <div>
                                    <img src={Character.image} alt={Character.name}/>
                                </div>
                                <div>
                                <h3>{Character.name}</h3>
                                    <h6>
                                        {Character.status === "Alive" ? (
                                            <>
                                                <span className="alive"/>
                                                Alive
                                            </>
                                        ):(
                                            <>
                                            <span className="dead"/>
                                            Dead
                                            </>
                                        )}
                                    </h6>
                                    <p>
                                        <span className="text-grey">Episodios: </span>
                                        <span>{Character.episode.length}</span>
                                    </p>
                                    <p>
                                        <span className="text-grey">Especie: </span>
                                        <span>{Character.species}</span>
                                    </p>
                                    <button className="btn-search" onClick={ChangeValue} id={Character.id} >More Info</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <span className="back-home" onClick={resetCharacter}>Back</span>
                </>
                )
            }
            
            
        </div>
    )
};
