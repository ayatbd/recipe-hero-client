/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import ChefCard from "./ChefCard";

const Chef = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/chefs")
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.error(error))
    }, [])

    return (

        <div className="my-20">
            <h3 className="font-bold text-3xl text-center mb-7">Recife Heroes</h3>
            <div className="grid md:grid-cols-3 gap-4">
            {
                chefs.map(chef => <ChefCard
                key={chef._id} chef={chef}></ChefCard>)
            }
            </div>
            
        </div>
    );
};

export default Chef;