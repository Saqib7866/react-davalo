import { create } from "apisauce";
//import notificationSvc from "./NotificationSvc";
//import spinnerSvc from "./SpinnerSvc";

export const api = create({
  baseURL: `https://dawalo-api.azurewebsites.net/api/`,
  headers: { Accept: "application/json" },
});

api.axiosInstance.interceptors.request.use(
  async (config) => {
    if (!config.url.includes("cart/create")) {
      //  spinnerSvc.start();
    }

    const token = localStorage.getItem("token") || "";

    if (token !== "") {
      config.headers.Authorization = token;
    }

    return config;
  },
  (err) => console.error(err)
);

api.axiosInstance.interceptors.response.use(
  (response) => {
    // spinnerSvc.stop();
    return response;
  },
  async (err) => {
    // spinnerSvc.stop();
    switch (err.response?.status) {
      case 400:
        //notificationSvc.error(err.response.data.message);
        // spinnerSvc.stop();
        return err;

      case 401:
        //  notificationSvc.error("You are unauthorized to perform this action");
        // console.error(err);
        // spinnerSvc.stop();
        return;

      case 404:
        const url = err.response?.config.url + "";
        if (url.includes("validate")) {
          // notificationSvc.error("Invalid promo code");
          // spinnerSvc.stop();
          return err;
        } else if (url.includes("track")) {
          // notificationSvc.error("Invalid Order Number");
          //spinnerSvc.stop();
          return;
        } else {
          //  notificationSvc.error("Item not found");
          // spinnerSvc.stop();
          return err;
        }

      case 500:
        // notificationSvc.error(
        //   "An unexpected error occurred contact system administrator"
        // );
        console.error(err);
        // spinnerSvc.stop();
        return;

      default:
        // notificationSvc.error(
        //   "An unexpected error occurred contact system administrator"
        // );
        // spinnerSvc.stop();
        return;
    }
  }
);
