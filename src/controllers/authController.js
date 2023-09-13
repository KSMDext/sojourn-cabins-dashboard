import { authAPI } from "../api/authAPI";

class AuthController {
  static async loginUser({ email, password }) {
    try {
      const response = await authAPI.login({ email, password });

      if (response.status === 200) {
        const { access, refresh } = response.data;

        localStorage.setItem("userAuthToken", access);
        localStorage.setItem("refreshToken", refresh);

        return {
          success: true,
          data: null,
          error: null,
        };
      } else {
        const { data } = response.data;
        return {
          success: false,
          data: data ?? null,
          error: null,
        };
      }
    } catch (error) {
      const { response } = error;
      const err = response?.data;

      if (response?.status === 404) {
        return {
          success: false,
          data: null,
          error: err?.errors[0]?.detail ?? "User does not exist",
        };
      }
      return {
        success: false,
        data: null,
        error: err?.errors[0]?.detail ?? "Something went wrong",
      };
    }
  }
}

export default AuthController;
