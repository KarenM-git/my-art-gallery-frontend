import React from "react";
import Card from "../Card/Card";
import Preloader from "../Preloader/Preloader";
import * as api from "../../utils/ArticApi";

function ExplorerPage({isLoading, setIsLoading }) {
  const [type, setType] = React.useState("");
   const [exploreCards, setExploreCards] = React.useState([]);


  React.useEffect(() => {
    setType(localStorage.getItem('type'));
    setIsLoading(true);
    api
      .types(type)
      .then((res) => {
        setExploreCards(res.data);
      })
      .catch((err) => {
        console.log(err);
      }).finally(() => {
        setIsLoading(false);
      })
  }, [type]);

  return (
    <div>
      <h2> {type}</h2>
      {isLoading ? (
        <Preloader />
      ) : (
        <section className='cards'>
            {exploreCards.map((card) => {
            
                 if (card.artwork_type_title === type) {
                 return <Card card={card} key={card.id} />
                 }
                 else { return };
              
          })}
        </section>
      )}
    </div>
  );
}

export default ExplorerPage;
