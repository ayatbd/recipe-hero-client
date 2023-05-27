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

        <div className="grid grid-cols-3 gap-4">
            {
                chefs.map(chef => <ChefCard
                key={chef.id} chef={chef}></ChefCard>)
            }
        </div>
    );
};

export default Chef;