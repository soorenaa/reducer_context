import {  useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getAllImagePosts } from "./api/services";
import Pagination from "./common/paginaton/Pagination";
import { Search, ImageBox } from "./components/index";
import MainLayout from "./layout/MainLayoute";
import { AppContext } from "./contexts/imageListContext";



function App({ pageTitle }) {
  const [post, setPost] = useState([]);
  const [query, setQuery] = useState({ text: "" });
  const [getFilteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    getAllImagePosts().then((result) => {
      setPost(result.data);
    });
  }, []);

  const searchPost = (event) => {
    setQuery({ ...query, text: event.target.value });
    const allData = post.filter((post) => {
      return post.user.first_name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setFilteredPosts(allData);
    console.log(getFilteredPosts);
  };

  return (
    <>
      <AppContext.Provider value={{ searchPost, query, currentPosts:getFilteredPosts,post }} >

        <MainLayout>
          <Helmet>
            <title>{pageTitle}</title>{" "}
          </Helmet>

          <Search />

          {query.text ? (
            <ImageBox   />
          ) : (
            <Pagination postPerPage={9}   />
          )}
        </MainLayout>
      </AppContext.Provider>
    </>
  );
}

export default App;
