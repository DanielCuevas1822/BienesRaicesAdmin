import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { new_propiedades_action } from "../redux/actions/propiedadesActions";

const NewPropiedades = (props) => {
  const history = useHistory();
  const { new_propiedades_action } = props;
  const [newInfo, setNewInfo] = useState({
    imagen_propiedad: [
      "https://firebasestorage.googleapis.com/v0/b/bienesraices-4eea1.appspot.com/o/slider%2Fdestacada2.jpg?alt=media&token=4238f00b-f319-44b8-9c4c-38d99a0fe5c7",
      "https://firebasestorage.googleapis.com/v0/b/bienesraices-4eea1.appspot.com/o/slider%2Fdestacada.jpg?alt=media&token=0ded4b53-15e2-4201-800f-adeb68159940",
      "https://firebasestorage.googleapis.com/v0/b/bienesraices-4eea1.appspot.com/o/slider%2Fdestacada3.jpg?alt=media&token=db56b5f7-cdb1-4ab5-bb39-e3b38a7d0c4b",
    ],
    nombre_propiedad: "",
    desc_corta: "",
    desc_larga: "",
    imagen: "",
    precio_propiedad: "",
    numero_banos: "",
    numero_estaci: "",
    numero_recama: "",
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
        `https://bienesraices-4eea1-default-rtdb.firebaseio.com/propiedades.json?auth=${localUserinfo.idToken}`,
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
          new_propiedades_action(newdata);
          history.push("/propiedades");
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
                <label htmlFor="nombre_propiedad">
                  Nombre de la propiedad:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre_propiedad"
                  name="nombre_propiedad"
                  value={newInfo.nombre_propiedad}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="descripcion_corta_propiedad">
                  Descripción corta de la propiedad:
                </label>
                <textarea
                  className="form-control"
                  id="descripcion_corta_propiedad"
                  rows="2"
                  name="desc_corta"
                  value={newInfo.desc_corta}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="descripcion_larga_propiedad">
                  Descripción larga de la propiedad:
                </label>
                <textarea
                  className="form-control"
                  id="descripcion_larga_propiedad"
                  rows="10"
                  name="desc_larga"
                  value={newInfo.desc_larga}
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
                  value={newInfo.imagen}
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
                  value={newInfo.precio_propiedad}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="banos_propiedad">Número de baños:</label>
                <input
                  type="number"
                  className="form-control"
                  id="banos_propiedad"
                  name="numero_banos"
                  value={newInfo.numero_banos}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="estacinamientos_propiedad">
                  Número de estacinamientos:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="estacinamientos_propiedad"
                  name="numero_estaci"
                  value={newInfo.numero_estaci}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="recamaras_propiedad">
                  Número de recamaras:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="recamaras_propiedad"
                  name="numero_recama"
                  value={newInfo.numero_recama}
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
    </main>
  );
};

const mapDispatchtoProps = {
  new_propiedades_action,
};

export default connect(null, mapDispatchtoProps)(NewPropiedades);
