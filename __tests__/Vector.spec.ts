import { Vector } from '../src/classes/Vector'

describe('Complete test of the Vector Class', () => {


    test('validateVectorLength', () => {

        const testVectorA = new Vector([1, 2, 3])
        const testVectorB = new Vector([1, 2, 3, 4])

        expect(() => { testVectorA.add(testVectorB) }).toThrow(Error);
        expect(() => { testVectorA.sub(testVectorB) }).toThrow(Error);
        expect(() => { testVectorA.mult(testVectorB) }).toThrow(Error);
        expect(() => { testVectorA.dotProduct(testVectorB) }).toThrow(Error);
        expect(() => { testVectorA.crossProduct(testVectorB) }).toThrow(Error);
        
    })

    test('add', () => {

        const testVectorA = new Vector([1, 2, 3])
        const testVectorB = new Vector([1, 2, 3])

        const test = testVectorA.add(testVectorB)

        expect(test).toEqual([2,4,6])
    })

    test('sub', () => {

        const testVectorA = new Vector([4, 6, 1])
        const testVectorB = new Vector([1, 2, 3])

        const test = testVectorA.sub(testVectorB)

        expect(test).toEqual([3,4,-2])
    })

    test('mult', () => {

        let testVectorA = new Vector([5, 5, 5])
        let testVectorB = new Vector([1, 2 ,3])

        const test = testVectorA.mult(testVectorB)

        expect(test).toEqual([5, 10, 15])
    })

    test('dotProduct', () => {

        let testVectorA = new Vector([2, 4, 1])
        let testVectorB = new Vector([2, 2, 0])

        const test = testVectorA.dotProduct(testVectorB)

        expect(test).toEqual(12)
    })

    test('crossProduct', () => {

        let testVectorA = new Vector([1, 1, 0])
        let testVectorB = new Vector([0, 1, 1])

        const test = testVectorA.crossProduct(testVectorB)

        expect(test).toEqual([1, -1, 1])
    })

    test('crossProduct error, vectors with more than 3 components', () => {

        let testVectorA = new Vector([1, 1, 0, 4])
        let testVectorB = new Vector([0, 1, 1, 3])

        // expect(testVectorA.crossProduct(testVectorB)).toThrow(Error)

        expect(() => { testVectorA.crossProduct(testVectorB) }).toThrow(Error);
    })


})

