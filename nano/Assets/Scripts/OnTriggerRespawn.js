#pragma strict

function OnTriggerEnter (other : Collider) {
  OnTriggerRespawn.Respawn(other.gameObject.transform);
}

static function Respawn (otherTransform : Transform) {
  otherTransform.position = RespawnPoint.lastPoint.position;
  otherTransform.rotation = RespawnPoint.lastPoint.rotation;
}
