import React, { useState } from "react";
import Button from "../reuseable/buttons/Button";
import Modal from "../reuseable/modal/Modal";
import FetchData from "../reuseable/APIcall/FetchData";
import "./Header.css";

function Header(props) {
  const breedsURL = "https://dog.ceo/api/breeds/list/all";
  const { data } = FetchData(breedsURL);
  const btnText = "custom search";
  const btnStyle = {
    display: "inline-block",
    position: "absolute",
    right: "0px",
    margin: "0px 20px",
  };
  const [breed, setBreed] = useState("");
  const [count, setCount] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [img, setImg] = useState([]);

  let task = async (url) => {
    return await fetch(url).then((res) => res.json());
  };

  function getImages() {
    if (breed !== "") {
      const URL = `https://dog.ceo/api/breed/${breed}/images/random/${count}`;
      task(URL).then((res) => setImg(res.message));
    }
  }

  return (
    <>
      <Modal setOpen={setModalOpen} heading="Custom Search" open={modalOpen}>
        <div className="form">
          <select
            className="form-item"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option value="" hidden>
              Select a Breed
            </option>
            {Object.keys(data).map((val, key) => (
              <option key={key} value={val}>
                {val}
              </option>
            ))}
          </select>
          <input
            className="form-item"
            type="number"
            min="1"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          ></input>
        </div>
        <div className="btn-wrapper">
          <Button btnClick={getImages} btnText="Get Images"></Button>
        </div>
        <div className="container">
          {img.map((val, key) => {
            return (
              <div key={val} className="item">
                <img key={key} className="randomImg" src={val} alt=""></img>
              </div>
            );
          })}
        </div>
      </Modal>
      <div className="header-wrapper">
        <h3 className="header-text">DOG GALLERY</h3>
        <Button
          style={btnStyle}
          className="header-btn"
          btnText={btnText}
          btnClick={() => setModalOpen(true)}
        />
      </div>
    </>
  );
}

export default Header;
