import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { update_blog_action } from "../redux/actions/blogActions";

const EditBlog = (props) => {
  const { update_blog_action } = props;
  const { id } = useParams();
  const history = useHistory();
  const [infoblog, setInfoBlog] = useState("");

  useEffect(() => {
    setInfoBlog(props.blog.filter((item) => item.id === id)[0]);
  }, [props.blog, id]);

  const handleChange = (e) => {
    setInfoBlog({
      ...infoblog,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const localUserInfo = JSON.parse(localStorage.getItem("userinfo"));
    if (localUserInfo) {
      fetch(
        `${process.env.REACT_APP_FIREBASE_URL}/blog/${infoblog.id}.json?auth=${localUserInfo.idToken}`,
        {
          method: "PATCH",
          body: JSON.stringify(infoblog),
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(response);
        })
        .then((data) => {
          update_blog_action(data);
          history.push("/blog");
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
      {infoblog ? (
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
                    value={infoblog.nombre_nota}
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
                    value={infoblog.descri_corta}
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
                    value={infoblog.descri_larga}
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
                    value={infoblog.imagen_nota}
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
                    value={infoblog.creador}
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
                    value={infoblog.fecha_nota}
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

const mapStatetoProps = (state) => ({
  blog: state.blog,
});

const mapDispatchtoProps = {
  update_blog_action,
};

export default connect(mapStatetoProps, mapDispatchtoProps)(EditBlog);
