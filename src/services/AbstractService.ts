const enum Methods {
  Get = "GET",
  Post = "POST",
  Put = "PUT",
  Delete = "DELETE",
  Patch = "PATCH",
  Options = "OPTIONS",
  Head = "HEAD",
}

export abstract class AbstractService {
  /**
   * Функция обертка над fetch, позволяет отлавливать ошибки запросов
   * @param url - Адрес запроса
   * @param method - Метода запроса
   * @param body - Тело запроса
   */
  private request = async (
    url: string,
    method: Methods = Methods.Get,
    body?: unknown
  ) => {
    try {
      const fetchOptions: {
        method: Methods;
        headers: Record<string, string>;
        body?: string;
      } = {
        method,
        headers: { "Content-Type": "application/json" },
      };

      if (method !== Methods.Get && method !== Methods.Head) {
        fetchOptions.body = JSON.stringify(body);
      }

      const res = await window.fetch(url, fetchOptions);

      if (!res.ok) {
        throw res;
      }

      const data = await res.json();

      return data;
    } catch (error: unknown) {
      throw error;
    }
  };

  /**
   * GET запрос
   * @param url - Адрес запроса
   */
  protected get = (url: string) => {
    return this.request(url, Methods.Get);
  };

  /**
   * POST запрос
   * @param url - Адрес запроса
   * @param body - Тело запроса
   */
  protected post = (url: string, body: unknown) => {
    return this.request(url, Methods.Post, body);
  };
}
