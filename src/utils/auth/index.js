export const setAccessToken = (accessToken) => {
  localStorage.setItem("accessToken", accessToken);
};

export const deleteAccessToken = () => {
  localStorage.removeItem("accessToken");
};

export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

export const setRefreshToken = (refreshToken) => {
  localStorage.setItem("refreshToken", refreshToken);
};

export const deleteRefreshToken = () => {
  localStorage.removeItem("refreshToken");
};

export const getRefreshToken = () => {
  return localStorage.getItem("refreshToken");
};
