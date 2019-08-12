const jsonRegex = new RegExp('application/json', 'ug');

const checkIsJsonType = (str = '') => (
  !!((str.match(jsonRegex) || []).length)
);

const customFetch = async (url = '', options = { method: 'GET' }) => {
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }

  const contentType = res.headers.get('Content-Type');
  const isJsonType = checkIsJsonType(contentType);

  if (isJsonType) {
    return res.json();
  }

  return res.text();
};

export default customFetch;
