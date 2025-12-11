class Api {
  constructor(baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;

    this._routes = {
      getUser:      { method: "GET",    path: "/users/me" },
      editUser:     { method: "PATCH",  path: "/users/me" },
      updateAvatar: { method: "PATCH",  path: "/users/me/avatar" },

      getCards:     { method: "GET",    path: "/cards" },
      addCard:      { method: "POST",   path: "/cards" },
      deleteCard:   { method: "DELETE", path: (id) => `/cards/${id}` },

      likeCard:     { method: "PUT",    path: (id) => `/cards/${id}/likes` },
      unlikeCard:   { method: "DELETE", path: (id) => `/cards/${id}/likes` },
    };
  }


  // ----- Metodo central para realizar solicitud HTTP a la API ----- //
  _request(routeName, { id = null, body = null } = {}) {
    const route = this._routes[routeName];

    // ----- Comprueba si el nombre de la ruta existe en "this._routes" ----- //
    if (!route) {
      console.log(`API route not found: ${routeName}`);
    }

    // ----- Genera el endpoint de la solicitud en base del path en "this._routes" ----- //
    // ----- Si el endpoint necesita el ID del card se pasa como parametro ----- //
    const endpoint = typeof route.path === "function" ? route.path(id) : route.path;

    // ----- Genera el objeto que contiene el metodo, los encabezados y el cuerpo de la solicitud HTTP ----- //
    const options = {
      method: route.method,
      headers: this._headers,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    // ----- Hace la solicitud con toda la informacion generada y regresa el resultado ----- //
    return fetch(this._baseUrl + endpoint, options)
      .then((res => this._checkResponse(res)));
  }


  // ----- Verifica la respuesta del servidor y retorna el JSON o el Error ----- //
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
  }


  // ----- Metodos publicos para las diferentes solicitudes ----- //
  getAppInfo() {
    return Promise.all([ this.getUser(), this.getCards() ]);
  }

  getUser() {
    return this._request("getUser");
  }

  editUser(data) {
    return this._request("editUser", { body: data });
  }

  updateAvatar(data) {
    return this._request("updateAvatar", { body: data });
  }

  getCards() {
    return this._request("getCards");
  }

  addCard(data) {
    return this._request("addCard", { body: data });
  }

  deleteCard(cardId) {
    return this._request("deleteCard", { id: cardId });
  }

  addLike(cardId) {
    return this._request("likeCard", { id: cardId });
  }

  removeLike(cardId) {
    return this._request("unlikeCard", { id: cardId });
  }

}

export const api = new Api ("https://around-api.es.tripleten-services.com/v1", {
    authorization: "b4b4617b-f69c-4e5f-b01f-69dbca101938",
    "Content-Type": "application/json"
  }
);