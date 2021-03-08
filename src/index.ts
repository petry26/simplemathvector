import { Vector } from './classes/Vector'

try {

    let vectorA = new Vector([3, -3, 1])
    let vectorB = new Vector([4, 9, 2])

    console.log('add Result: ', vectorA.add(vectorB))
    console.log('sub Result: ', vectorA.sub(vectorB))
    console.log('Mult Result: ', vectorA.mult(vectorB))
    console.log('dotProduct Result: ', vectorA.dotProduct(vectorB))
    console.log('crossProduct Result: ', vectorA.crossProduct(vectorB))

   } catch (error) {
        console.error(error.message);
}





