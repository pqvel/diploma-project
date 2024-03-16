const enum RequestMethods {
  Get = "GET",
  Post = "POST",
  Put = "PUT",
  Delete = "DELETE",
  Head = "HEAD",
}

class Request {
  private request = async <T>(
    url: string,
    method = RequestMethods.Get,
    body: T
  ) => {
    try {
      const fetchOptions: {
        method: RequestMethods;
        headers: {
          "Content-Type": "application/json";
        };
        body?: string;
      } = {
        method,
        headers: { "Content-Type": "application/json" },
      };

      if (method !== RequestMethods.Get && method !== RequestMethods.Head) {
        fetchOptions.body = JSON.stringify(body);
      }

      const res = await window.fetch(url, fetchOptions);

      if (!res.ok) {
        throw res;
      }

      const data = await res.json();

      return data;
    } catch (e) {
      throw e;
    }
  };

  get = async <T>(url: string) => {
    return this.request<T>(url, RequestMethods.Get);
  };

  post;
}

// /**
//  * Класс для работы с HTTP запросами. (аналог axios, только намного меньше весит)
//  * Метод #request предназначен для использования внутри класса Request.
//  */
// class Request {
//   /**
//    * Базовый метод для HTTP запросов
//    * @param {*} url URL запроса
//    * @param {*} method Метод запроса
//    * @param {*} body Тело запроса
//    * @returns {Promise<object>} Результат запроса
//    */

//   /**
//    * Выполняет GET запрос
//    * @param {*} url URL запроса
//    * @returns {Promise<object>} Результат запроса
//    */
//   get = async (url) => {
//     return await this.#request(url);
//   };

//   /**
//    * Выполняет POST запрос
//    * @param {*} url URL запроса
//    * @param {*} body Тело запроса
//    * @returns {Promise<object>} Результат запроса
//    */
//   post = async (url, body = {}) => {
//     return await this.#request(url, RequestMethods.Post, body);
//   };

/**
 * При необходимости сюда можно написать put, putch, delete и другие методы запросов
 * ...
 */
// }

/** Экземляр класса Request */
// export const request = new Request();
export const request = new Request();
