import './main.css';

import * as Three from 'three';

// Canvas
let canvas: HTMLCanvasElement | null = document.querySelector('canvas.webgl');

if (!canvas) throw new Error('canvas.webgl does not exist.');

// Scene
let scene = new Three.Scene();

// Object
let geometry = new Three.BoxGeometry(1, 1, 1);
let material = new Three.MeshBasicMaterial({
	color: 0xff0000,
});
let mesh = new Three.Mesh(geometry, material);
scene.add(mesh);

// Sizes
let sizes = {
	width: 788,
	height: 600,
};

// Camera
let camera = new Three.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
let renderer = new Three.WebGLRenderer({
	canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
