 
 /* API google map*/
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.650002, lng:  3.96667  },
    zoom: 8,
  });
}

/* image hover*/
/* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);
 /* mon object 3d evec three js*/
 const scene = new THREE.Scene(1)
 const renderer = new THREE.WebGLRenderer()
 const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.1, 1000)
 const geometry = new THREE.CylinderGeometry(3, 5, 20, 32)
 const material = new THREE.MeshBasicMaterial({ color:'#cylindre', wireframe: true })
 const cylinder = new THREE.Mesh(geometry, material)
 scene.add(cylinder)
 camera.position.z =60
 renderer.setSize(150,150)
 renderer.setClearColor(0xffffff,0);
 document.getElementById("cylindre").appendChild(renderer.domElement)           
 function animate() {
     cylinder.rotation.x += 0.0018
     cylinder.rotation.y += 0.02
     renderer.render(scene, camera)
     requestAnimationFrame(animate)
     
 }
 animate()
 jQuery(document).ready(function($){
  $('#example').DataTable({
    language: {
      lengthMenu: "T'en veux _MENU_ par page",
      info: "T'es bigleux ? c'est la page _PAGE_ sur _PAGES_",
      search: "Cherche bouffon !",
      paginate: {
        first:      "Premier",
        last:       "Précédent",
        next:       "Suivant",
        previous:   "Dernier"
      }
    }
  });
});