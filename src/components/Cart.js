
import React, { useContext } from "react";
import { ItemsContext } from "./CartContext";

const Cart = () => {
    const [items, setItems] = useContext(ItemsContext);

    const newState = [
    ]

    console.log("Data", items)

    return (        
    <>
        <div className="cart">
        {[items].map((item) => {
            return (
            <div className="cart-row"  data={item.obj} key={item.quantity}>
                <div>
                    <h2>{item.obj.title}</h2>
                    <h3>ID: {item.obj.id}</h3>
                    <h3>Modelo: {item.obj.model}</h3>
                    <h3>Precio: {item.obj.price}</h3>
                    <h3>Cantidad: {items.quantity}</h3>
                    <button onClick={() => setItems(newState)}>Eliminar</button>
                    <button onClick={() => setItems(newState)}>Vaciar Carro</button>
                </div>
                <div>
                    <img src={item.obj.pictureUrl} alt={item.obj.title}/>
                </div>
            </div>
            )
            })}
            <hr></hr>
        </div>
    </>
    )

}

export default Cart;