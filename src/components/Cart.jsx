import { useContext } from "react"
import { CartContext } from "./context/cartContext"

const Cart = () => {
    const {cart, removeItem, clear, sumProducts } = useContext(CartContext);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.image} alt={item.title} width={80} /></td>
                                    <td>{item.title}</td>
                                    <td>{item.price} X {item.quantity}</td>
                                    <td>{item.price * item.quantity}</td>
                                    <td><img src="/public/trash3.svg" alt="trash" width={32} /></td>
                                </tr>
                            ))}
                            <tr>
                                <td>Total a pagar</td>
                                <td colSpan={3}>${sumProducts()}</td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart