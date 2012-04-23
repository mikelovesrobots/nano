#pragma strict

// FadeInOut
//
//--------------------------------------------------------------------
//                        Public parameters
//--------------------------------------------------------------------

public var backgroundTexture : Texture2D;
public var centerTexture : Texture2D;
public var fadeSpeed = 0.3;

var drawDepth = -1000;

//--------------------------------------------------------------------
//                       Private variables
//--------------------------------------------------------------------

private var alpha = 1.0; 
private var fading: boolean = false;

//--------------------------------------------------------------------
//                       Runtime functions
//--------------------------------------------------------------------

//--------------------------------------------------------------------

function OnGUI() {
  if (Input.GetKey(KeyCode.Escape)) {
    Debug.Log("Quitting");
    Application.Quit();
  }	

  if (fading) {
    alpha += 1.0 * fadeSpeed * Time.deltaTime;  
    alpha = Mathf.Clamp01(alpha);   

    GUI.color.a = alpha;
    GUI.depth = drawDepth;
    GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), backgroundTexture);
    var middleWidth:float = Screen.width / 2 - (centerTexture.width / 2);
    var middleHeight:float = Screen.height / 2 - (centerTexture.height / 2);

    GUI.DrawTexture(Rect(middleWidth, middleHeight, centerTexture.width, centerTexture.height), centerTexture);
   }
}

function Fade() {
  alpha = 0;
  fading = true;
}

