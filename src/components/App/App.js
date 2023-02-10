import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Artwork from "../Artwork/Artwork";
import Search from "../Search/Search";
import ExplorerPage from "../ExplorerPage/ExplorerPage";
import Footer from "../Footer/Footer";

function App() {
  const [cards, setCards] = React.useState([]);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false) 


  function handleOnExplore(evt) {
    localStorage.setItem('type', evt.target.id);
  }
  return (
      <div className='page'>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Main handleOnExplore={handleOnExplore} />}
          />
          <Route
            path='/artwork'
            element={
              <Artwork
                cards={cards}
                setCards={setCards}
                setPageNumber={setPageNumber}
                pageNumber={pageNumber}
              />
            }
          />
          <Route
            path='/search'
          element={<Search cards={cards} setCards={setCards} isLoading={isLoading } setIsLoading={setIsLoading} />}
          />
          <Route
            path='/explorer'
            element={
              <ExplorerPage
                // exploreCards={exploreCards}
                // setExploreCards={setExploreCards}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            }
          ></Route>
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
