import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import { useEffect } from "react";
import { fetchDataFromAPI } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getConfig, getGenres } from "./store/features/homeSlice";
import SearchPage from "./pages/searchPage/SearchPage";
import Details from "./pages/details/Details";

const App = () => {
  const dispatch = useDispatch();
  const { home } = useSelector((store) => store.home);

  const fetchConfig = async () => {
    try {
      const data = await fetchDataFromAPI("/configuration");

      const url = {
        backdrop: data?.data.images?.secure_base_url + "original",
        poster: data?.data.images?.secure_base_url + "original",
        profile: data?.data.images?.secure_base_url + "original",
      };

      dispatch(getConfig(url));
    } catch (error) {
      console.error("Error fetching configuration:", error);
    }
  };

  const genresCall = async () => {
    const endPoints = ["tv", "movie"];
    const allGenres = {};

    await Promise.all(
      endPoints.map(async (url) => {
        const response = await fetchDataFromAPI(`/genre/${url}/list`);
        const data = await response;
        // console.log(data.data?.genres);

        if (data.data?.genres && Array.isArray(data.data?.genres)) {
          data.data?.genres.forEach((item) => (allGenres[item.id] = item));
        }
      })
    );

    dispatch(getGenres(allGenres));
  };

  useEffect(() => {
    fetchConfig();
    genresCall();
  }, []);
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<SearchPage />} />
        <Route path="/movies/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
