import React from "react";
import { PropsAndState } from './PropsAndState'
import { useState, useEffect } from "react";
import { AnimalSpotlight } from "../components/animal/AnimalSpotlight"
import { getRandomId } from "../modules/AnimalManager"

export const Home = () => {

    const [spotlightId, setSpotlightId] = useState(0);

  const refreshSpotlightAnimal = () => {
    getRandomId().then(setSpotlightId);
  };

  useEffect(() => {
    refreshSpotlightAnimal();
  }, []);

  return (
    <>
         {<PropsAndState yourName={'Karl'}/>}
      <address>
        Visit Us at the Nashville North Location
        <br />
        500 Puppy Way
      </address>
      <h1>Animal Spotlight</h1>
      <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
      {
        spotlightId && <AnimalSpotlight animalId={spotlightId} />
      }
    </>
  );
};
    
    
export const MadLib =  () => {

    let [madLibrary, setMadlibrary]= useState({});

    

    useEffect(()=>{

        const library= {
            pluralNoun1: "unicorns",
       adjective1: "pretty",
       noun: "street",
       typeOfFood: "mexican",
       articleOfClothing: "dickey",
       verbEndingIning: "wallowing",
       pluralNoun2: "trees",
       pluralNoun3: "lasers",
       numberVal: "113",
       celebrity: "Taylor Swift",
       color: "golden rod",
       verbEndingIning2: "licking",
       typeOfFood1: "Italian sweets",
       pluralNoun: "concrete shoes",
       adjective2: "gloom1y",
       adjective3: "claustrophobic"
    
        }
        setMadlibrary(library)
    },[])

    return (
        <h3>
           Would it surprise you to learn that the most majestic {madLibrary.pluralNoun1} in the world
            eat garbage? Well, they do! Everything from {madLibrary.adjective1} soda cans to {madLibrary.noun}-stained 
            {madLibrary.typeOfFood} boxes to used {madLibrary.articleOfClothing} - and more! Some have been spotted 
            {madLibrary.verbEndingIning} dumpsters and then using their long {madLibrary.pluralNoun2} to spear as many 
            bags of {madLibrary.pluralNoun3} as they can before being caught. According to an interview with 
            the {madLibrary.numberVal} Minutes News, {madLibrary.celebrity} once came home to find a {madLibrary.color} unicorn 
            {madLibrary.verbEndingIning2} up in the recycling bin. The poor thing had mistaken leftover {madLibrary.typeOfFood1}
             for dried up {madLibrary.pluralNoun}. "It was a {madLibrary.adjective2} mistake. I am a good cook!" 
        </h3>
)



    }