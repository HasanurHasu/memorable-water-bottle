import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import { addToLS } from "../../Utilities/localStorage";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [card, setCard] = useState([]);
    console.log(bottles);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    const handleCard = (bottle) =>{
        const newCard = [...card, bottle];
        setCard(newCard);
        addToLS(bottle.id);
    }

    return (
        <div>
            <h1 className="text-center text-2xl font-semibold">Bottles: {bottles.length}</h1>
            <h1 className="text-center text-2xl font-semibold">Card: {card.length}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 my-6">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleCard={handleCard}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;