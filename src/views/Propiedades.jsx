import React from "react";
import { connect } from "react-redux";

import "../styles/views/Propiedades.scss";

const Propiedades = (props) => {
  const { propiedades } = props;
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Lista de Propiedades</h1>
          </div>
          <div className="col-12 d-flex list">
            {propiedades.map((item) => (
              <div key={item.id} className="card">
                <img className="card-img-top" src={item.imagen} alt="Card" />
                <div className="card-body">
                  <h5 className="card-title">{item.nombre_propiedad}</h5>
                  <p className="card-text">{item.desc_corta}</p>
                  <div className="card-actions">
                    <p className="btn btn-primary">Editar</p>
                    <p className="btn btn-danger">Eliminar</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

const mapStatetoProps = (state) => ({
  propiedades: state.propiedades,
});

export default connect(mapStatetoProps)(Propiedades);
