import Item from "./Item"

const ItemList = ({items}) => { //array de objetos
    
    return (
        <>
            {items.map(producto => {
                <item item={producto} />
            })}
        </>
        )
}

export default ItemList