export default class receiptsController {
  /** Handles POST request. */

  static async createReceiptsDb(title, img) {
    const response = await fetch(`/api/loginApi/receiptsAdd`, {
      body: JSON.stringify({ Title: title, Img: img }),
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

  //   static async findReceiptsDb(login, password) {
  //     let cryptedPassword = sha256(password);

  //     const response = await fetch(
  //       `/api/loginApi/loginGetUser?login=${encodeURIComponent(
  //         login
  //       )}&password=${encodeURIComponent(cryptedPassword)}`,
  //       {
  //         method: "GET",
  //         mode: "no-cors",
  //         headers: {
  //           "Access-Control-Allow-Origin": "*",
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //         },
  //       }
  //     );

  //     if (response.status == 200) {
  //       return "ok";
  //     } else {
  //       return "error";
  //     }
  //   }

  //   static async updateReceiptsDb(login, password) {
  //     let cryptedPassword = sha256(password);

  //     const response = await fetch(
  //       `/api/loginApi/loginGetUser?login=${encodeURIComponent(
  //         login
  //       )}&password=${encodeURIComponent(cryptedPassword)}`,
  //       {
  //         method: "GET",
  //         mode: "no-cors",
  //         headers: {
  //           "Access-Control-Allow-Origin": "*",
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //         },
  //       }
  //     );

  //     if (response.status == 200) {
  //       return "ok";
  //     } else {
  //       return "error";
  //     }
  //   }
}
