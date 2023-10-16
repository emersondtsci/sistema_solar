// Importando as bibliotecas necessárias
import * as THREE from 'three';
import Decimal from 'decimal.js';

// Define a precisão para 5 casas decimais e o modo de arredondamento para 2 (arredondamento para cima)
Decimal.set({ precision: 5, rounding: 2 }); 

// Construindo a cena
const scene = new THREE.Scene();

// Criando a câmera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);

// Inclinar a câmera 
camera.rotation.x = Math.PI / 6; // Incline a câmera em 30 graus

// Posição inicial da câmera
camera.position.set(20, -400, 400);

// Construindo o renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Criar um objeto de textura de estrelas
const textureLoader = new THREE.TextureLoader();
const textura_estrela = textureLoader.load('Stars_texture.jpg'); 

// Definir o material que vai usar a textura de estrelas
const material_estrela = new THREE.MeshBasicMaterial({ map: textura_estrela, side: THREE.BackSide });

// Criar um objeto skybox para as estrelas
const geometria_estrela = new THREE.SphereGeometry(800, 60, 40); // Ajuste o raio conforme necessário
const estrela = new THREE.Mesh(geometria_estrela, material_estrela);

// Adicionar o skybox à cena
scene.add(estrela);

// CRIANDO AS FIGURAS GEOMÉTRICAS 
// Para fins de representação, o tamanho dos planetas são os mesmos
const geometry_sol      = new THREE.SphereGeometry(15, 32, 32);
const geometry_mercurio = new THREE.SphereGeometry(10, 32, 32);
const geometry_venus    = new THREE.SphereGeometry(10, 32, 32);
const geometry_terra    = new THREE.SphereGeometry(10, 32, 32);
const geometry_marte    = new THREE.SphereGeometry(10, 32, 32);
const geometry_jupiter  = new THREE.SphereGeometry(10, 32, 32);
const geometry_saturno  = new THREE.SphereGeometry(10, 32, 32);
const geometry_urano    = new THREE.SphereGeometry(10, 32, 32);
const geometry_netuno   = new THREE.SphereGeometry(10, 32, 32);

//Criando materiais para as esferas
const material_sol      = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('sol.BMP') });
const material_mercurio = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('mercurio.BMP') });
const material_venus    = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('venus.BMP') });
const material_terra    = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('terra.BMP') });
const material_marte    = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('marte.BMP') });
const material_jupiter  = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('jupiter.BMP') });
const material_saturno  = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('saturno.BMP') });
const material_urano    = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('urano.BMP') });
const material_netuno   = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('netuno.BMP') });

const sol      = new THREE.Mesh(geometry_sol,      material_sol );
const mercurio = new THREE.Mesh(geometry_mercurio, material_mercurio);
const venus    = new THREE.Mesh(geometry_venus,    material_venus);
const terra    = new THREE.Mesh(geometry_terra,    material_terra);
const marte    = new THREE.Mesh(geometry_marte,    material_marte);
const jupiter  = new THREE.Mesh(geometry_jupiter,  material_jupiter);
const saturno  = new THREE.Mesh(geometry_saturno,  material_saturno);
const urano    = new THREE.Mesh(geometry_urano,    material_urano);
const netuno   = new THREE.Mesh(geometry_netuno,   material_netuno);

//Adiconando a cena
scene.add(sol);
scene.add(mercurio);
scene.add(venus);
scene.add(terra);
scene.add(marte);
scene.add(jupiter);
scene.add(saturno);
scene.add(urano);
scene.add(netuno);

// Crie os anéis de Saturno (anel toroidal)
const torusGeometry = new THREE.TorusGeometry(12, 1, 2, 100);
const torusMaterial = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('anelsaturno.BMP') });
const saturnRings = new THREE.Mesh(torusGeometry, torusMaterial);
scene.add(saturnRings);

// Posicione os planetas em suas órbitas
sol.position.x = 0; 
mercurio.position.x = 40; 
venus.position.x = 60; 
terra.position.x = 80;
marte.position.x = 100; 
jupiter.position.x = 120; 
saturno.position.x = 140;
saturnRings.position.x = 140; 
urano.position.x = 160; 
netuno.position.x = 180; 

// Velocidade e raio de translação de mercurio
const raio_orbita_mercurio = 40;
const velocidade_orbita_mercurio = 0.00107;
// Crie uma geometria para a linha de órbita de mercurio
const orbita_mercurio = new THREE.BufferGeometry().setFromPoints([]);
const orbita_material_mercurio = new THREE.LineBasicMaterial({ color: 0xffffff });
const orbita_linha_mercurio = new THREE.Line(orbita_mercurio, orbita_material_mercurio);
scene.add(orbita_linha_mercurio);

// Velocidade e raio de translação de venus
const raio_orbita_venus = 60;
const velocidade_orbita_venus = 0.000611;
// Crie uma geometria para a linha de órbita da venus
const orbita_venus = new THREE.BufferGeometry().setFromPoints([]);
const orbita_material_venus = new THREE.LineBasicMaterial({ color: 0xffffff });
const orbita_linha_venus = new THREE.Line(orbita_venus, orbita_material_venus);
scene.add(orbita_linha_venus);

// Velocidade e raio de translação da terra
const raio_orbita_terra = 80;
const velocidade_orbita_terra = 0.0001670;
// Crie uma geometria para a linha de órbita da terra
const orbita_terra = new THREE.BufferGeometry().setFromPoints([]);
const orbita_material_terra = new THREE.LineBasicMaterial({ color: 0xffffff });
const orbita_linha_terra = new THREE.Line(orbita_terra, orbita_material_terra);
scene.add(orbita_linha_terra);

// Velocidade e raio de translação de marte
const raio_orbita_marte = 100;
const velocidade_orbita_marte = 0.0001720;
// Crie uma geometria para a linha de órbita da marte
const orbita_marte = new THREE.BufferGeometry().setFromPoints([]);
const orbita_material_marte = new THREE.LineBasicMaterial({ color: 0xffffff });
const orbita_linha_marte = new THREE.Line(orbita_marte, orbita_material_marte);
scene.add(orbita_linha_marte);

// Velocidade e raio de translação de jupiter
const raio_orbita_jupiter = 120;
const velocidade_orbita_jupiter = 0.00028220;
// Crie uma geometria para a linha de órbita da jupiter
const orbita_jupiter = new THREE.BufferGeometry().setFromPoints([]);
const orbita_material_jupiter = new THREE.LineBasicMaterial({ color: 0xffffff });
const orbita_linha_jupiter = new THREE.Line(orbita_jupiter, orbita_material_jupiter);
scene.add(orbita_linha_jupiter);

// Velocidade e raio de translação de saturno
const raio_orbita_saturno = 140;
const velocidade_orbita_saturno = 0.00021354;
// Crie uma geometria para a linha de órbita da saturno
const orbita_saturno = new THREE.BufferGeometry().setFromPoints([]);
const orbita_material_saturno = new THREE.LineBasicMaterial({ color: 0xffffff });
const orbita_linha_saturno = new THREE.Line(orbita_saturno, orbita_material_saturno);
scene.add(orbita_linha_saturno);
// Aneis de saturno
const orbita_saturnRings = new THREE.BufferGeometry().setFromPoints({});
scene.add(orbita_saturnRings);

// Velocidade e raio de translação de urano
const raio_orbita_urano = 160;
const velocidade_orbita_urano = 0.000468;
// Crie uma geometria para a linha de órbita da urano
const orbita_urano = new THREE.BufferGeometry().setFromPoints([]);
const orbita_material_urano = new THREE.LineBasicMaterial({ color: 0xffffff });
const orbita_linha_urano = new THREE.Line(orbita_urano, orbita_material_urano);
scene.add(orbita_linha_urano);

// Velocidade e raio de translação de netuno
const raio_orbita_netuno = 180;
const velocidade_orbita_netuno = 0.0000934;
// Crie uma geometria para a linha de órbita da netuno
const orbita_netuno = new THREE.BufferGeometry().setFromPoints([]);
const orbita_material_netuno = new THREE.LineBasicMaterial({ color: 0xffffff });
const orbita_linha_netuno = new THREE.Line(orbita_netuno, orbita_material_netuno);
scene.add(orbita_linha_netuno);

// Pontos para translação
const points_mercurio = [];
const points_venus = [];
const points_terra = [];
const points_marte = [];
const points_jupiter = [];
const points_saturno = [];
const points_urano = [];
const points_netuno = [];

// Mantenha o controle do fator de zoom
let zoomFactor = 1;

// Função para dar zoom no ponto do mouse
function zoomToPoint(mouseX, mouseY, zoomIn) {
  const canvas = renderer.domElement;
  const rect = canvas.getBoundingClientRect();
  const x = ((mouseX - rect.left) / rect.width) * 2 - 1;
  const y = -((mouseY - rect.top) / rect.height) * 2 + 1;
  const zoomAmount = zoomIn ? 1.1 : 0.9; 

  camera.position.z /= zoomFactor;
  zoomFactor *= zoomAmount;
  camera.position.z *= zoomFactor;

  camera.position.x = x * (camera.position.z / 2);
  camera.position.y = y * (camera.position.z / 2);
}

// Lidar com eventos de scroll para zoom
document.addEventListener('wheel', (e) => {
  e.preventDefault(); // Impedir o comportamento padrão de rolagem da página
  const zoomIn = e.deltaY < 0; // Verificar se está rolando para cima (zoom in) ou para baixo (zoom out)
  zoomToPoint(e.clientX, e.clientY, zoomIn);
});

function animate() {
  requestAnimationFrame(animate);
	
	// Lógica de rotação do Sol
	sol.rotation.y += 0.01;

	// Atualiza a posição de Mercurio ao redor do Sol para criar a translação
	mercurio.position.x = raio_orbita_mercurio * Math.cos( velocidade_orbita_mercurio * Date.now())
	mercurio.position.y = raio_orbita_mercurio * Math.sin( velocidade_orbita_mercurio * Date.now())
	// Atualiza a geometria da linha para seguir a posição de Mecurio
	points_mercurio.push(new THREE.Vector3(mercurio.position.x, mercurio.position.y, 0));
	orbita_linha_mercurio.geometry.setFromPoints(points_mercurio);
	// Lógica de rotação de mercurio
	mercurio.rotation.y += 0.015;
	
	// Atualiza a posição de venus ao redor do Sol para criar a translação
	venus.position.x = raio_orbita_venus * Math.cos( velocidade_orbita_venus * Date.now())
	venus.position.y = raio_orbita_venus * Math.sin( velocidade_orbita_venus * Date.now())
	// Atualiza a geometria da linha para seguir a posição de Venus
	points_venus.push(new THREE.Vector3(venus.position.x, venus.position.y, 0));
	orbita_linha_venus.geometry.setFromPoints(points_venus);
	// Lógica de rotação de mercurio
	venus.rotation.y += 0.008;

	// Atualiza a posição da Terra ao redor do Sol para criar a translação
	terra.position.x = raio_orbita_terra * Math.cos(velocidade_orbita_terra * Date.now());
	terra.position.y = raio_orbita_terra * Math.sin(velocidade_orbita_terra * Date.now());
	// Atualiza a geometria da linha para seguir a posição da Terra
	points_terra.push(new THREE.Vector3(terra.position.x, terra.position.y, 0));
	orbita_linha_terra.geometry.setFromPoints(points_terra);
	// Lógica de rotação da terra
	terra.rotation.y += 0.0012;
	
	
	// Atualiza a posição de Marte ao redor do Sol para criar a translação
	marte.position.x = raio_orbita_marte * Math.cos(velocidade_orbita_marte * Date.now());
	marte.position.y = raio_orbita_marte * Math.sin(velocidade_orbita_marte * Date.now());
	// Atualiza a geometria da linha para seguir a posição de Marte
	points_marte.push(new THREE.Vector3(marte.position.x, marte.position.y, 0));
	orbita_linha_marte.geometry.setFromPoints(points_marte);
	// Lógica de rotação da marte
	marte.rotation.y += 0.09;
	
	// Atualiza a posição de Jupiter ao redor do Sol para criar a translação
	jupiter.position.x = raio_orbita_jupiter * Math.cos(velocidade_orbita_jupiter * Date.now());
	jupiter.position.y = raio_orbita_jupiter * Math.sin(velocidade_orbita_jupiter * Date.now());
	// Atualiza a geometria da linha para seguir a posição da Jupiter
	points_jupiter.push(new THREE.Vector3(jupiter.position.x, jupiter.position.y, 0));
	orbita_linha_jupiter.geometry.setFromPoints(points_jupiter);
	// Lógica de rotação da terra
	jupiter.rotation.y += 0.025;
	
	// Atualiza a posição de Saturno ao redor do Sol para criar a translação
	saturno.position.x = raio_orbita_saturno * Math.cos(velocidade_orbita_saturno * Date.now());
	saturno.position.y = raio_orbita_saturno * Math.sin(velocidade_orbita_saturno * Date.now());
	// Atualiza a geometria da linha para seguir a posição da Terra
	points_saturno.push(new THREE.Vector3(saturno.position.x, saturno.position.y, 0));
	orbita_linha_saturno.geometry.setFromPoints(points_saturno);
	//Aneis de saturno
	saturnRings.position.x = raio_orbita_saturno * Math.cos(velocidade_orbita_saturno * Date.now());
	saturnRings.position.y = raio_orbita_saturno * Math.sin(velocidade_orbita_saturno * Date.now());
	// Lógica dos aneis de saturno
	saturno.rotation.y += 0.02;
	saturnRings.rotation.y = saturno.rotation.y;
	
	// Atualiza a posição de Urano ao redor do Sol para criar a translação
	urano.position.x = raio_orbita_urano * Math.cos(velocidade_orbita_urano * Date.now());
	urano.position.y = raio_orbita_urano * Math.sin(velocidade_orbita_urano * Date.now());
	// Atualiza a geometria da linha para seguir a posição da Terra
	points_urano.push(new THREE.Vector3(urano.position.x, urano.position.y, 0));
	orbita_linha_urano.geometry.setFromPoints(points_urano);
	// Lógica de rotação da terra
	urano.rotation.y += 0.0015;
	
	// Atualiza a posição de Netuno ao redor do Sol para criar a translação
	netuno.position.x = raio_orbita_netuno * Math.cos(velocidade_orbita_netuno * Date.now());
	netuno.position.y = raio_orbita_netuno * Math.sin(velocidade_orbita_netuno * Date.now());
	// Atualiza a geometria da linha para seguir a posição da Terra
	points_netuno.push(new THREE.Vector3(netuno.position.x, netuno.position.y, 0));
	orbita_linha_netuno.geometry.setFromPoints(points_netuno);
	// Lógica de rotação da terra
	netuno.rotation.y += 0.0005;
	
	// Lógica de rotação do plano de fundo de estrelas
	estrela.rotation.x += 0.0005;
	estrela.rotation.y += 0.0005;
  
  renderer.render(scene, camera);
}

animate();
