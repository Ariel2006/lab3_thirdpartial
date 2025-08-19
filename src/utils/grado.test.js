import { toCelsius, toFahrenheit, movingAverage } from './grados';

describe('Conversión de temperaturas', () => {
  test('32°F → 0.0°C', () => {
    expect(toCelsius(32)).toBe(0.0);
  });

  test('0°C → 32.0°F', () => {
    expect(toFahrenheit(0)).toBe(32.0);
  });

  test('100°C → 212.0°F', () => {
    expect(toFahrenheit(100)).toBe(212.0);
  });

  test('-40°C ↔ -40°F', () => {
    expect(toFahrenheit(-40)).toBe(-40.0);
    expect(toCelsius(-40)).toBe(-40.0);
  });

  test('Errores por tipo inválido', () => {
    expect(() => toCelsius('a')).toThrow(TypeError);
    expect(() => toFahrenheit(null)).toThrow(TypeError);
  });
});

describe('Media móvil', () => {
  test('movingAverage([10, 20, 30, 40], 2) → [15.00, 25.00, 35.00]', () => {
    expect(movingAverage([10, 20, 30, 40], 2)).toEqual([15.00, 25.00, 35.00]);
  });

  test('movingAverage([1, 2, 3], 3) → [2.00]', () => {
    expect(movingAverage([1, 2, 3], 3)).toEqual([2.00]);
  });

  test('Errores por valores no numéricos o ventana inválida', () => {
    expect(() => movingAverage([1, 'a', 3], 2)).toThrow(TypeError);
    expect(() => movingAverage([1, 2], 3)).toThrow(RangeError);
    expect(() => movingAverage([1, 2], 1)).toThrow(RangeError);
  });
});
