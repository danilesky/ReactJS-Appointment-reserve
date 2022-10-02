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
