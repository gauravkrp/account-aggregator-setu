import apiConfig from "../../axios.config";

const { API_CALL } = apiConfig;

// API Paths
export const API_PATHS = {
  WELCOME: `/`,
  CONSENT: `/consent`,
  GET_DATA: `/get-data`
};

export default class ApiRoutes {

  ROUTES = ({
    GET_ANUMATI_URL: (mobileNumber) => `${API_PATHS.CONSENT}/${mobileNumber}`,
    GET_DATA: `${API_PATHS.GET_DATA}`
  });

  getAnumatiURL(mobileNumber) {
    return API_CALL(this.ROUTES.GET_ANUMATI_URL(mobileNumber));
  }

  fetchFIData() {
    return API_CALL(this.ROUTES.GET_DATA)
  }

}
