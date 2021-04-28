import React from "react";
import { connect } from "react-redux";

const Testimoniales = (props) => {
  const { testimoniales } = props;
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

const mapSatatetoProps = (state) => ({
  testimoniales: state.testimoniales,
});

export default connect(mapSatatetoProps)(Testimoniales);
