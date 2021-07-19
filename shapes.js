function generateSquareDonut() {
    const positions = [
        1.0, 0.000, 0,
        0.5, 0.866, 0,
        -0.5, 0.866, 0,
        -1.0, 0.000, 0,
        -0.5, -0.866, 0,
        0.5, -0.866, 0,
    ];
    const triangles = [
        0, 1, 2,
        0, 2, 3,
        0, 3, 4,
        0, 4, 5,
    ];
    return { positions, triangles };
}


function generateCircle(n) {

    const angle = 360 / n;

    const positions = [];
    for (let i = 0; i < n; i += 1) {
        const degrees = i * angle;
        const radians = degrees * Math.PI / 180;
        positions.push(Math.cos(radians), Math.sin(radians), 0);


    }

    positions.push(0, 0, 0);


    const triangles = [];
    for (let i = 0; i < n; i += 1) {
        const iNext = (i + 1) % n;
        triangles.push(i, iNext, n);
    }

    return { positions, triangles };


}

function generateCube(n) {

    const positions = [
        -1, 1, 1,
        -1, -1, 1,
        1, -1, 1,
        1, 1, 1,

        -1, 1, -1,
        1, 1, -1,
        1, -1, -1,
        -1, -1, -1,

    ];
    const triangles = [
        1, 3, 0,
        1, 2, 3,

        0, 5, 4,
        0, 3, 5,

        6, 1, 7,
        6, 2, 1,

        2, 5, 3,
        2, 6, 5,

        0, 4, 1,
        1, 4, 7,

        5, 6, 4,
        6, 7, 4,
    ];
    return { positions, triangles };
}


function generateCone(n, radius, height) {

    const angle = 360 / n;

    const positions = [];


    positions.push(0, 0, 5);

    for (let i = 0; i < n; i += 1) {
        const degrees = i * angle;
        const radians = degrees * Math.PI / 180;
        positions.push(Math.cos(radians), Math.sin(radians), 0);


    }

    positions.push(0, 0, 0);




    const triangles = [];
    for (let i = 0; i < n + 2; i += 1) {
        const iNext = (i + 2) % n;
        triangles.push(i, iNext, 0);
    }

    return { positions, triangles };


}


//GRID

function generateGrid(nlat, nlong, width, height) {
    const positions = [];

    
    

   
    for (let ilong = 0; ilong < nlong; ilong++) {
        let xlong = ilong / (nlong - 1) * width - width * 0.5;
        for (let ilat = 0; ilat < nlat; ilat++) {
            let ylat = ilat / (nlat - 1) * height - height * 0.5;
    
            positions.push(xlong, ylat, 0);

        
        }

        
    }

    const triangles = [];

    for (let ilong = 0; ilong < nlong - 1; ilong++) {
        let nextLong = (ilong + 1) % nlong;
        for (let ilat = 0; ilat < nlat - 1; ilat++) {
            let nextLat = (ilat + 1) % nlat;
        
            triangles.push(index(ilong,nlat,ilat))
            triangles.push(index(nextLong,nlat,ilat))
            triangles.push(index(ilong,nlat,nextLat))

            triangles.push(index(nextLong,nlat,ilat))
            triangles.push(index(nextLong,nlat,nextLat))
            triangles.push(index(ilong,nlat,nextLat))
        
        }

    }   

    return { positions, triangles };

}



function index(ilong,nlat,ilat){
    const indexresult = ilong * nlat + ilat;
    return indexresult;
}




 // wrapped = (current + advance) % size 



function generateTerrain(nlat, nlong, width, height, depth) {
    const positions = [];

    
    

   
    for (let ilong = 0; ilong < nlong; ilong++) {
        let xlong = ilong / (nlong - 1) * width - width * 0.5;
        for (let ilat = 0; ilat < nlat; ilat++) {
            let ylat = ilat / (nlat - 1) * height - height * 0.5;
            
            depth = Math.random(0,1)
            positions.push(xlong, ylat, depth);

        
        }

        
    }

    const triangles = [];

    for (let ilong = 0; ilong < nlong - 1; ilong++) {
        let nextLong = (ilong + 1) % nlong;
        for (let ilat = 0; ilat < nlat - 1; ilat++) {
            let nextLat = (ilat + 1) % nlat;
        
            triangles.push(index(ilong,nlat,ilat))
            triangles.push(index(nextLong,nlat,ilat))
            triangles.push(index(ilong,nlat,nextLat))

            triangles.push(index(nextLong,nlat,ilat))
            triangles.push(index(nextLong,nlat,nextLat))
            triangles.push(index(ilong,nlat,nextLat))
        
        }

    }   

    return { positions, triangles };

}






function generateRipple(nlat, nlong, width, height, frequency, amplitude) {
    const positions = [];

    
    

   
    for (let ilong = 0; ilong < nlong; ilong++) {
        let xlong = ilong / (nlong - 1) * width - width * 0.5;
        for (let ilat = 0; ilat < nlat; ilat++) {
            let ylat = ilat / (nlat - 1) * height - height * 0.5;
            
            depth = amplitude * Math.sin(frequency * Math.sqrt(xlong^2 + ylat^2))
            positions.push(xlong, ylat, depth);

        
        }

        
    }

    const triangles = [];

    for (let ilong = 0; ilong < nlong - 1; ilong++) {
        let nextLong = (ilong + 1) % nlong;
        for (let ilat = 0; ilat < nlat - 1; ilat++) {
            let nextLat = (ilat + 1) % nlat;
        
            triangles.push(index(ilong,nlat,ilat))
            triangles.push(index(nextLong,nlat,ilat))
            triangles.push(index(ilong,nlat,nextLat))

            triangles.push(index(nextLong,nlat,ilat))
            triangles.push(index(nextLong,nlat,nextLat))
            triangles.push(index(ilong,nlat,nextLat))
        
        }

    }   

    return { positions, triangles };

}

function generateCylinder(nlong, nlat, radius, height) {

    const positions = [];


    // positions.push(0, 0, 5);

    for (let ilong = 0; ilong < nlong; ilong += 1) {
        for (let ilat = 0; ilat < nlat; ilat++) {
            let ylat = ilat / (nlat - 1) * height - height * 0.5;

            const radians = ilong / nlong * Math.PI * 2;

    
            positions.push(Math.cos(radians), ylat, Math.sin(radians));

        
        }

        
    }

    positions.push(0,height/2 * -1,0)
    positions.push(0,height/2,0)

    const triangles = [];

    for (let ilong = 0; ilong < nlong; ilong++) {
        let nextLong = (ilong + 1) % nlong;
        for (let ilat = 0; ilat < nlat - 1; ilat++) {
            let nextLat = (ilat + 1) % nlat;
        
            
            triangles.push(index(nextLong,nlat,ilat))
            triangles.push(index(ilong,nlat,ilat))
            triangles.push(index(ilong,nlat,nextLat))

            
            triangles.push(index(nextLong,nlat,nextLat))
            triangles.push(index(nextLong,nlat,ilat))
            triangles.push(index(ilong,nlat,nextLat))

        
        }

    }  
    
    


}










function rangeMap(toLo, toHi, fromLo, fromHi, fromValue) {

    let toValue = ((fromValue - fromLo)/(fromHi-fromLo)) * (toHi - toLo) + toLo;
    return toValue;

    

}


function generateVee(nlong) {
    const seeds = [
        new THREE.Vector3(0, -2, 0),
        new THREE.Vector3(3, 1, 0),
        new THREE.Vector3(2, 2, 0),
    ];


    const positions = [];

    
    for (let ilong = 0; ilong < nlong; ilong += 1) {
        const radians = ilong * 0.29
        const matrix = new THREE.Matrix4().makeRotationY(radians);
        for (let seedIndex = 0; seedIndex < seeds.length; seedIndex += 1){
            console.log(seeds[seedIndex]);
            const rotatedSeed = seeds[seedIndex].clone().applyMatrix4(matrix);
            positions.push(rotatedSeed.x, rotatedSeed.y, rotatedSeed.z)
        }

    }

    
    
    const triangles = [];

    const nlat = 3;

    for (let ilong = 0; ilong < nlong - 1; ilong++) {
        let nextLong = (ilong + 1) % nlong;
        for (let ilat = 0; ilat < nlat - 1; ilat++) {
            let nextLat = (ilat + 1) % nlat;
        
            triangles.push(index(ilong,nlat,ilat))
            triangles.push(index(nextLong,nlat,ilat))
            triangles.push(index(ilong,nlat,nextLat))

            triangles.push(index(ilong,nlat,nextLat))
            triangles.push(index(nextLong,nlat,ilat))
            triangles.push(index(nextLong,nlat,nextLat))
        
        }

    }

    return {positions, triangles};
}


//from latitude intervals



function generateSphere(nlong, nlat, radius) {
    
    const radiansPerSlice = Math.PI/nlat;
    
    const seeds = [];



    
    for (let ilat = 0; ilat < nlat; ilat += 1) {

        let radians = rangeMap(-1 * Math.PI/2 + radiansPerSlice, Math.PI/2 - radiansPerSlice, 0, nlat - 1, ilat);

        const seed = new THREE.Vector3(radius * Math.cos(radians), radius * Math.sin(radians), 0);

        seeds.push(seed)

    }


    const positions = [];

    for (let ilong = 0; ilong < nlong; ilong += 1) {
        

        const radians = rangeMap(0, Math.PI*2, 0, nlong - 1, ilong);

        const matrix = new THREE.Matrix4().makeRotationY(radians);

        for (let ilat = 0; ilat < nlat; ilat += 1) {
            
            const seed = seeds[ilat];

            const rotatedPosition = seed.clone().applyMatrix4(matrix);

            positions.push(rotatedPosition.x, rotatedPosition.y, rotatedPosition.z);


    
        }

    }

    positions.push(0, -1 * radius, 0);
    positions.push(0, radius, 0);

    
    
    const triangles = [];

    

    for (let ilong = 0; ilong < nlong; ilong++) {
        let nextLong = (ilong + 1) % nlong;
        for (let ilat = 0; ilat < nlat - 1; ilat++) {
            let nextLat = (ilat + 1) % nlat;
        
            
            triangles.push(index(nextLong,nlat,ilat))
            triangles.push(index(ilong,nlat,nextLat))
            triangles.push(index(ilong,nlat,ilat))

            
            triangles.push(index(nextLong,nlat,nextLat))
            triangles.push(index(ilong,nlat,nextLat))
            triangles.push(index(nextLong,nlat,ilat))

        
        }

    }  
    
    for (let ilong = 0; ilong < nlong; ilong += 1) {
        let nextLong = (ilong + 1) % nlong;
        triangles.push(index(ilong, nlat, 0))
        triangles.push(nlong * nlat)
        triangles.push(index(nextLong, nlat, 0))

        triangles.push(index(ilong, nlat, nlat - 1))
        triangles.push(index(nextLong, nlat, nlat - 1))
        triangles.push(nlong * nlat + 1)
    }

    return {positions, triangles};
    
}














function generateCapsule(nlong, nlatPerHemi, radius, height) {

    //nlatPerHemi is standing in for latitudes per hemisphere
    
    const radiansPerSlice = Math.PI/nlatPerHemi;
    
    const seeds = [];

    const nlat = 2 * nlatPerHemi;



    
    for (let ilat = 0; ilat < nlatPerHemi; ilat += 1) {

        let radians = rangeMap(-1 * Math.PI/2 + radiansPerSlice, 0, 0, nlatPerHemi - 1, ilat);

        const seed = new THREE.Vector3(radius * Math.cos(radians), radius * Math.sin(radians) - height/2, 0);

        seeds.push(seed)

    }

    for (let ilat = 0; ilat < nlatPerHemi; ilat += 1) {

        let radians = rangeMap(0, Math.PI/2 - radiansPerSlice, 0, nlatPerHemi - 1, ilat);

        const seed = new THREE.Vector3(radius * Math.cos(radians), radius * Math.sin(radians) + height/2, 0);

        seeds.push(seed)

    }

    console.log(seeds);

    const positions = [];

    for (let ilong = 0; ilong < nlong; ilong += 1) {
        

        const radians = rangeMap(0, Math.PI*2, 0, nlong - 1, ilong);

        const matrix = new THREE.Matrix4().makeRotationY(radians);

        for (let ilat = 0; ilat < nlat; ilat += 1) {
            
            const seed = seeds[ilat];

            const rotatedPosition = seed.clone().applyMatrix4(matrix);

            positions.push(rotatedPosition.x, rotatedPosition.y, rotatedPosition.z);


    
        }

    }

    positions.push(0, -5/3 * radius, 0);
    positions.push(0, 5/3 * radius, 0);

    
    
    const triangles = [];

    

    for (let ilong = 0; ilong < nlong; ilong++) {
        let nextLong = (ilong + 1) % nlong;
        for (let ilat = 0; ilat < nlat - 1; ilat++) {
            let nextLat = (ilat + 1) % nlat;
        
            
            triangles.push(index(nextLong,nlat,ilat))
            triangles.push(index(ilong,nlat,nextLat))
            triangles.push(index(ilong,nlat,ilat))

            
            triangles.push(index(nextLong,nlat,nextLat))
            triangles.push(index(ilong,nlat,nextLat))
            triangles.push(index(nextLong,nlat,ilat))

        
        }

    }  
    
    for (let ilong = 0; ilong < nlong; ilong += 1) {
        let nextLong = (ilong + 1) % nlong;
        triangles.push(index(ilong, nlat, 0))
        triangles.push(nlong * nlat)
        triangles.push(index(nextLong, nlat, 0))

        triangles.push(index(ilong, nlat, nlat - 1))
        triangles.push(index(nextLong, nlat, nlat - 1))
        triangles.push(nlong * nlat + 1)
    }

    
    return {positions, triangles}
}












function generateTorus(nlong, nlat, majRadius, minRadius) {
    
    const radiansPerSlice = Math.PI/nlat;
    
    const seeds = [];



    
    for (let ilat = 0; ilat < nlat; ilat += 1) {

        let radians = rangeMap(-1 * Math.PI + radiansPerSlice, Math.PI - radiansPerSlice, 0, nlat - 1, ilat);

        const seed = new THREE.Vector3(minRadius * Math.cos(radians) + majRadius , minRadius * Math.sin(radians), 0);

        seeds.push(seed)

    }


    const positions = [];

    for (let ilong = 0; ilong < nlong; ilong += 1) {
        

        const Radians = rangeMap(0, Math.PI*2, 0, nlong - 1, ilong);

        const matrix = new THREE.Matrix4().makeRotationY(Radians);

        for (let ilat = 0; ilat < nlat; ilat += 1) {
            
            const seed = seeds[ilat];

            const rotatedPosition = seed.clone().applyMatrix4(matrix);

            positions.push(rotatedPosition.x, rotatedPosition.y, rotatedPosition.z);


    
        }

    }

    

    
    
    const triangles = [];

    

    for (let ilong = 0; ilong < nlong; ilong++) {
        let nextLong = (ilong + 1) % nlong;
        for (let ilat = 0; ilat < nlat ; ilat++) {
            let nextLat = (ilat + 1) % nlat;
        
            
            triangles.push(index(nextLong,nlat,ilat))
            triangles.push(index(ilong,nlat,nextLat))
            triangles.push(index(ilong,nlat,ilat))

            
            triangles.push(index(nextLong,nlat,nextLat))
            triangles.push(index(ilong,nlat,nextLat))
            triangles.push(index(nextLong,nlat,ilat))

        
        }

    }  
    
    for (let ilong = 0; ilong < nlong; ilong += 1) {
        let nextLong = (ilong + 1) % nlong;
        triangles.push(index(ilong, nlat, 0))
        triangles.push(nlong * nlat)
        triangles.push(index(nextLong, nlat, 0))

        triangles.push(index(ilong, nlat, nlat - 1))
        triangles.push(index(nextLong, nlat, nlat - 1))
        triangles.push(nlong * nlat + 1)
    }

    return {positions, triangles};
    // return {positions: seeds.flatMap(seed => seed.toArray()), triangles};
    
}
















////spiral

function generateSpiral(nlong, nlat, majRadius, minRadius, liftPerStep) {
    
    const radiansPerSlice = Math.PI/nlat;
    
    const seeds = [];



    
    for (let ilat = 0; ilat < nlat; ilat += 1) {

        let radians = rangeMap(-1 * Math.PI + radiansPerSlice, Math.PI - radiansPerSlice, 0, nlat - 1, ilat);

        const seed = new THREE.Vector3(minRadius * Math.cos(radians) + majRadius , minRadius * Math.sin(radians), 0);

        seeds.push(seed)

    }


    const positions = [];

    let totalLift = 0

    for (let ilong = 0; ilong < nlong; ilong += 1) {
        
        totalLift += liftPerStep

        const Radians = rangeMap(0, Math.PI*2, 0, nlong - 1, ilong);

        const rotate = new THREE.Matrix4().makeRotationY(Radians);

        const translate = new THREE.Matrix4().makeTranslation(0, totalLift, 0);

        const matrix = rotate.multiply(translate);


        for (let ilat = 0; ilat < nlat; ilat += 1) {
            
            const seed = seeds[ilat];

            const rotatedPosition = seed.clone().applyMatrix4(matrix);

            positions.push(rotatedPosition.x, rotatedPosition.y, rotatedPosition.z);


    
        }

    }

    

    
    
    const triangles = [];

    

    for (let ilong = 0; ilong < nlong; ilong++) {
        let nextLong = (ilong + 1) % nlong;
        for (let ilat = 0; ilat < nlat ; ilat++) {
            let nextLat = (ilat + 1) % nlat;
        
            
            triangles.push(index(nextLong,nlat,ilat))
            triangles.push(index(ilong,nlat,nextLat))
            triangles.push(index(ilong,nlat,ilat))

            
            triangles.push(index(nextLong,nlat,nextLat))
            triangles.push(index(ilong,nlat,nextLat))
            triangles.push(index(nextLong,nlat,ilat))

        
        }

    }  
    
    for (let ilong = 0; ilong < nlong; ilong += 1) {
        let nextLong = (ilong + 1) % nlong;
        triangles.push(index(ilong, nlat, 0))
        triangles.push(nlong * nlat)
        triangles.push(index(nextLong, nlat, 0))

        triangles.push(index(ilong, nlat, nlat - 1))
        triangles.push(index(nextLong, nlat, nlat - 1))
        triangles.push(nlong * nlat + 1)
    }

    return {positions, triangles};
    // return {positions: seeds.flatMap(seed => seed.toArray()), triangles};
    
}





function generateStar(majorRadius, minorRadius) {

    

    const positions = [
        0, majorRadius, 0,
        -majorRadius, 0, 0,
        0, -majorRadius, 0,
        majorRadius, 0, 0,

        minorRadius, minorRadius, 0,
        -minorRadius, minorRadius, 0,
        -minorRadius, -minorRadius, 0,
        minorRadius, -minorRadius, 0,
        
        
    ];
    const triangles = [
        0,5,4,
        5,1,6,
        2,7, 6,
        4,7,3,
        5,6,7,
        5,7,4,
    ];
    return { positions, triangles };


    

}






function generatePlus(majorRadius, minorRadius) {

    

    const positions = [
        -1 * minorRadius, minorRadius + majorRadius, 0,
        -1 * minorRadius, minorRadius, 0,
        -1 * (minorRadius + majorRadius), minorRadius, 0,
        -1 * (minorRadius + majorRadius), -1 * minorRadius, 0,
        -1 * minorRadius, -1 * minorRadius, 0,
        -1 * minorRadius, -1 * (minorRadius + majorRadius), 0,
        minorRadius, -1 * (minorRadius + majorRadius), 0,
        minorRadius, -1 * minorRadius, 0,
        minorRadius + majorRadius, -1 * minorRadius, 0,
        minorRadius + majorRadius, minorRadius, 0,
        minorRadius, minorRadius, 0,
        minorRadius, minorRadius + majorRadius, 0,
        
        
    ];
    const triangles = [
        0, 1, 11, 
        11, 1, 10,
        2, 3, 1,
        1, 3, 4,
        1, 4, 10,
        10, 4, 7,
        10, 7, 9,
        9, 7, 8,
        4, 5, 7,
        7, 5, 6,
        
    ];
    return { positions, triangles };

}


function extrude(shape, axis){
    
    const positions = [
        ...shape.positions
        
    ];

    for (let positionCount = 0; positionCount < shape.positions.length; positionCount += 3){
        let x = shape.positions[positionCount + 0] + axis[0];
        let y = shape.positions[positionCount + 1] + axis[1];
        let z = shape.positions[positionCount + 2] + axis[2];
        positions.push(x, y, z);

    }

    const triangles = [
        ...shape.triangles
        
    ];

    for (let trianglesCount = 0; trianglesCount < shape.triangles.length; trianglesCount += 3){
        let x = shape.triangles[trianglesCount + 0] + shape.triangles.length;
        let y = shape.triangles[trianglesCount + 1] + shape.triangles.length;
        let z = shape.triangles[trianglesCount + 2] + shape.triangles.length;
        positions.push(x, y, z);

    }
    
    

    

    return {positions, triangles};

    
}



