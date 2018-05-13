const { assert } = require("chai");
const { SuperSet } = require("../src/lib/SuperSet");

describe("SuperSet", () => {
  let setA, setB, expected, actual;

  describe("membership", () => {
    describe("#isSubset", () => {
      it("should be a subset of setB", () => {
        setA = new SuperSet([1, 2]);
        setB = new SuperSet([1, 2, 3]);

        expected = true;
        actual = setA.isSubset(setB);

        assert.equal(actual, expected);
      });

      it("should not be a subset of setB", () => {
        setA = new SuperSet([4, 5]);
        setB = new SuperSet([1, 2, 3]);

        expected = false;
        actual = setA.isSubset(setB);

        assert.equal(actual, expected);
      });
    });

    describe("#isSuperset", () => {
      it("should be a subset of setB", () => {
        setA = new SuperSet([1, 2, 3]);
        setB = new SuperSet([1, 2]);

        expected = true;
        actual = setA.isSuperset(setB);

        assert.equal(actual, expected);
      });

      it("should not be a subset of setB", () => {
        setA = new SuperSet([1, 2, 3]);
        setB = new SuperSet([4, 5]);

        expected = false;
        actual = setA.isSuperset(setB);

        assert.equal(actual, expected);
      });
    });
  });

  describe("operations", () => {
    beforeEach(() => {
      setA = new SuperSet([1, 2, 3]);
      setB = new SuperSet([2, 3, 4]);
    });

    describe("#union", () => {
      it("should check if is setA is a superset of setB", () => {
        expected = new SuperSet([1, 2, 3, 4]);
        actual = setA.union(setB);

        assert.deepEqual(actual, expected);
      });
    });

    describe("#union", () => {
      it("should perform a set union between two sets", () => {
        expected = new SuperSet([1, 2, 3, 4]);
        actual = setA.union(setB);

        assert.deepEqual(actual, expected);
      });
    });

    describe("#intersection", () => {
      it("should perform a set `intersection` between two sets", () => {
        expected = new SuperSet([2, 3]);
        actual = setA.intersection(setB);

        assert.deepEqual(actual, expected);
      });
    });

    describe("#difference", () => {
      it("should perform a set `difference` between two sets", () => {
        expected = new SuperSet([1]);
        actual = setA.difference(setB);

        assert.deepEqual(actual, expected);
      });
    });

    describe("#symmetricDifference", () => {
      it("should perform a set `symmetricDifference` between two sets", () => {
        expected = new SuperSet([1, 4]);
        actual = setA.symmetricDifference(setB);

        assert.deepEqual(actual, expected);
      });
    });
  });
});
