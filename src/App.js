import { useState, useEffect } from "react";
import Desc from "./Desc";
import Name from "./Name";

function App() {
  let [data, setData] = useState();
  let [error, setError] = useState();
  let [active, setActive] = useState("TOMMY");

  useEffect(() => {
    fetch("https://course-api.com/react-tabs-project")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((e) => {
        setError(e.message);
      });

    return () => {};
  }, [error]);

  return (
    <div className=" font-Noto">
      <div className="space-y-12 max-w-3xl m-auto">
        <div className="grid place-items-center py-8">
          <div className="w-max grid place-items-center space-y-2">
            <h1 className="text-center font-bold text-4xl">Experience</h1>
            <div className="w-1/2 h-1 bg-green-600 rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col md:grid grid-cols-3 space-y-8 px-4 md:px:0">
          <div className="flex flex-wrap md:flex-col space-y-2">
            {data &&
              getNames().map((n) => {
                if (active === n)
                  return (
                    <Name
                      key={n}
                      name={n}
                      active={true}
                      setActive={setActive}
                    />
                  );
                else return <Name key={n.id} name={n} setActive={setActive} />;
              })}
          </div>
          <div className="col-span-2">{data && <Desc info={getDetails} />}</div>
        </div>
      </div>
    </div>
  );

  function getNames() {
    let setNames = new Set();
    data.forEach((d) => setNames.add(d.company));

    let names = [...setNames];

    return names;
  }

  function getDetails() {
    let filtered = data.find((d) => active === d.company);

    return filtered;
  }

  function setName(name) {
    setActive(name);
  }
}

export default App;
