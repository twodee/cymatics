// import * as Tone from 'tone'

// Meshing and Points
function shadedMeshing() {
  geometry.setIndex(shape.triangles);
  const material = new THREE.MeshPhongMaterial({
      color: 'orange',
      shininess: 90,
   });
   const mesh = new THREE.Mesh(geometry, material);
   const light = new THREE.DirectionalLight(0xfffffff, 1);
   light.position.set(2, 2, 1);
   camera.add(light);
   scene.add(camera);
   scene.add(mesh);
  //  geometry.computeVertexNormals();
  //  const normals = new THREE.VertexNormalsHelper(mesh, 0.5, 0x00ff00, 1);
  //  scene.add(normals);
}

function pointing() {
  const material = new THREE.PointsMaterial({
    color: 'red',
    size: 0.5,
  });
  const points = new THREE.Points(geometry, material);
  scene.add(points);
}

// Create a rendering canvas that fills the window.
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a scene to hold all our shapes.
const scene = new THREE.Scene();

// Create a camera sitting at (0, 0, 15) and looking at (0, 0, 0).
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 80;




// Populate the scene with shapes.
let shape = graphCymatics(1, 1, 1);
const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(shape.positions), 3));
// Add "pointing();" for points and "shadedMeshing();" for triangles
// shadedMeshing();
geometry.setIndex(shape.triangles);
const material = new THREE.MeshPhongMaterial({
    color: 'orange',
    shininess: 90,
});
let mesh = new THREE.Mesh(geometry, material);
const light = new THREE.DirectionalLight(0xfffffff, 1);
light.position.set(2, 2, 1);
camera.add(light);
scene.add(camera);
scene.add(mesh);
geometry.computeVertexNormals();


// Adding Sliders
function surface() {
  scene.remove(mesh);

  const m = parseInt(mslider.value);
  const n = parseInt(nslider.value);
  const L = parseInt(Lslider.value);

  shape = graphCymatics(m, n, L);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(shape.positions), 3));
  // Add "pointing();" for points and "shadedMeshing();" for triangles
  // shadedMeshing();
  geometry.setIndex(shape.triangles);
  const material = new THREE.MeshPhongMaterial({
      color: 'orange',
      shininess: 90,
  });
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  geometry.computeVertexNormals();

}
const mslider = document.getElementById("mRange");
mslider.addEventListener('input', surface)

const nslider = document.getElementById("nRange");
nslider.addEventListener('input', surface);

const Lslider = document.getElementById("LRange");
Lslider.addEventListener('input', surface);




// Creating Sound
function sound() {
  const sampler = new Tone.Sampler({
    urls: {
      "C4": "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(shape.frequency, 4);
  })
}
const play = document.getElementById("button");
play.addEventListener('click', sound);





// Render the scene.
renderer.render(scene, camera);





 // Create a trackball
 const controls = new THREE.TrackballControls(camera, renderer.domElement);
 controls.rotateSpeed = 2;
 function animate() {
   controls.update();
   renderer.render(scene, camera);
   requestAnimationFrame(animate);
 }
 animate();