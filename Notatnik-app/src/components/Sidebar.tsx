import React from "react";
import "../Scss/sidebar.scss";
const Sidebar: React.FC = () => {
  return (
    <>
      <section className="sidebar-section">
        <h1 className="sidebar-heading">Notatnik</h1>

        <div className="sidebar-categories-block">
          <h2 className="categories-heading">Kategorie:</h2>
          <ul className="categories-list-block">
            <li className="categories-list-item">Styl życia</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
