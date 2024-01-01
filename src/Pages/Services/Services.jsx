import { useQuery } from "@tanstack/react-query";
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
      const res = await fetch(`services.json`);
      const data = res.json();
      return data;
    },
  });

  if (isPending) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span> Error : {error.message}</span>;
  }
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {services.map((service, i) => (
        <ServicesItem key={i} service={service} />
      ))}
    </div>
  );
};

export default Services;
