PShader mjulia;

void setup() {
  size(800, 600, P2D);
  noStroke();
  mjulia = loadShader("mjulia.frag");
  mjulia.set("u_resolution", float(width), float(height));
  
  shader(mjulia);
}

void draw() {
  //background(0);
  mjulia.set("iMouse", float(mouseX), float(mouseY));
  rect(0, 0, width, height);
  shader(mjulia);
  //System.out.println(mouseX + " " + mouseY);
  if (frameCount % 10 == 0){
        System.out.println(frameRate);  
}
}
