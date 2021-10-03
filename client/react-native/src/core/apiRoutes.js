import apiConfig from "../../axios.config";

const { API_CALL } = apiConfig;

// API Paths
export const API_PATHS = {
  WELCOME: `/`,
  CONSENT: `/consent`,
};

export default class ApiRoutes {

  ROUTES = ({
    GET_ANUMATI_URL: (mobileNumber) => `${API_PATHS.CONSENT}/${mobileNumber}`,
  });

  getAnumatiURL(mobileNumber) {
    return API_CALL(this.ROUTES.GET_ANUMATI_URL(mobileNumber), 'GET');
  }

}
