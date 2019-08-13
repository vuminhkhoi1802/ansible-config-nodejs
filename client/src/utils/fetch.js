const firstSlashRegex = new RegExp('^/', 'ug');
const doubleSlashRegex = new RegExp('^//', 'ug');
const protocolRegex = new RegExp('^https?://', 'ug');
const jsonRegex = new RegExp('application/json', 'ug');

const checkStringHasRegex = (str, regex) => (
  !!((str.match(regex) || []).length)
);

const PORT = process.env.PORT || 3000;
const REACT_APP_API_URL = process.env.REACT_APP_API_URL || `http://localhost:${PORT}`;
const isDevelopment = process.env.NODE_ENV === 'development';

const calcUrl = (url = '') => {
  if (!isDevelopment || checkStringHasRegex(url, protocolRegex) || checkStringHasRegex(url, doubleSlashRegex)) {
    return url;
  }

  const calculatedUrl = url.replace(firstSlashRegex, '');
  return `${REACT_APP_API_URL}/${calculatedUrl}`
}

const checkIsJsonType = (str = '') => (
  !!((str.match(jsonRegex) || []).length)
);

const customFetch = async (url = '', options = { method: 'GET' }) => {
  const res = await fetch(calcUrl(url), options);

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
