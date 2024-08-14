import { useContext } from "react"
import { CartContext, cartContext } from "./context/CartContext"
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalProducts } = useContext(CartContext);

    if (totalProducts() > 0) {
        return (
            <Link to={"/cart"}>
                <button type="button" className="btn btn-light position-relative">
                    <img src="/buy-cart.png" alt="Buy cart" width={24} />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{totalProducts()}</span>
                </button>
            </Link>
        )
    }
}

export default CartWidget