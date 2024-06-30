const PagaDespues = () => {
    return (
        <div className="container-fluid my-3">
            <div className="row">
                <div className="col">
                    <img src="pago-despues.jpg" alt="Pago Despues" width={80} />
                </div>
                <div className="col text-center">
                    <p><b>Compra ahora y Paga despues sin usan tarjeta de credito. ¡Solo con tu cedula!</b></p>
                </div>
                <div className="col text-end">
                <button type="button" className="btn btn-light position-relative">¡Me interesa!</button>
                </div>
            </div>
        </div>
    )
}

export default PagaDespues