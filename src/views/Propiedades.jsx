import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { delete_propiedades_action } from "../redux/actions/propiedadesActions";

import "../styles/views/Propiedades.scss";

const Propiedades = (props) => {
  const { propiedades, delete_propiedades_action } = props;

  const handleDelete = (itemId) => {
    delete_propiedades_action(itemId);
  };

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
                    <Link
                      className="btn btn-primary"
                      to={`/propiedades/edit/${item.id}`}
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="btn btn-danger"
                    >
                      Eliminar
                    </button>
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

const mapDispatchToProps = {
  delete_propiedades_action,
};

export default connect(mapStatetoProps, mapDispatchToProps)(Propiedades);
