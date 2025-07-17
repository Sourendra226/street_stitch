import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb({ currentPage, items }) {
  return (
    <section className="breadcrumb mb-0">
      <div className="container text-center">
        <p className="text-uppercase">{currentPage}</p>
        <ul className="list-inline mb-0 d-flex justify-content-center align-items-center">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <li className="list-inline-item">
                {item.path ? (
                  <Link to={item.path} className="text-decoration-none">
                    {item.label}
                  </Link>
                ) : (
                  <span className="active">{item.label}</span>
                )}
              </li>
              {index < items.length - 1 && (
                <li className="list-inline-item">
                  <i className="fa-solid fa-angle-right"></i>
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Breadcrumb;
