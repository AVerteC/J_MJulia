import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class J_MJulia extends PApplet {

PShader mjulia;

public void setup() {
  
  noStroke();
  mjulia = loadShader("mjulia.frag");
  mjulia.set("u_resolution", PApplet.parseFloat(width), PApplet.parseFloat(height));
  
  shader(mjulia);
}

public void draw() {
  //background(0);
  mjulia.set("iMouse", PApplet.parseFloat(mouseX), PApplet.parseFloat(mouseY));
  rect(0, 0, width, height);
  shader(mjulia);
  //System.out.println(mouseX + " " + mouseY);
  //if (frameCount % 10 == 0){
  //      System.out.println(frameRate);  
}
//}
  public void settings() {  size(800, 600, P2D); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "J_MJulia" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
