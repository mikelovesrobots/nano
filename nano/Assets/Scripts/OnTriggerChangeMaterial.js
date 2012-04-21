#pragma strict

var target : Transform;
var material : Material;

function OnTriggerEnter () {
  var materials : Array = target.renderer.materials;
  materials[0] = material;
  target.renderer.materials = materials;
}
