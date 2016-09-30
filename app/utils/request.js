import 'whatwg-fetch';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function postRequest(bodyData, url) {
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyData),
  })
  .then(checkStatus)
  .then(parseJSON)
  .then((data) => ({ data }))
  .catch((err) => ({ error: err.response }));
}

export {
  postRequest,
};
