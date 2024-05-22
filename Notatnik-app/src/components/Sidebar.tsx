import React from "react";
import "../Scss/sidebar.scss";
const Sidebar: React.FC = () => {
  return (
    <>
      <section className="sidebar-section">
        <h1 className="sidebar-heading">Notatnik</h1>
        <button className="sidebar-add-button"> Dodaj Notatkę</button>
        <div className="sidebar-categories-block"></div>
      </section>
    </>
  );
};

export default Sidebar;
