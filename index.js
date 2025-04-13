// * Imports
import * as THREE from 'three';
import * as dat from 'dat.gui';
console.log(dat);

// * instantiate the dat.gui slider
const gui = new dat.GUI();
//console.log(gui);

const world = {
  plane: {
    width: 10,
    height: 10,
    widthSegments: 10,
    heightSegments: 10,
  },
};

// * gui sliders
gui.add(world.plane, 'height', 1, 500).onChange(generatePlane);
gui.add(world.plane, 'widthSegments', 1, 100).onChange(generatePlane);
gui.add(world.plane, 'heightSegments', 1, 100).onChange(generatePlane);

function generatePlane() {
  planeMesh.geometry.dispose();
  planeMesh.geometry = new THREE.PlaneGeometry(
    world.plane.width,
    world.plane.height,
    world.plane.widthSegments,
    world.plane.heightSegments
  );
}

// * ----- Scene, Camera & Renderer -----

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// * Set the camera position
camera.position.z = 5;

// * ----- create a plane geometry -----

const planeGeometry = new THREE.PlaneGeometry(5, 5, 5, 5);
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
light.position.set(1, 0, 1);
scene.add(light);

// * ----- Renderer -----
renderer.render(scene, camera);
