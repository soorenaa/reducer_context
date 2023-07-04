import "./imagebox.css";
import Card from "./Card";
import { useContext } from "react";

import { AppContext } from "../../contexts/imageListContext";

const ImageBox = ({ currentPostsPagination }) => {

  const { currentPosts } = useContext(AppContext)

  console.log("_______________",currentPostsPagination);

  return (
    <div id="card_box">

      {
        currentPostsPagination
        ? 
        currentPostsPagination?.map((result, index) => (
          <Card key={index} data={result} />
        ))
        :
        currentPosts.map((result, index) => (
          <Card key={index} data={result} />
        ))
      }
    </div>
  );
};

export default ImageBox;
