/* eslint-disable react-hooks/rules-of-hooks */
import {useEffect, useState} from 'react';
import {db} from '../firebase-config';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";

export default function firebasetest(props) {
    const [newFName, setNewFName] = useState("");
    const [newLName, setNewLName] = useState("");
    const [newage, setNewAge] = useState(0);

    const [ users , setUsers] = useState([]);
    const userCollectionRef = collection(db, "users");

    /* Funcion  useEffect statica*/
    // useEffect(() => {
    //     const getUsers = async () => {
    //       const data = await getDocs(userCollectionRef);
    //       setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //     };
    //     getUsers();

    //   }, []);

    /* Funcion  useEffect Real Time*/
    useEffect(() => {
    const getusers = onSnapshot(userCollectionRef,snapshot =>{
        setUsers(snapshot.docs.map(doc=>({id: doc.id, data:doc.data()})))
    })
    
    return () => {
        getusers()
    }
    }, [])

    const createUser = async () => {
        await addDoc(userCollectionRef, { first: newFName, last: newLName, age: Number(newage) });   
    };

    const updateUser = async (id, age) => {
        const userDoc = doc(db, "users", id);
        const newFields = { age: age + 1 };
        await updateDoc(userDoc, newFields);   
    };

    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
    };

    /*Datos para cerrar y abrir paginas*/
    const { info, setinfo } = props;
        const resetCharacter = () =>{
            setinfo(null);
    }
    //console.log(datos);

    return(
        <div>
            <div className='container'>
                <div className='row'></div>
                <div className='mb-3 mt-5'>
                    <input className='form-control m-1'
                        placeholder="First Name..."
                        onChange={(event) => {
                        setNewFName(event.target.value);
                        }}
                    />
                    <input className='form-control m-1'
                        type="text"
                        placeholder="last Name..."
                        onChange={(event) => {
                        setNewLName(event.target.value);
                        }}
                    />
                    <input className='form-control m-1'
                        type="number"
                        placeholder="Age..."
                        onChange={(event) => {
                        setNewAge(event.target.value);
                        }}
                    />
                    <button className='btn btn-success mt-2' onClick={createUser}> Create User</button>
                </div>
                <div className='row'>
                {users.map((user,index)=>(
                    <div className='col-6 col-md-4 mt-3' key={index} id={user.id}>
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">{user.data.first}</h5>
                                <p className="card-text">{user.data.last}</p>
                                <p className="card-text">{user.data.age}</p>
                                <button className="btn btn-primary"
                                onClick={() => {
                                    updateUser(user.id, user.data.age);
                                }}>Update Age</button>
                                <div className='m-2'></div>
                                 <button className="btn btn-danger"
                                    onClick={() => {
                                        deleteUser(user.id);
                                    }}
                                    >
                                    {" "}
                                    Delete User
                                    </button>
                            </div>
                        </div>
                    </div>
                ))}
                </div>


                
                <span className="back-home" onClick={resetCharacter}>Back</span>
                
            </div>
        </div>
    )
};
