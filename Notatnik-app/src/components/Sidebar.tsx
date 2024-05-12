import React from "react";

const Sidebar: React.FC = () => {
  return (
    <>
      <section className="sidebar-section">
        <h1 className="sidebar-heading">Notatnik</h1>
        <button className="sidebar-add-button"> Dodaj Notatkę</button>
        <div className="sidebar-categories-block">
          <h1 className="sidebar-categories-heading">Kategorię:</h1>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
