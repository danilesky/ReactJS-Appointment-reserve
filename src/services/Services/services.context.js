import React, { createContext, useState, useEffect } from "react";
import { servicesRequest } from "./services.service";

export const ServicesContext = createContext();

const ServicesContextProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveServices = () => {
    setLoading(true);
    servicesRequest()
      .then((result) => {
        setServices(result);
        console.log(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    retrieveServices();
  }, []);

  return (
    <ServicesContext.Provider value={{ services, loading, error }}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesContextProvider;