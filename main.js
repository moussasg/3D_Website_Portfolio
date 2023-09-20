//npm install 'three' est une commande utilisée pour installer 
//library JavaScript appelée "Three.js".  bibliothèque js
//pour création d'animations et de rendus 3D dans les navigateurs web.
import './index.css' 
import * as THREE from 'three' // we have 3 Setups in THREE.js :  1)scene + 2)camera + 3)'render' le scence+camera)
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls" // function pour tourner objet en 3d
// Setup : we put scence+camera inside render
const scene = new THREE.Scene() // 1)Scene = container  / S majuscule Scene : we put inside renderer
const camera = new THREE.PerspectiveCamera(75 ,window.innerWidth/window.innerHeight , 0.1 ,1000) // we put inside render + OrbitControls pour activé mode OrbitControls 3d 
//75 filed of vision  + 2eme argument = ration + 3eme argument = view frustum(view of near ,top,right)
const renderer = new THREE.WebGLRenderer({ //GLR majuscule : Web Graphics Library : API de bas niveau basée sur OpenGL (Open Graphics Library) utilisée dans les navigateurs web modernes. rendus 3D 
    canvas:document.querySelector('#bg') // canvas i have defined at index.html , bg = background // 
})
    camera.position.setZ(30)
    camera.position.setX(-3)
renderer.render(scene,camera)
renderer.setPixelRatio(window.devicePixelRatio)//'résolution' de sortie en fonction de la résolution de l'écran,
renderer.setSize(window.innerWidth , window.innerHeight)//la taille de la 'zone' de rendu en fonction de la taille de la fenêtre du navigateur,
/// we need to create objetcts with 3 steps :  1)geometry {x,y,z} to make shape=forme
//2) material : wrapping paper for an object(comment la surface de l'objet réagit à la lumière) / 3) Mesh : objet graphique fondamental pour représenter des objets '3D' complexes dans une scène
// Torus = premier Object
const geometry = new THREE.TorusGeometry(10,3,16,100) // geometry x,y,z
const material = new THREE.MeshStandardMaterial({color:0x333333}) //comment la surface de l'objet réagit à la lumière
// we put geometry + material in Mesh
const torus = new THREE.Mesh(geometry , material)//put inside scene.add 
//Scenes allow you to set up what? and where? is to be rendered by three.js
scene.add(torus)
// for lights
const pointLight = new THREE.PointLight(0xffffff)//put inside scene.add 
const ambientLight = new THREE.AmbientLight(0xffffff);//put inside scene.add 
pointLight.position.set(20,20,20)
scene.add(pointLight ,ambientLight)
/// we put controls inside function animate 
const controls = new OrbitControls(camera , renderer.domElement) // importé au début , function OrbitControls pour tourné obj en 3D
controls.enableZoom = false;
// for background we put spaceTexture inside scene.background
const imgfuse = document.getElementById('myfuse'); // myfuse jbtha m index.html
const imgreet = document.getElementById('mygreet'); // myfuse jbtha m index.html
const spaceTexture = new THREE.TextureLoader().load(imgreet.src)
scene.background = spaceTexture 
// for adding rotations
function animate() {
    requestAnimationFrame( animate );
    torus.rotation.x += 0.03
    torus.rotation.y += 0.03
    torus.rotation.z +=  0.03
    controls.update()
    renderer.render(scene , camera);
}
animate()
/// cuebe insidde du torus
const sarokh = new THREE.TextureLoader().load(imgfuse.src) // put sarokhe inside cube
const cube = new THREE.Mesh( // put the cube inside 
    new THREE.BoxGeometry(4,4,4),
    new THREE.MeshBasicMaterial({map:sarokh})
)
scene.add(cube)
/// to scrolling 
// Crée un observateur pour surveiller un élément spécifique
const observer = new IntersectionObserver((entr)=> {
    entr.forEach((entr) => {
        if (entr.isIntersecting) {
                  // L'élément has entred in show visible area
            entr.target.classList.add('show')
        } else { // is not visible
            //L'élément has closed for visible area
            entr.target.classList.remove('show') // show dans i put opacity 1 
        }
    })
}) 
/// hidden in css with opacity 0
const hidenelement = document.querySelectorAll('.hidden') // select all hidden class in header in index.html
// Commence l'observation
hidenelement.forEach((el)=>observer.observe(el)) // observe all hiddenelement
/// to animation 
const sectionacomp = document.querySelectorAll('.sectionacompli')
sectionacomp.forEach((xi)=>observer.observe(xi))

const mypresent = document.querySelectorAll('.mypresent')
mypresent.forEach((dr)=>observer.observe(dr))

const bloc = document.querySelectorAll('.bloc')
bloc.forEach((si)=>observer.observe(si))

const sectionskills = document.querySelectorAll('.sectionskills')
sectionskills.forEach((li)=>observer.observe(li))
/// to scrolling
const myclique = document.getElementById('myeduc'); // byId direct sans . / dans class dire . 
myclique.addEventListener('click' , () => {
const refelem = document.getElementById('goeduc');
refelem.scrollIntoView({ behavior: 'smooth' }) 
})
const myskils = document.getElementById('myskils');
myskils.addEventListener('click' , () => {
const refskils = document.getElementById('goskils');
refskils.scrollIntoView({ behavior: 'smooth' }) 
})
const myacomp = document.getElementById('myacomp');
myacomp.addEventListener('click' , () => {
const refacomp = document.getElementById('goacomp');
refacomp.scrollIntoView({ behavior: 'smooth' }) 
})
//
const mydip = document.querySelectorAll('.showme');
mydip.forEach(mydip=> {
mydip.addEventListener('click' , () => {
const refdip = document.querySelector('.showcert');
refdip.scrollIntoView({ behavior: 'smooth' }) 
})
})
  




