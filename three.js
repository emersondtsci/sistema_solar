import * as THREE from 'three';

const scene = new THREE.Scene(); // criar a cena
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // configurar a camera
const renderer = new THREE.WebGLRenderer(); 


renderer.setSize( window.innerWidth, window.innerHeight ); // configurar o renderizador
socument.body.appendChild( renderer.domElement);


const geometry = new THREE.BoxGeometry(1,1,1); // objeto 
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); // cor do cubo
const cube = new THREE.Mesh( geometry, material ); // criar o cubo
scene.add(cube) // adicionar o cubo a cena

camera.position.z = 5; 
// Adicione mais código Three.js para criar objetos 3D, luzes, câmeras, etc.

// Adicione a cena ao DOM
//document.body.appendChild(renderer.domElement);

// Renderizando a cena
function animate() {
  requestAnimationFrame(animate);

  // Adicione lógica de animação aqui
  renderer.render(scene, camera);
}

animate();
