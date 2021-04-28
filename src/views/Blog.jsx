import React from "react";
import { connect } from "react-redux";

const Blog = (props) => {
  const { blog } = props;
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Blog</h1>
          </div>
          <div className="col-12 d-flex list">
            {blog.map((item) => (
              <div key={item.id} className="card">
                <img className="card-img-top" src={item.imagen_nota} alt="Card" />
                <div className="card-body">
                  <h5 className="card-title">{item.nombre_nota}</h5>
                  <p className="card-text">{item.descri_corta}</p>
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
  blog: state.blog,
});

export default connect(mapSatatetoProps)(Blog);
