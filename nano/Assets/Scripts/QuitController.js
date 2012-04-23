#pragma strict

function Update () {
  if (Input.GetKey(KeyCode.Escape)) {
    Debug.Log("Quitting");
    Application.Quit();
  }		
}
