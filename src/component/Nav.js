const Nav = (props) => {
  return (
    <div className="nav">
      <button
        className="btn nav-btn"
        onClick={() => props.changePage("todoApp")}
      >
        App
      </button>
      <button className="btn nav-btn" onClick={() => props.changePage("about")}>
        About
      </button>
    </div>
  );
};

export default Nav;
