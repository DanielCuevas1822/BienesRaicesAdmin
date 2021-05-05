import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { delete_testimoniales_action } from "../redux/actions/testimonialesActions";

const Testimoniales = (props) => {
  const { testimoniales, delete_testimoniales_action } = props;

  const handleDelete = (itemId) => {
    delete_testimoniales_action(itemId);
  };
  
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Testimoniales</h1>
          </div>
          <div className="col-12 d-flex list">
            {testimoniales.map((item) => (
              <div key={item.id} className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.nombre_testimonial}</h5>
                  <p className="card-text">{item.testimonio}</p>
                  <div className="card-actions">
                    <Link
                      className="btn btn-primary"
                      to={`/testimoniales/edit/${item.id}`}
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item.id)}
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

const mapSatatetoProps = (state) => ({
  testimoniales: state.testimoniales,
});

const mapDispatchtoProps = {
  delete_testimoniales_action,
};

export default connect(mapSatatetoProps, mapDispatchtoProps)(Testimoniales);
