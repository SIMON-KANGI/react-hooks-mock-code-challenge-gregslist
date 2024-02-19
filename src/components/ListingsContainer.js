import React, { useEffect, useState } from "react";
 import ListingCard from "./ListingCard";
import Header from "./Header";
function ListingsContainer() {
  const [cards, setCards]=useState([])
  const [input, setInput]=useState('')
  useEffect(()=>{
    fetch('http://localhost:6001/listings')
    .then(res=>res.json())
    .then(data=>setCards(data))
  },[])
  console.log(cards)
  const FilterCards=cards.filter(card=>{
   const getCards= input==="" ||card.location.toUpperCase().includes(input.toUpperCase())
   return getCards
  })
  console.log(FilterCards)
  function handleChange(e){
    setInput(e.target.value)
  }

  function handleDelete(id){
    fetch(`http://localhost:6001/listings/${id}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
  setCards(cards=>cards.filter(card=>card.id !==id))
  }
  console.log(cards)
  return (
    <main>
      <Header value={input}  handleChange={handleChange}/>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {
          FilterCards.map(card=>{
            return(
              <ListingCard handleDelete={handleDelete} id={card.id} image={card.image} decription={card.description} location={card.location}/> 
            )
            
          })
        }
       
      </ul>
    </main>
  );
}

export default ListingsContainer;
