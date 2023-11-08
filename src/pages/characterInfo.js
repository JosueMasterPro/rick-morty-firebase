export default function characterInfo(props) {

    const { ID, setID, characters } = props;
    //Si se pone triple igual da error al parecer xd
    // eslint-disable-next-line eqeqeq
    const datos = characters.find(i => i.id == ID);

    //console.log(datos);

    const resetID = () =>{
        setID(null);
    }


    return(
        <div>
            <div className="card text-white bg-dark ">
                <div className="row g-0">
                    <div className="col-md-5">
                    <img  className="img-fluid rounded-start" src={datos.image} alt={datos.name}/>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body text-start">
                            <h3 className="card-title">{datos.name}</h3>
                            <h5>
                                {datos.status === "Alive" ? (
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
                            </h5>
                            <p>
                                <span className="text-grey">Creado: </span>
                                <span>{datos.created}</span>
                            </p>
                            <p>
                                <span className="text-grey">Episodios: </span>
                                <span>{datos.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Especie: </span>
                                <span>{datos.species}</span>
                            </p>
                            <p>
                                <span className="text-grey">Genero: </span>
                                <span>{datos.gender}</span>
                            </p>
                            <p>
                                <span className="text-grey">Origen: </span>
                                <span>{datos.origin.name}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <span className="back-home" onClick={resetID}>Home</span>
        </div>
    )
};
