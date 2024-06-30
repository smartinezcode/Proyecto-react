const CartWidget = () => {
    return (
        <div>
            <button type="button" className="btn btn-light position-relative">
            <div className="col">
                    <img src="buy-cart.png" alt="Buy cart" width={34} />
                </div>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
            </button>
        </div>
    )
}

export default CartWidget