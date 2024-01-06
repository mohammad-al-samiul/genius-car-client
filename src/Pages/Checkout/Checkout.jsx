import { useLoaderData } from "react-router-dom";

const Checkout = () => {
    const service = useLoaderData();
    console.log(service);
    return (
        <div>
            
        </div>
    );
};

export default Checkout;