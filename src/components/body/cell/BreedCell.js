import React from "react";

function BreedCell({ obj, click }) {
  return (
    <>
      {(() => {
        if (obj.length !== 0 && obj[0].src === null) {
          return <h1 style={{ margin: "20px" }}>Loading... </h1>;
        } else if (obj.length === 0) {
          return <h1 style={{ margin: "20px" }}>No match... </h1>;
        } else {
          return obj.map((val, key) => {
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
          });
        }
      })()}
    </>
  );
}

export default BreedCell;
