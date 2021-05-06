import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";

import { new_testimoniales_action } from "../redux/actions/testimonialesActions";

const NewTestimonial = (props) => {
  const history = useHistory();
  const { new_testimoniales_action } = props;
  const [newInfo, setNewInfo] = useState({
    nombre_testimonial: "",
    testimonio: "",
  });
  const handleChange = (e) => {
    setNewInfo({
      ...newInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    const localUserinfo = JSON.parse(localStorage.getItem("userinfo"));
    if (localUserinfo) {
      fetch(
        `${process.env.REACT_APP_FIREBASE_URL}/testimoniales.json?auth=${localUserinfo.idToken}`,
        {
          method: "POST",
          body: JSON.stringify(newInfo),
        }
      )
        .then(function (response) {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(response);
        })
        .then((data) => {
          const newdata = { ...newInfo, id: data.name };
          new_testimoniales_action(newdata);
          history.push("/testimoniales");
        })
        .catch(function (error) {
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
          <div className="col-12 list">
            <form>
              <div className="form-group">
                <label htmlFor="nombre_testimonial">Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre_testimonial"
                  name="nombre_testimonial"
                  value={newInfo.nombre_testimonial}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="testimonio">Testimonio:</label>
                <textarea
                  className="form-control"
                  id="testimonio"
                  rows="10"
                  name="testimonio"
                  value={newInfo.testimonio}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Guardar
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

const mapDispatchtoProps = {
  new_testimoniales_action,
};

export default connect(null, mapDispatchtoProps)(NewTestimonial);
