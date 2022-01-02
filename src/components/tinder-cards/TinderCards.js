import React ,{useState,useEffect}from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
import axios from '../../axios'

const TinderCards = () => {
    const [people,setPeople]=useState([])
    useEffect(()=>{     //when this piece of code runs will load once
     async function fetchData(){
        const req=await axios.get("/tinder/cards")
        /*return fetch("http://localhost:8001/tinder/cards")
                .then((response)=>{
                  return response.json()
                })
                .then((data)=>{
                    console.log(data);
                })
                .catch((err)=>{
                    console.log(err);
                })*/
                setPeople(req.data)
         
        
       
     }
     fetchData();
    },[])
const swiped=(direction,nameToDelete)=>{
    console.log('removing'+nameToDelete);
   
}
const outOfFrame=(name)=>{
console.log(name+'left the screen');
}
    return (
        <div className='tinderCards'>
            <div className='tinderCards__cardContainer'>
               {people.map((person)=>{
                 return(
                  <TinderCard
                  className='swipe'
                  key={person.name}
                  preventSwipe={['up','down']}
                  onSwipe={(dir)=>swiped(dir,person.name)}
                  onCardLeftScreen={()=>outOfFrame(person.name)}
                  >
                      <div className='card'>
                        <img src={person.imgUrl} className='cardImage'/>
                        <h3>{person.name}</h3>
                          </div>
              
                 
                  </TinderCard>
                )
               })}
            </div>
          
        </div>
    )
}

export default TinderCards
