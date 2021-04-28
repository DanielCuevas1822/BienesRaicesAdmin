import React from "react";

import "../styles/views/Propiedades.scss";

const Propiedades = () => {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Lista de Propiedades</h1>
          </div>
          <div className="col-12">
            <div className="card">
              <img className="card-img-top" src="..." alt="Card" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>

                <p className="btn btn-primary">Editar</p>
                <p className="btn btn-danger">Eliminar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Propiedades;
