const Name = ({ name, active, setActive }) => {
  let className = "px-3 py-1 w-40 font-bold border-2 border-transparent ";

  className += active ? "border-green-400 text-green-400" : "";
  return (
    <div>
      <button
        onClick={() => {
          setActive(name);
        }}
        className={className}
      >
        {name}
      </button>
    </div>
  );
};

export default Name;
