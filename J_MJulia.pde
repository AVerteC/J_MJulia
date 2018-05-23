PShader mjulia;

void setup() {
  size(1280, 800, P3D);
  noStroke();
  fill(204);
  mjulia = loadShader("mjulia.glsl");
  mjulia.set("u_resolution", float(width), float(height));
  mjulia.set("iMouse", float(mouseX), float(mouseY), 0.0, 0.0);
}

void draw() {
  shader(mjulia);
  if (frameCount % 10 == 0){
        System.out.println(frameRate);  
}
}
