const baseUrl = "http://localhost:5000/api/users/";

export const UserService = {
  getUsers: () => {
    return fetch(baseUrl).then((res) => res.json());
  },
  updateUser: (user) => {
    return fetch(baseUrl + user._id, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: { "Content-type": "application/json" },
    }).then((res) => res.json());
  },
  findUser: (id) => {
    return fetch(baseUrl + id).then((res) => {
      return res.json();
    });
  },
  insertUser: (user) => {
    return fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-type": "application/json" },
    }).then((res) => {
      return res.json();
    });
  },
};
