import { useEffect, useState } from "react"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Banner from "./Banner";
import {addDoc, collection, doc, getDoc, getDocs, getFirestore, limit, query, where} from "firebase/firestore";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    //importar los productos de la BD

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        arrayProductos.forEach(item => {
            addDoc(itemsCollection, item).then()
        })
    }, [])


    return (
        <>
            {id ? "" : <Banner />}
            <div className="container">
                <div className="row">
                    <ItemList items={items} />
                </div>
            </div>
        </>
    )
}

export default ItemListContainer