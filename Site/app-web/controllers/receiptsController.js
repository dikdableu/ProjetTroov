export default class receiptsController {
  static async createReceiptsDb(title, img) {
    const response = await fetch(`/api/receiptsApi/receiptsAdd`, {
      body: JSON.stringify({ Title: title, Img: img }),
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        } else {
          return "error";
        }
      })
      .then((result) => {
        if (result.success) {
          return { text: "ok", data: result.data };
        } else {
          return "error";
        }
      });
    return response;
  }

  static async getReceiptsDb() {
    const result = await fetch(`/api/receiptsApi/receiptsGet`, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        } else {
          return "error";
        }
      })
      .then((result) => {
        if (result.success == "l'utilisateur a été trouvé !") {
          return { text: "ok", data: result.data };
        } else {
          return "error";
        }
      });
    return result;
  }

  static async updateReceiptsDb(title, img, id) {
    const response = await fetch(`/api/receiptsApi/receiptsUpdate`, {
      body: JSON.stringify({ Title: title, Img: img, id: id }),
      method: "POST",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.status == 200) {
          console.log("ici");
          return response.json();
        } else {
          return "error";
        }
      })
      .then((result) => {
        if (result.success) {
          return { text: "ok", data: result.data };
        } else {
          return "error";
        }
      });
    return response;
  }

  static async deleteReceiptsDb(idCard) {
    const response = await fetch(`/api/receiptsApi/receiptsDelete`, {
      body: JSON.stringify({ id: idCard }),
      method: "POST",
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        } else {
          return "error";
        }
      })
      .then((result) => {
        if (result.success) {
          return { text: "ok", data: result.data };
        } else {
          return "error";
        }
      });
    return response;
  }
}
