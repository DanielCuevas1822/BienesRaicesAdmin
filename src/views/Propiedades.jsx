import React from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { delete_propiedades_action } from "../redux/actions/propiedadesActions";

const Propiedades = (props) => {
  const history = useHistory();
  const { propiedades, delete_propiedades_action } = props;

  const handleDelete = (itemId) => {
    const localUserinfo = JSON.parse(localStorage.getItem("userinfo"));
    if (localUserinfo) {
      fetch(
        `${process.env.REACT_APP_FIREBASE_URL}/propiedades/${itemId}.json?auth=${localUserinfo.idToken}`,
        {
          method: "DELETE",
        }
      )
        .then(function (response) {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(response);
        })
        .then((data) => {
          delete_propiedades_action(itemId);
        })
        .catch((error) => {
          console.warn("Something went wrong.", error);
          history.push("/notaccess");
        });
    } else {
      history.push("/notaccess");
    }
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
