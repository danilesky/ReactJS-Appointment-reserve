import { services } from "./services.mock";

export const servicesRequest = () => {
  return new Promise((resolve, reject) => {
    const servicesMock = services;

    if (!servicesMock) {
      reject("No services found");
    }
    resolve(servicesMock);
  });
};

//Adds is checked? property to services with default:false for usage for componponent
export const servicesTransform = (result) => {
  const transformedServices = result.map((service) => {
    return {
      ...service,
      isChecked: false,
    };
  });
  return transformedServices;
};
