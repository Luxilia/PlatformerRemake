/**
 * 
 */
var ground_material;
function generateLevel4(){
	
	  ambientLight = new THREE.AmbientLight(0xffffff);
	  scene.add(ambientLight);
	  floorTexture = textureArray['stones1']
	  roofTexture = textureArray['dirt2']
	  wallTexture = textureArray['dirt1']
	
	var map1 = [
		               [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
			            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
			            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
			            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
			            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
			            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
			            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
			            [2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2],
			            [2, 1, 1, 1, 1, 1, 1, 21, 12, 2, 1, 1, 1, 1, 1, 1, 2],
			            [2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2],
			            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
			            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
			            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
			            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
			            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
			            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 28, 2],
			            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		               ];
	


	var map2 = [
	            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
		            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
		            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
		            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
		            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
		            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
		            [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2],
		            [2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2],
		            [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2],
		            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
		            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
		            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
		            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
		            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
		            [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2],
		            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	            ];
	
	var map3 =[
				[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
				[2, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0, 2],
				[2, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0, 2],
				[2, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,0 ,17 ,0, 2],
				[2, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0, 2],
				[2, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0, 2],
				[2, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0, 2],
				[2, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0, 2],
				[2, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0, 2],
				[2, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0, 2],
				[2, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0, 2],
				[2, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0, 2],
				[2, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0, 2],
				[2, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0, 2],
				[2, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0, 2],
				[2, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0 ,0 ,0 ,0 ,0, 2],
				[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
				];
	
	maps = [];
	maps.push(map1);
	maps.push(map2);
	maps.push(map3);
//	maps.push(map4);
	doorNumber = 0;
	generateLevel(maps);
	
	THREE.Loader.Handlers.add(/\.dds$/i, new THREE.DDSLoader());
    var objLoader = new THREE.OBJMTLLoader();
	objLoader.load('models/objects/giant_door/giant_door.obj', 'models/objects/giant_door/giant_door.mtl', giantDoorLoadedCallback3);
	level = 4;
}
	
//	ground_material = Physijs.createMaterial(new THREE.MeshBasicMaterial({map: woodTexture}), 1, 0.1);
//	ground_material.map.wrapS = ground_material.map.wrapT = THREE.RepeatWrapping;
//	ground_material.map.repeat.set( 2.5, 20 );
//	var ambientLight = new THREE.AmbientLight(0xffffff);
//    scene.add(ambientLight);
////    for(var i = 0; i < map1.length; i++){
////		for(var j = 0; j < map1[i].length; j++){
////			generateParts(j, 0, i, map1[i][j]);
////		}
////    }
//    generateHeightField();
//    generateBall();
//    level = 4;
//}
//
//var oldY = 1;
//function generateHeightField(){
//	var ground_geometry = new THREE.PlaneGeometry( UNITSIZE*4, UNITSIZE*60, 30, 30 );
//	for ( var i = 0; i < ground_geometry.vertices.length; i++ ) {
//		var vertex = ground_geometry.vertices[i];
//		vertex.z = oldY + Math.random()*0.2 - Math.random()*0.3;
//		oldY = vertex.z;
//	}
////	ground_geometry.computeFaceNormals();
////	ground_geometry.computeVertexNormals();
//	var ground = new Physijs.HeightfieldMesh(
//			ground_geometry,
//			ground_material,
//			0, // mass
//			30,
//			30
//		);
//	ground.rotation.x = Math.PI / -2;
//	ground.position.x = UNITSIZE*7.5;
//	ground.position.z = UNITSIZE*7.5;
//	scene.add(ground);
//}
//
//function generateBall(){
//	var ball = new Physijs.SphereMesh(new THREE.SphereGeometry(2, 12, 12), Physijs.createMaterial(new THREE.MeshBasicMaterial({map: brickTexture}), 1, 0.1), 2);
//	ball.position.set(UNITSIZE * 7.5, 1, 1);
//	scene.add(ball);
//}