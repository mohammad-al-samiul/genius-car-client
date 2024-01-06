/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Components/Spinner/Spinner";
import ServicesItem from "./ServicesItem";

const Services = () => {
  const {
    isPending,
    isError,
    data: services,
    error,
  } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:8000/api/services`);
      const data = res.json();
      return data;
    },
  });

  if (isPending) {
    return <Spinner />;
  }
  if (isError) {
    return <span> Error : {error.message}</span>;
  }
  return (
    <div className="mt-10 ">
      <div className="text-center lg:px-40">
        <h3 className="text-xl text-red-500">Service</h3>
        <h1 className="text-3xl font-bold">Our Service Area</h1>
        <p className="mt-3">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
        {services.map((service, i) => (
          <ServicesItem key={i} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
