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

// * call the render function
renderer.render(scene, camera);
