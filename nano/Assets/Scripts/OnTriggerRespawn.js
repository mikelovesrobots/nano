#pragma strict

function OnTriggerEnter (other : Collider) {
  OnTriggerRespawn.Respawn(other.gameObject.transform);
}

static function Respawn (otherTransform : Transform) {
  var spawnPoint = RespawnPoint.lastPoint;
  otherTransform.position = spawnPoint.position;
  otherTransform.rotation = spawnPoint.rotation;
  spawnPoint.audio.Play();
}
