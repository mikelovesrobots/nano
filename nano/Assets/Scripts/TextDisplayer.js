#pragma strict

public var display: boolean = false;
public var text: String = "";
public var rect: Rect = Rect(10,10,600,200);
public var skin: GUISkin;
public var delay: float = 2.5;

function OnGUI () {
  if (display && text && text != "") {
    GUI.skin = skin;
    GUI.Label(rect, text);
  }
}

function Display() {
  display = true;
  Destroy(this, delay);
}
