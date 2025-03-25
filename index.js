import * as THREE from 'three';

// * Create a scene
const scene = new THREE.Scene();

// * Create a camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// * Create a renderer
const renderer = new THREE.WebGLRenderer();

// * Set the size of the renderer (full screen)
renderer.setSize(window.innerWidth, window.innerHeight);
// * Set the pixel ratio of the renderer
// * This is used to render the scene at a higher resolution than the screen and then downscale it to the screen resolution
renderer.setPixelRatio(window.devicePixelRatio);

// * append the renderer to the body element
document.body.appendChild(renderer.domElement);

// * Set the camera position
camera.position.z = 10; // should be 5

// * ----- create a plane geometry -----

const planeGeometry = new THREE.PlaneGeometry(5, 5, 10, 10);
const planeMaterial = new THREE.MeshPhongMaterial({
  color: 0xff0000,
  side: THREE.DoubleSide,
  flatShading: true,
});
// * Create a mesh
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(planeMesh);

const { array } = planeMesh.geometry.attributes.position;

for (let i = 0; i < array.length; i += 3) {
  //console.log(array[i]);
  const x = array[i];
  const y = array[i + 1];
  const z = array[i + 2];

  array[i + 2] = z + Math.random();
}

planeMesh.geometry.attributes.position.needsUpdate = true;

// * Create a light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 0, 1);
scene.add(light);

// * Create a render function for animation (loops through the scene)
function animate() {
  requestAnimationFrame(animate);
  // * call the render function
  renderer.render(scene, camera);
}

// * call the animate function
animate();
