import { useEffect, useState } from "react"
import arrayProductos from "../assets/json/productos.json"
import ItemList from "./ItemList"

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(arrayProductos)
            }, 2000)
        })

        promesa.then(response => { // capturo la respuesta de la promesa
            setItems(response)
        })
    }, [])


    return (
        <div className="container">
            <div className="row">
                <itemList items={items} />
            </div>
        </div>
    )
}

export default ItemListContainer