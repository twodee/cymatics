// Create a rendering canvas that fills the window.
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor('white');
document.body.appendChild(renderer.domElement);

// Create a scene to hold all our shapes.
const scene = new THREE.Scene();

// Create a camera sitting at (0, 0, 15) and looking at (0, 0, 0).
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 15;

// Populate the scene with shapes.




// const shape = generateSquareDonut();

// const geometry = new THREE.BufferGeometry();
// geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(shape.positions), 3));
// geometry.setIndex(shape.triangles);

// const material = new THREE.MeshBasicMaterial({
//     color: 'orange',
// });

// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);



// const shape = generateCube();

// const geometry = new THREE.BufferGeometry();
// geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(shape.positions), 3));
// geometry.setIndex(shape.triangles);

// const separatedGeometry = geometry.toNonIndexed();

// geometry.computeVertexNormals();

// const material = new THREE.MeshPhongMaterial({
//   color: 'orange',
//   shininess: 90,
// });

// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.position.set(2, 2, 1);
// camera.add(light);
// scene.add(camera);

// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// const normals = new THREE.VertexNormalsHelper(mesh, 0.5, 0x00ff00, 1);
// scene.add(normals);


//GRIIIID
// const shape = generateGrid(4, 5, 4, 5);

// const geometry = new THREE.BufferGeometry();
// geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(shape.positions), 3));


// geometry.setIndex(shape.triangles);

// const material = new THREE.MeshBasicMaterial({
//     color: 'orange',
// });

// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);



// const pointmaterial = new THREE.PointsMaterial({
//   color: 'red',
//   size: 0.5,
// });
// const points = new THREE.Points(geometry, pointmaterial);
// scene.add(points);





const shape = generateTerrain(20, 20, 20, 20, 25);

const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(shape.positions), 3));


geometry.setIndex(shape.triangles);

const material = new THREE.MeshBasicMaterial({
    color: 'orange',
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);





const pointmaterial = new THREE.PointsMaterial({
  color: 'red',
  size: 0.5,
});
const points = new THREE.Points(geometry, pointmaterial);
scene.add(points);







// const shape = generateRipple(4, 5, 4, 5, 5, 4);

// const geometry = new THREE.BufferGeometry();
// geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(shape.positions), 3));


// geometry.setIndex(shape.triangles);

// const material = new THREE.MeshBasicMaterial({
//     color: 'orange',
// });

// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);



// const pointmaterial = new THREE.PointsMaterial({
//   color: 'red',
//   size: 0.5,
// });
// const points = new THREE.Points(geometry, pointmaterial);
// scene.add(points);






//RIPPLE
// const shape = generateRipple(10, 10, 10, 10, 10, 3);

// const geometry = new THREE.BufferGeometry();
// geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(shape.positions), 3));


// // geometry.setIndex(shape.triangles);

// // const material = new THREE.MeshBasicMaterial({
// //     color: 'orange',
// // });

// // const mesh = new THREE.Mesh(geometry, material);
// // scene.add(mesh);



// const pointmaterial = new THREE.PointsMaterial({
//   color: 'red',
//   size: 0.5,
// });
// const points = new THREE.Points(geometry, pointmaterial);
// scene.add(points);




//CYLINDER
// const shape = generateCylinder(90, 90, 4, 2);

// const geometry = new THREE.BufferGeometry();
// geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(shape.positions), 3));


// geometry.setIndex(shape.triangles);

// const material = new THREE.MeshPhongMaterial({
//     color: 'orange',
// });

// const separatedGeometry = geometry.toNonIndexed();

// separatedGeometry.computeVertexNormals();

// const mesh = new THREE.Mesh(separatedGeometry, material);
// scene.add(mesh);

// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.position.set(2, 2, 1);
// camera.add(light);
// scene.add(camera);

// const pointmaterial = new THREE.PointsMaterial({
//   color: 'red',
//   size: 0.5,
// });
// const points = new THREE.Points(geometry, pointmaterial);
// scene.add(points);








// const normals = new THREE.VertexNormalsHelper(mesh, 0.5, 0x00ff00, 1);
// scene.add(normals);







// const shape = generateCircle(90);

// const geometry = new THREE.BufferGeometry();
// geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(shape.positions), 3));
// geometry.setIndex(shape.triangles);

// const material = new THREE.MeshBasicMaterial({
//     color: 'orange',
// });

// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);


// const shape = generateCone(90);

// const geometry = new THREE.BufferGeometry();
// geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(shape.positions), 3));
// geometry.setIndex(shape.triangles);

// const material = new THREE.MeshBasicMaterial({
//     color: 'orange',
// });

// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);











// mesh.rotation.y = 0.0;

// function animate() {
//     mesh.rotation.y += 0.01;
//     renderer.render(scene, camera);
//     requestAnimationFrame(animate);
// }
  
// animate();







// const shape = rangeMap(10,20,2,40,15);






// const shape = generateVee(100);

// const geometry = new THREE.BufferGeometry();
// geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(shape.positions), 3));


// geometry.setIndex(shape.triangles);

// const material = new THREE.MeshPhongMaterial({
//     color: 'orange',
// });

// const separatedGeometry = geometry.toNonIndexed();

// separatedGeometry.computeVertexNormals();

// const mesh = new THREE.Mesh(separatedGeometry, material);
// scene.add(mesh);

// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.position.set(2, 2, 1);
// camera.add(light);
// scene.add(camera);

// const pointmaterial = new THREE.PointsMaterial({
//   color: 'red',
//   size: 0.5,
// });
// const points = new THREE.Points(geometry, pointmaterial);
// scene.add(points);







// const shape = generateSphere(100, 100, 3);

// const geometry = new THREE.BufferGeometry();
// geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(shape.positions), 3));


// geometry.setIndex(shape.triangles);

// const material = new THREE.MeshPhongMaterial({
//     color: 'orange',
// });

// const separatedGeometry = geometry.toNonIndexed();

// separatedGeometry.computeVertexNormals();

// const mesh = new THREE.Mesh(separatedGeometry, material);
// scene.add(mesh);

// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.position.set(2, 2, 1);
// camera.add(light);
// scene.add(camera);

// const pointmaterial = new THREE.PointsMaterial({
//   color: 'red',
//   size: 0.5,
// });
// const points = new THREE.Points(geometry, pointmaterial);
// scene.add(points);








// const shape = generateCapsule(100, 100, 3, 4);

// const geometry = new THREE.BufferGeometry();
// geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(shape.positions), 3));


// geometry.setIndex(shape.triangles);

// const material = new THREE.MeshPhongMaterial({
//     color: 'orange',
// });

// const separatedGeometry = geometry.toNonIndexed();

// separatedGeometry.computeVertexNormals();

// const mesh = new THREE.Mesh(separatedGeometry, material);
// scene.add(mesh);

// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.position.set(2, 2, 1);
// camera.add(light);
// scene.add(camera);

// const pointmaterial = new THREE.PointsMaterial({
//   color: 'red',
//   size: 0.5,
// });
// const points = new THREE.Points(geometry, pointmaterial);
// scene.add(points);









// const shape = generateTorus(50, 50, 2, 1);

// const geometry = new THREE.BufferGeometry();
// geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(shape.positions), 3));


// geometry.setIndex(shape.triangles);

// const material = new THREE.MeshPhongMaterial({
//     color: 'orange',
// });

// const separatedGeometry = geometry.toNonIndexed();

// separatedGeometry.computeVertexNormals();

// const mesh = new THREE.Mesh(separatedGeometry, material);
// scene.add(mesh);

// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.position.set(2, 2, 1);
// camera.add(light);
// scene.add(camera);

// const pointmaterial = new THREE.PointsMaterial({
//   color: 'red',
//   size: 0.5,
// });
// const points = new THREE.Points(geometry, pointmaterial);
// scene.add(points);












// const shape = generateSpiral(50, 50, 2, 1, 0.5);

// const geometry = new THREE.BufferGeometry();
// geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(shape.positions), 3));


// geometry.setIndex(shape.triangles);

// const material = new THREE.MeshPhongMaterial({
//     color: 'orange',
// });

// const separatedGeometry = geometry.toNonIndexed();

// separatedGeometry.computeVertexNormals();

// const mesh = new THREE.Mesh(separatedGeometry, material);
// scene.add(mesh);

// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.position.set(2, 2, 1);
// camera.add(light);
// scene.add(camera);

// const pointmaterial = new THREE.PointsMaterial({
//   color: 'red',
//   size: 0.5,
// });
// const points = new THREE.Points(geometry, pointmaterial);
// scene.add(points);






// const shape = generateStar(3, 1);

// const geometry = new THREE.BufferGeometry();
// geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(shape.positions), 3));
// geometry.setIndex(shape.triangles);

// const material = new THREE.MeshBasicMaterial({
//     color: 'orange',
// });

// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);



// const shape = generatePlus(3, 1);

// const geometry = new THREE.BufferGeometry();
// geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(shape.positions), 3));
// geometry.setIndex(shape.triangles);

// const material = new THREE.MeshBasicMaterial({
//     color: 'orange',
// });

// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);




// const eshape = extrude(shape, [0, 0, -1]);

// const geometry = new THREE.BufferGeometry();
// geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(eshape.positions), 3));
// // geometry.setIndex(shape.triangles);

// const material = new THREE.MeshBasicMaterial({
//     color: 'orange',
// });

// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// const pointmaterial = new THREE.PointsMaterial({
//   color: 'red',
//   size: 0.5,
// });
// const points = new THREE.Points(geometry, pointmaterial);
// scene.add(points);









const controls = new THREE.TrackballControls(camera, renderer.domElement);
controls.rotateSpeed = 2;
function animate() {
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();

// Render the scene.
renderer.render(scene, camera);


  