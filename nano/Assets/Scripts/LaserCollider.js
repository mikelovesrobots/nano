#pragma strict

var maxDistance : float = 50.0f;
var target : Transform;
private var lineRenderer : LineRenderer;

function Awake () {
  lineRenderer = GetComponent("LineRenderer");
  if (!lineRenderer) {
    Debug.Log("Couldn't find line renderer");
  }
}
function Update () {
  var hit : RaycastHit;
  if (Physics.Raycast (transform.position, Vector3.forward, hit, maxDistance)) {
    //if (hit.transform == target) {
    //  Debug.Log("target got nabbed by a laser");
    //  OnTriggerRespawn.Respawn(hit.transform);
    //}
    
    Debug.DrawLine (transform.position, hit.point);
    //Debug.Log("Hit something " + hit.distance);
    //lineRenderer.SetPosition(1, Vector3(0, 0, hit.distance));    
  }
}

