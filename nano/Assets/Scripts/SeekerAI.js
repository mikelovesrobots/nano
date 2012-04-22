#pragma strict

var target: Transform;
var seeking: boolean = false;

function Update () {
  if (seeking) {
    transform.LookAt(target);
    transform.Translate(Vector3.forward * Time.deltaTime);
  }  
}

function OnTriggerEnter (other : Collider) { 
  if (other.gameObject.transform == target) {
    seeking = true;
  }
}

function OnTriggerExit (other : Collider) {
  if (other.gameObject.transform == target) {
    seeking = false;
  }
}
