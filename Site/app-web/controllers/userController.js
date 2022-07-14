import sha256 from "js-sha256";

export default class userController {
  /** Handles POST request. */

  async createUserDb(login, password) {
    let cryptedPassword = sha256(password);

    try {
      const response = await fetch(`/api/loginApi/loginAddUser`, {
        body: { login: login, password: cryptedPassword },
        method: "POST",
      });

      if (response.status >= 400) {
        return res.status(400).json({
          error: "There was an error",
        });
      }

      return res.status(200).json({ status: "ok" });
    } catch (error) {
      return res.status(500).json({
        error: "There was an error",
      });
    }
  }

  async findUserDb(login, password) {
    let cryptedPassword = sha256(password);

    try {
      const response = await fetch(`/api/loginApi/loginGetUser`, {
        body: { login: login, password: cryptedPassword },
        method: "GET",
      });

      if (response.status >= 400) {
        return res.status(400).json({
          error: "There was an error",
        });
      }

      return res.status(200).json({ status: "ok" });
    } catch (error) {
      return res.status(500).json({
        error: "There was an error",
      });
    }
  }
}
