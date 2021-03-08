export class Vector {
    
    components: Array<number> = []

    constructor(components: Array<number>) {
        this.components = components;
    }

    private validateVectorLength = (vectorB: Vector) => {
        
        if(this.components.length !== vectorB.components.length)
            throw new Error ('Error: vectors must have equal length')
    }

    public add = (vectorB: Vector) => {

        this.validateVectorLength(vectorB)
    
        let result = [];
        for(let i=0; i< this.components.length; i++) {
            result.push(this.components[i]+vectorB.components[i]);
        }

        return result

    }

    public sub = (vectorB: Vector) => {

        this.validateVectorLength(vectorB)
    
        let result = [];
        for(let i=0; i< this.components.length; i++) {
            result.push(this.components[i]-vectorB.components[i]);
        }

        return result

    }
    
    public mult = (vectorB:Vector) => {

        this.validateVectorLength(vectorB)
    
        let result = [];
        for(let i=0; i< this.components.length; i++) {
            result.push(this.components[i]*vectorB.components[i]);
        }

        return result

    }

    public dotProduct = (vectorB: Vector) => {
        
        this.validateVectorLength(vectorB)
        
        let dotProduct = 0;
        for(let i=0; i< this.components.length; i++) {
            dotProduct += this.components[i]*vectorB.components[i];
        }

        return dotProduct

    }


    public crossProduct = (vectorB: Vector) => {

        this.validateVectorLength(vectorB)


        if(this.components.length !== 3)
            throw new Error ('Error: Vectors with length 3 are expected')


        return [
            this.components[1] * vectorB.components[2] - this.components[2] * vectorB.components[1],
            this.components[2] * vectorB.components[0] - this.components[0] * vectorB.components[2],
            this.components[0] * vectorB.components[1] - this.components[1] * vectorB.components[0]
        ]

    }

}