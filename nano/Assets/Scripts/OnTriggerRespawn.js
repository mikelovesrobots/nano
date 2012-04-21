#pragma strict

function OnTriggerEnter (other : Collider) {
  other.gameObject.transform.position = RespawnPoint.lastPoint.position;
  other.gameObject.transform.rotation = RespawnPoint.lastPoint.rotation;
}
