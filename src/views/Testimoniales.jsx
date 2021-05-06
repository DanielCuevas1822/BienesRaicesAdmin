import React from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { delete_testimoniales_action } from "../redux/actions/testimonialesActions";

const Testimoniales = (props) => {
  const history = useHistory();
  const { testimoniales, delete_testimoniales_action } = props;

  const handleDelete = (itemId) => {
    const localUserinfo = JSON.parse(localStorage.getItem("userinfo"));
    if (localUserinfo) {
      fetch(
        `${process.env.REACT_APP_FIREBASE_URL}/testimoniales/${itemId}.json?auth=${localUserinfo.idToken}`,
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
          delete_testimoniales_action(itemId);
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
