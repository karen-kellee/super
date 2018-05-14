/**
 * @flow
 * @module super/number
 */

const RomanNumeralToIntegerMap = new Map([
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1]
]);

const IntegerToRomanNumeralMap = new Map([
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"]
]);

/**
 *
 * Number with superpowers! 💪
 *
 * @public
 *
 */
class _Number extends Number {
  /**
   * @public
   *
   * @desc Construct a Number
   *
   * @param {number} number
   */
  constructor(number: Number) {
    super(number);
  }
  /**
   * @public
   *
   * @desc Convert a roman numeral to number
   *
   * @param {string} str - Roman numeral
   * @returns {number} Number representation of a roman numeral
   */
  static fromRomanNumeral(str: string): Number {
    function _romanToInteger(num, result = 0) {
      // TODO: reduce iterations
      for (let [roman, int] of RomanNumeralToIntegerMap) {
        if (num.slice(0, roman.length) === roman) {
          return _romanToInteger(num.slice(roman.length), result + int);
        }
      }
      return result;
    }
    return _romanToInteger(str);
  }
  /**
   * @public
   *
   * @desc Convert a number to roman numeral
   *
   * @returns {string} Roman numeral representation of number
   */
  toRomanNumeral(): String {
    function _integerToRoman(num, result = "") {
      // TODO: reduce iterations
      for (let [int, roman] of IntegerToRomanNumeralMap) {
        if (num >= int) return _integerToRoman(num - int, result + roman);
      }
      return result;
    }
    return _integerToRoman(this);
  }
}
export { _Number as Number };
