import { useEffect, useReducer } from "react";
import { Helmet } from "react-helmet-async";

import { getAllImagePosts } from "./api/services";
import Pagination from "./common/paginaton/Pagination";
import { Search, ImageBox } from "./components/index";
import MainLayout from "./layout/MainLayoute";
import { initialState } from "./store/initialState";
import { AppContext } from "./contexts/imageListContext";
import reducer from "./store/reducer";



function App({ pageTitle }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getAllImagePosts().then((result) => {
      dispatch({ type: "SET_POST", payload: result.data });
    });
  }, []);

  const contactSearch = (event) => {
    const { value } = event.target;
    dispatch({ type: "SET_QUERY", payload: { text: value } });

    const allData = state.post.filter((post) => {
      return post.user.first_name.toLowerCase().includes(value.toLowerCase());
    });

    dispatch({ type: "SET_FILTERED_CONTACTS", payload: allData });
  };

  return (
    <>
      <AppContext.Provider value={{ state, search: contactSearch }}>
        <MainLayout>
          <Helmet>
            <title>{pageTitle}</title>
          </Helmet>
          <Search />
          {state.query.text ? (
            <ImageBox />
          ) : (
            <Pagination postPerPage={9} />
          )}
        </MainLayout>
      </AppContext.Provider>
    </>
  );
}

export default App;


