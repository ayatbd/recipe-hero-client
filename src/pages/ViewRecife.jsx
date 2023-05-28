import { useLoaderData } from "react-router-dom";

const ViewRecife = () => {
    const chef = useLoaderData();
    console.log(chef.name);
    const {_id, name, description} = chef;
    return (
        <div>
            {name}
        </div>
    );
};

export default ViewRecife;