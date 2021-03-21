import React, { useState } from "react";
import Modal from "../../reuseable/modal/Modal";
import SearchBar from "../../reuseable/searchBar/SearchBar";
import BreedCell from "../cell/BreedCell";
import BreedGridLogic from "./BreedGridLogic";
import "./BreedGrid.css";

function BreedGrid() {
  const {
    modalOpen,
    setModalOpen,
    breedName,
    loading,
    randImg,
    breedObj,
    subBreedObj,
    breedClick,
  } = BreedGridLogic();
  const [searchText, setSearchText] = useState("");

  return loading ? (
    <h1>Loading . . .</h1>
  ) : (
    <>
      <Modal setOpen={setModalOpen} heading={breedName} open={modalOpen}>
        <h3 className="subHeading">Sub Breeds</h3>
        <section className="subBreed">
          {subBreedObj.length === 0 ? (
            <div
              style={{
                margin: "20px 50px",
              }}
            >
              <p style={{ margin: "10px" }}>No Sub Breeds to show</p>
            </div>
          ) : (
            <BreedCell obj={subBreedObj} />
          )}
        </section>
        <h3 className="subHeading">More Images</h3>
        <section className="subBreed">
          {randImg.map((val, key) => {
            let src = randImg[key] !== undefined ? randImg[key] : null;
            return (
              <>
                <div key={`div-${val}`} className="item">
                  <img
                    key={`img-${val}`}
                    className="randomImg"
                    src={src}
                    alt=""
                  ></img>
                </div>
              </>
            );
          })}
        </section>
      </Modal>

      <SearchBar change={(e) => setSearchText(e.target.value)} />

      <div className="container">
        <BreedCell
          obj={breedObj.filter((val) => {
            if (searchText === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchText.toLowerCase())
            ) {
              return val;
            }
            return null;
          })}
          click={breedClick}
        />
      </div>
    </>
  );
}

export default BreedGrid;
