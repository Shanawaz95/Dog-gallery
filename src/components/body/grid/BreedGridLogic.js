import { useEffect, useState } from "react";
import FetchData from "../../reuseable/APIcall/FetchData";

function BreedGridLogic(props) {
  const breedsURL = "https://dog.ceo/api/breeds/list/all";
  const { data } = FetchData(breedsURL);
  const [imgSrc, setImgSrc] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [breedName, setBreedName] = useState("");
  const [subBreed, setSubBreed] = useState([]);
  const [subImg, setSubImg] = useState([]);
  const [randImg, setRandImg] = useState([]);

  let breedObj = [];
  let subBreedObj = [];

  let task = async (url) => {
    return await fetch(url).then((res) => res.json());
  };

  useEffect(() => {
    let fetchTask = async () => {
      return await Promise.all(
        Object.keys(data).map((val) => {
          return task(`https://dog.ceo/api/breed/${val}/images/random`);
        })
      );
    };
    fetchTask().then((res) => setImgSrc(res));
    setLoading(false);
  }, [data]);

  Object.keys(data).map((val, key) => {
    var ele = {
      name: val,
      src: imgSrc[key] !== undefined ? imgSrc[key].message : null,
    };
    breedObj.push(ele);
    return null;
  });

  function breedClick(e) {
    setModalOpen(true);
    e.target.id
      ? setBreedName(e.target.id)
      : setBreedName(e.target.textContent);
  }

  useEffect(() => {
    if (breedName !== "") {
      let subBreedURL = `https://dog.ceo/api/breed/${breedName}/list`;
      let randImgURL = `https://dog.ceo/api/breed/${breedName}/images/random/3`;

      task(subBreedURL).then((res) => setSubBreed(res.message));
      task(randImgURL).then((res) => setRandImg(res.message));
    }
  }, [breedName]);

  useEffect(() => {
    if (breedName !== "") {
      let fetchTask = async () => {
        return await Promise.all(
          subBreed.map((val) => {
            return task(
              `https://dog.ceo/api/breed/${breedName}/${val}/images/random`
            );
          })
        );
      };
      fetchTask().then((res) => setSubImg(res));
    }
  }, [subBreed]);

  subBreed.map((val, key) => {
    var ele = {
      name: val,
      src: subImg[key] !== undefined ? subImg[key].message : null,
    };
    subBreedObj.push(ele);
    return null;
  });

  return {
    modalOpen,
    setModalOpen,
    breedName,
    loading,
    randImg,
    breedObj,
    subBreedObj,
    breedClick,
  };
}

export default BreedGridLogic;
