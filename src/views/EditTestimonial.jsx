import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { update_testimoniales_action } from "../redux/actions/testimonialesActions";

const EditTestimonial = (props) => {
  const { update_testimoniales_action } = props;
  const { id } = useParams();
  const history = useHistory();
  const [infoTestimonio, setInfoTestimonio] = useState("");

  useEffect(() => {
    setInfoTestimonio(props.testimoniales.filter((item) => item.id === id)[0]);
  }, [props.testimoniales, id]);

  const handleChange = (e) => {
    setInfoTestimonio({
      ...infoTestimonio,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const localUserInfo = JSON.parse(localStorage.getItem("userinfo"));
    if (localUserInfo) {
      fetch(
        `https://bienesraices-4eea1-default-rtdb.firebaseio.com/testimoniales/${infoTestimonio.id}.json?auth=${localUserInfo.idToken}`,
        {
          method: "PATCH",
          body: JSON.stringify(infoTestimonio),
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(response);
        })
        .then((data) => {
          update_testimoniales_action(data);
          history.push("/testimoniales");
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
      {infoTestimonio ? (
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
                    value={infoTestimonio.nombre_testimonial}
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
                    value={infoTestimonio.testimonio}
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
      ) : (
        <p>Cargando ..</p>
      )}
    </main>
  );
};

const mapStatetoProps = (state) => ({
  testimoniales: state.testimoniales,
});

const mapDispatchtoProps = {
  update_testimoniales_action,
};

export default connect(mapStatetoProps, mapDispatchtoProps)(EditTestimonial);
