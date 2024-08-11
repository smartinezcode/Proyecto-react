import { useContext } from "react"
import { cartContext } from "./context/cartContext"
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalProducts } = useContext(cartContext);

    if (totalProducts() > 0) {
        return (
            <Link to={"/cart"}>
                <button type="button" className="btn btn-light position-relative">
                    <div className="col">
                        <img src="/buy-cart.png" alt="Buy cart" width={34} />
                    </div>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{totalProducts()}</span>
                </button>
            </Link>
        )
    }


}

export default CartWidget