import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, removeItem, clear, totalProducts, sumProducts } = useContext(CartContext);

    if (totalProducts() == 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <p><img src="/public/buy-cart.png" alt="carrito" width={80}/></p>
                        <h1>Tu carrito esta vacio</h1>
                        <h4>Te ayudamos a encontrar lo que buscas</h4>
                        <Link to={"/"} className="btn btn-dark rounded-pill mt-5">Volver a la pagina principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan={5} className="text-end"><button className="btn btn-light btn-sm" title="vaciar carrito">Vaciar carrito<img src="/public/trash3.svg" alt="eliminar el carrito" width={24} onClick={() => { removeItem(item.id) }} /></button></td>
                            </tr>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="align-middle"><img src={item.image} alt={item.title} width={72} /></td>
                                    <td className="align-middle">{item.title}</td>
                                    <td className="align-middle text-center">{item.price} X {item.quantity}</td>
                                    <td className="align-middle text-center">{item.price * item.quantity}</td>
                                    <td className="align-middle text-end">
                                        <button className="btn btn-light btn-sm" title="eliminar producto">
                                        <img src="/public/trash3.svg" alt="eliminar producto" width={24} onClick={clear} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td className="align-middle" colSpan={3}>Total a pagar</td>
                                <td className="align-middle text-center">${sumProducts()}</td>
                                <td className="align-middle">&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart