import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { update_propiedades_action } from "../redux/actions/propiedadesActions";
import axios from "axios";

const EditPropiedades = (props) => {
  const { update_propiedades_action } = props;
  const { id } = useParams();
  const history = useHistory();
  const [infoPropiedad, setInfoPropiedad] = useState("");

  useEffect(() => {
    setInfoPropiedad(props.propiedades.filter((item) => item.id === id)[0]);
  }, [props.propiedades, id]);

  const handleChange = (e) => {
    setInfoPropiedad({
      ...infoPropiedad,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const localUserInfo = JSON.parse(localStorage.getItem("userinfo"));
    if (localUserInfo) {
      axios
        .patch(
          `${process.env.REACT_APP_FIREBASE_URL}/propiedades/${infoPropiedad.id}.json?auth=${localUserInfo.idToken}`,
          JSON.stringify(infoPropiedad)
        )
        .then((response) => {
          update_propiedades_action(response.data);
          history.push("/propiedades");
        })
        .catch((error) => {
          console.warn("Something went wrong.", error);
          history.push("/notaccess");
        });
      // fetch(
      //   `${process.env.REACT_APP_FIREBASE_URL}/propiedades/${infoPropiedad.id}.json?auth=${localUserInfo.idToken}`,
      //   {
      //     method: "PATCH",
      //     body: JSON.stringify(infoPropiedad),
      //   }
      // )
      //   .then((response) => {
      //     if (response.ok) {
      //       return response.json();
      //     }
      //     return Promise.reject(response);
      //   })
      //   .then((data) => {
      //     update_propiedades_action(data);
      //     history.push("/propiedades");
      //   })
      //   .catch((error) => {
      //     console.warn("Something went wrong.", error);
      //     history.push("/notaccess");
      //   });
    } else {
      history.push("/notaccess");
    }
  };

  return (
    <main>
      {infoPropiedad ? (
        <div className="container">
          <div className="row">
            <div className="col-12 list">
              <form>
                <div className="form-group">
                  <label htmlFor="nombre_propiedad">
                    Nombre de la propiedad:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre_propiedad"
                    name="nombre_propiedad"
                    value={infoPropiedad.nombre_propiedad}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="descripcion_corta_propiedad">
                    Descripci??n corta de la propiedad:
                  </label>
                  <textarea
                    className="form-control"
                    id="descripcion_corta_propiedad"
                    rows="2"
                    name="desc_corta"
                    value={infoPropiedad.desc_corta}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="descripcion_larga_propiedad">
                    Descripci??n larga de la propiedad:
                  </label>
                  <textarea
                    className="form-control"
                    id="descripcion_larga_propiedad"
                    rows="10"
                    name="desc_larga"
                    value={infoPropiedad.desc_larga}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="imagen_propiedad">
                    URL de la imagen de la propiedad:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="imagen_propiedad"
                    name="imagen"
                    value={infoPropiedad.imagen}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="pricio_propiedad">
                    Precio de la propiedad:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="pricio_propiedad"
                    name="precio_propiedad"
                    value={infoPropiedad.precio_propiedad}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="banos_propiedad">N??mero de ba??os:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="banos_propiedad"
                    name="numero_banos"
                    value={infoPropiedad.numero_banos}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="estacinamientos_propiedad">
                    N??mero de estacinamientos:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="estacinamientos_propiedad"
                    name="numero_estaci"
                    value={infoPropiedad.numero_estaci}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="recamaras_propiedad">
                    N??mero de recamaras:
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="recamaras_propiedad"
                    name="numero_recama"
                    value={infoPropiedad.numero_recama}
                    onChange={handleChange}
                  />
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

const mapSatatetoProps = (state) => ({
  propiedades: state.propiedades,
});

const mapDispatchtoProps = {
  update_propiedades_action,
};

export default connect(mapSatatetoProps, mapDispatchtoProps)(EditPropiedades);
