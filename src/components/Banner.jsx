import React from 'react';
import '../css/banner.css';
const Banner = () => {
  return (
     <div className="main-container magin_top_ban">
        <div className="container card-container magin_top_ban">
            <div className="card" id="card-1">
                <h3 className="card__heading">ENVÍOS A DOMICILIO</h3>
                <p className="card__description">Ofrecemos servicio de entrega a domicilio para que puedas disfrutar de nuestras pizzas frescas y calientes en la comodidad de tu hogar. Nuestro equipo de repartidores se asegurará de que tu pedido llegue a tiempo y en perfecto estado.</p>
            </div>
            <div className="card" id="card-2">
                <h3 className="card__heading">VENTAS AL POR MAYOR</h3>
                <p className="card__description">Deliciosa Supreme (con pepperoni, champiñones, pimientos y aceitunas) BBQ Chicken (con pollo a la barbacoa, cebolla roja y cilantro) Mediterranean (con aceitunas Kalamata, tomate, cebolla roja y albahaca fresca) Carnivora (con pepperoni, salchicha, jamón y bacon)</p>
            </div>
            <div className="card" id="card-3">
                <h3 className="card__heading">RESERVACIONES DE LOCAL</h3>
                <p className="card__description">Si prefieres disfrutar de tu pizza en un ambiente acogedor, también aceptamos reservas para comer en el local. Ven y disfruta de una experiencia única con nosotros.</p>
            </div>
        </div>
    </div>
  );
};

export default Banner;