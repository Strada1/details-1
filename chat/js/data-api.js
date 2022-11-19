const sendData = async (onSucess, onFail, body, url, errorText = 'Ошибка соединения') => {
  try {
    const response = await fetch(
      url,
      {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
        body
      }
    );

    console.log(body);
    console.log(url);
    console.log(response);

    if (!response.ok) {
      throw new Error(errorText);
    }

    onSucess();
  } catch (error) {
    onFail(error.message)
  }
};

export { sendData };
