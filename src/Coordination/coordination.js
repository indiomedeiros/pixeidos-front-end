export const goToHomePage = (history) => {
  history.push("/");
};

export const goToImageDetailsPage = (history, id) => {
  history.push(`/image/${id}`);
};

export const goToImageSearchPage = (history, dataSearch) => {
  history.push(`/image/search/${dataSearch}`);
};

export const goToSignupPage = (history) => {
  history.push("/signup");
};

export const goTologinPage = (history) => {
  history.push("/login");
};

export const goToUserPage = (history) => {
  history.push("/user");
};


