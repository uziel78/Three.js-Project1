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

// * tests
console.log(scene);
console.log(camera);
console.log(renderer);

// * Set the size of the renderer (full screen)
renderer.setSize(window.innerWidth, window.innerHeight);
// * Set the pixel ratio of the renderer
// * This is used to render the scene at a higher resolution than the screen and then downscale it to the screen resolution
renderer.setPixelRatio(window.devicePixelRatio);

// * append the renderer to the body element
document.body.appendChild(renderer.domElement);

// * Create a box
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
// * Create a material
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

console.log(boxGeometry);
console.log(material);

// * Create a mesh using the box geometry and material
const mesh = new THREE.Mesh(boxGeometry, material);

console.log(mesh);

// * Add the mesh to the scene
scene.add(mesh);

// * Set the camera position
camera.position.z = 5;

// * Create a render function for animation (loops through the scene)
function animate() {
  requestAnimationFrame(animate);
  // * call the render function
  renderer.render(scene, camera);
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
}

// * call the render function (only displays the scene once outside the animate function)
// renderer.render(scene, camera);

// * call the animate function
animate();
