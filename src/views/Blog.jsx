import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import { delete_blog_action } from "../redux/actions/blogActions";

const Blog = (props) => {
  const history = useHistory();
  const { blog, delete_blog_action } = props;

  const handleDelete = (itemId) => {
    delete_blog_action(itemId);
  };

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
                <img
                  className="card-img-top"
                  src={item.imagen_nota}
                  alt="Card"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.nombre_nota}</h5>
                  <p className="card-text">{item.descri_corta}</p>
                  <div className="card-actions">
                    <Link
                      className="btn btn-primary"
                      to={`/blog/edit/${item.id}`}
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
  blog: state.blog,
});

const mapDispatchToProps = {
  delete_blog_action,
};

export default connect(mapSatatetoProps, mapDispatchToProps)(Blog);
