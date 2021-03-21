import React from "react";

function BreedCell({ obj, click }) {
  return (
    <>
      {obj.length === 0 ? (
        <h1 style={{ margin: "20px" }}>No match... </h1>
      ) : (
        obj.map((val, key) => {
          let src = val.src !== undefined ? val.src : null;
          return (
            <div key={key} onClick={click} className="item">
              <img
                key={val.src}
                id={val.name}
                className="randomImg"
                src={src}
                alt=""
              ></img>
              <p
                style={{ textTransform: "capitalize" }}
                key={val.name}
                value={val.name}
              >
                {val.name}
              </p>
            </div>
          );
        })
      )}
    </>
  );
}

export default BreedCell;
