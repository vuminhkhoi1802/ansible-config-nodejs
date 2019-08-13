const getValue = (ctx, property) => {
  const { [property]: queryValue } = ctx.query;
  const { [property]: bodyValue } = ctx.request.body;
  return queryValue || bodyValue;
};

const booleanParam = (value, defaultValue = false) => {
  if (value === undefined || value === '') {
    return defaultValue;
  }

  if (typeof value === 'boolean') {
    return value;
  }

  if (value === 'true' || value === 'True') {
    return true;
  }

  return !!Number(value);
};

const arrayParam = (_value, defaultValue = []) => {
  const value = _value || defaultValue;

  if (typeof value === 'string') {
    return value.split(',').filter((e) => !!e);
  }

  if (!(value instanceof Array)) {
    return [];
  }

  return value;
};

const numberParam = (value, defaultValue = 0) => {
  if (typeof value === 'number') {
    return value;
  }

  const number = Number(value);
  if (Number.isNaN(number)) {
    return value || defaultValue;
  }

  return number;
};

const getParameter = (ctx, property, defaultValue) => (
  getValue(ctx, property) || defaultValue || ''
);

const getNumberParameter = (ctx, property, defaultValue = 0) => (
  numberParam(getValue(ctx, property), defaultValue)
);

const getArrayParameter = (ctx, property, defaultValue = []) => (
  arrayParam(getValue(ctx, property), defaultValue)
);

const getBooleanParameter = (ctx, property, defaultValue = false) => (
  booleanParam(getValue(ctx, property), defaultValue)
);

module.exports = {
  arrayParam,
  numberParam,
  booleanParam,
  getParameter,
  getArrayParameter,
  getNumberParameter,
  getBooleanParameter,
};
