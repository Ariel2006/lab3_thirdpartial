// Validación de número finito
const validateNumber = (val) => {
  if (typeof val !== 'number' || !Number.isFinite(val)) {
    throw new TypeError('Valor no numérico o no finito');
  }
};

export function toCelsius(fahrenheit) {
  validateNumber(fahrenheit);
  const celsius = (fahrenheit - 32) * (5 / 9);
  return Number(celsius.toFixed(1));
}

export function toFahrenheit(celsius) {
  validateNumber(celsius);
  const fahrenheit = (celsius * 9 / 5) + 32;
  return Number(fahrenheit.toFixed(1));
}

export function movingAverage(series, window) {
  if (!Array.isArray(series) || !series.every(n => typeof n === 'number' && Number.isFinite(n))) {
    throw new TypeError('La serie debe contener solo números finitos');
  }

  if (!Number.isInteger(window) || window < 2 || window > series.length) {
    throw new RangeError('La ventana debe ser un entero entre 2 y la longitud de la serie');
  }

  const result = [];
  for (let i = 0; i <= series.length - window; i++) {
    const windowSlice = series.slice(i, i + window);
    const avg = windowSlice.reduce((a, b) => a + b, 0) / window;
    result.push(Number(avg.toFixed(2)));
  }

  return result;
}
