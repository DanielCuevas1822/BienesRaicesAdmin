import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { new_blog_action } from "../redux/actions/blogActions";

const NewBlog = (props) => {
  const history = useHistory();
  const { new_blog_action } = props;
  const [newInfo, setNewInfo] = useState({
    creador: "",
    descri_corta: "",
    descri_larga: "",
    fecha_nota: "",
    imagen_nota: "",
    nombre_nota: "",
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
        `${process.env.REACT_APP_FIREBASE_URL}/blog.json?auth=${localUserinfo.idToken}`,
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
          new_blog_action(newdata);
          history.push("/blog");
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
                <label htmlFor="nombre_nota">Nombre nota:</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre_nota"
                  name="nombre_nota"
                  value={newInfo.nombre_nota}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="descripcion_corta_nota">
                  Descripción corta de la nota:
                </label>
                <textarea
                  className="form-control"
                  id="descripcion_corta_nota"
                  rows="2"
                  name="descri_corta"
                  value={newInfo.descri_corta}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="descripcion_larga_nota">
                  Descripción larga de la nota:
                </label>
                <textarea
                  className="form-control"
                  id="descripcion_larga_nota"
                  rows="10"
                  name="descri_larga"
                  value={newInfo.descri_larga}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="imagen_nota">
                  URL de la imagen de la nota:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="imagen_nota"
                  name="imagen_nota"
                  value={newInfo.imagen_nota}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="creador">Creador de la nota:</label>
                <input
                  type="text"
                  className="form-control"
                  id="creador"
                  name="creador"
                  value={newInfo.creador}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="fecha_nota">Fecha de publicación:</label>
                <input
                  type="date"
                  className="form-control"
                  name="fecha_nota"
                  id="fecha_nota"
                  value={newInfo.fecha_nota}
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
  new_blog_action,
};

export default connect(null, mapDispatchtoProps)(NewBlog);
