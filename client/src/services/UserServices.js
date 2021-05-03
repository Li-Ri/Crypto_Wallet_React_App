const baseUrl = "http://localhost:5000/api/users/";

export const UserService = {
  getUsers: () => {
    return fetch(baseUrl).then((res) => res.json());
  },
};
