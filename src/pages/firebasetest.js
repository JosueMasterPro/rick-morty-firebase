export default function firebasetest(props) {

    const { info, setinfo } = props;
    const resetCharacter = () =>{
        setinfo(null);
    }
    const datos = info;
    //console.log(datos);

    return(
        <div>
            Hola 
            <br/>
            <h3>Hola {datos.TEST}</h3>
            <h3>ID {datos.ID}</h3>
            <span className="back-home" onClick={resetCharacter}>Back</span>
            
        </div>
    )
};
