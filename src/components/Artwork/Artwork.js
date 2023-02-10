import React from "react";
import Card from "../Card/Card";
import * as api from "../../utils/ArticApi";
import InfiniteScroll from "react-infinite-scroll-component";
import Preloader from "../Preloader/Preloader";

function Artwork({ cards, setCards, setPageNumber, pageNumber }) {
  const [hasMore, setHasMore] = React.useState(true);

  function fetchMoreData() {
    if (cards.length < 500) {
      setPageNumber(pageNumber + 1);
      api
        .getArtworkInfo(pageNumber)
        .then((res) => {
          // setCards((prevCards) => {
          //   return [...prevCards, ...res.data];
          // });
          setCards([...cards, ...res.data])
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setHasMore(false);
    }
  }

   React.useEffect(() => {
     fetchMoreData();
   }, []);

  return (
    <div className='artwork'>
      <h1 className='artwork__title'> La Colección</h1>

      <InfiniteScroll
        dataLength={cards.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Preloader/>}
        endMessage={<span>Llegaste al final!!</span>}
      >
        <section className='cards'>
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </section>
      </InfiniteScroll>
    </div>
  );
  //}
}

export default Artwork;
