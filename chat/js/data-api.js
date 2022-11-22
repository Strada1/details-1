const sendData = async (onSuccess, onFail, body, url, method = 'POST', headers = {}, errorText = 'Ошибка соединения') => {
  try {
    const response = await fetch(
      url,
      {
        method,
        headers,
        body
      }
    );

    if (!response.ok) {
      throw new Error(errorText);
    }

    onSuccess();
  } catch (error) {
    onFail(error.message);
  }
};

const getData = async (onSuccess, onFail, url, headers = {}, errorText = 'Ошибка соединения') => {
  try {
    const response = await fetch(
      url,
      {
        method: 'GET',
        headers
      });

    if (!response.ok) {
      throw new Error(errorText);
    }

    const result = await response.json();
    onSuccess(result);
  } catch (error) {
    onFail(error.message);
  }
};

export { sendData, getData };
