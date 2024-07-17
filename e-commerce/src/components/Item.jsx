const Item = ({item}) => {
    return (
        <div className="col-md-4">
            <div class="card">
                <img src={Item.image} class="card-img-top" alt={item.title} />
                <div class="card-body">
                    <p class="card-text">{item.title}</p>
                    <p class="card-text">$ {item.price}</p>
                </div>
            </div>
        </div>
    )
}

export default Item