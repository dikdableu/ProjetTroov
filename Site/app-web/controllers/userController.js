import sha256 from "js-sha256";

export default class userController {
  /** Handles POST request. */

  // Fonction de création d'un utilisateur en Base
  static async createUserDb(login, password) {
    let cryptedPassword = sha256(password);
    const response = await fetch(`/api/loginApi/loginAddUser`, {
      body: JSON.stringify({ login: login, password: cryptedPassword }),
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    });

    if (response.status == 200) {
      return "ok";
    } else {
      return "error";
    }
  }

  // Fonction pour trouver un utilisateur en Base
  static async findUserDb(login, password) {
    let cryptedPassword = sha256(password);

    const response = await fetch(
      `/api/loginApi/loginGetUser?login=${encodeURIComponent(
        login
      )}&password=${encodeURIComponent(cryptedPassword)}`,
      {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    if (response.status == 200) {
      return "ok";
    } else {
      return "error";
    }
  }
}
