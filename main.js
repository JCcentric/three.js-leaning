import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


//Create a scene always first
const scene = new THREE.Scene();

//Perspective camera(FOV in degrees, aspect ration width of element/height, near clipping pane, far clipping plane which helps with performance)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 50;

//Renderer setup  
const renderer = new THREE.WebGLRenderer();


/* 
For performance intensive apps, you can also give setSize smaller values, like window.innerWidth/2 and window.innerHeight/2, which will make the app render at quarter size.

If you wish to keep the size of your app but render it at a lower resolution, you can do so by calling setSize with false as updateStyle (the third argument). For example, setSize(window.innerWidth/2, window.innerHeight/2, false) will render your app at half resolution, given that your <canvas> has 100% width and height.

Last but not least, we add the renderer element to our HTML document. This is a <canvas> element the renderer uses to display the scene to us.
*/
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0xffffff);
document.body.appendChild(renderer.domElement);




//Adding and Animiating a cube
/* To create a cube, we need a BoxGeometry. This is an object that contains all the points (vertices) and fill (faces) of the cube. 

In addition to the geometry, we need a material to color it. Three.js comes with several materials, but we'll stick to the MeshBasicMaterial for now. All materials take an object of properties which will be applied to them.

The third thing we need is a Mesh. A mesh is an object that takes a geometry, and applies a material to it, which we then can insert to our scene, and move freely around.

By default, when we call scene.add(), the thing we add will be added to the coordinates (0,0,0). This would cause both the camera and the cube to be inside each other. To avoid this, we simply move the camera out a bit by adding z: 5 to its position.
*/
const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
const material = new THREE.MeshDepthMaterial();
const torus = new THREE.Mesh( geometry, material );


scene.add( torus );




//Render the scene
function animate() {
    torus.rotation.y += 0.01;
    torus.rotation.x += 0.01;
    renderer.render( scene, camera );
}

renderer.setAnimationLoop ( animate );