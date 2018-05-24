#ifdef GL_ES
precision mediump float;
precision mediump int;
#endif
#define MAX_ITER 500


uniform vec2 u_resolution;
uniform vec2 iMouse;

//z starts with an initial value of the pixel(c1) and then you 
//add c2 in the iteration which can 
//be a constant or mouse position

float fJulia(vec2 c1, vec2 c2){
    float l = 0.;
    vec2 z = c1;
    float B = 256.;
    for(float i=0.;i<float(MAX_ITER);i++) {
        if (z.x*z.x + z.y*z.y > 4.) {
        	return l;
            break;	
        }
        float xtemp = z.x*z.x-(z.y*z.y);
        z.y = 2.*z.x*z.y + c2.y;
        z.x = xtemp + c2.x;
        l+=1.;
    }
    float sl = l - log(log(length(z))/log(B))/log(2.0);
    return sl;
    //return l;
}

vec3 trueCmap(float n)	{  
    // GLSL has it's own syntax for creating arrays . . .
    if (n == float(MAX_ITER)){
    	vec3 black = vec3(0.,0.,0.); 
        return black;
    }
    vec3 cMap[7] = vec3[7](vec3(0.,0.,0.), vec3(1.,0.,1.), vec3(0.,0.,1.), vec3(0.,1.,0.), vec3(1.,1.,0.), vec3(1.,0.5,0.), vec3(0.,0.,0.)) ;
    
    float quotient = float(cMap.length()) * n / float(MAX_ITER);
    float lowerIndex = floor(quotient);
    float upperIndex = ceil(quotient);
    highp int lIndex = int(lowerIndex);
    highp int uIndex = int(upperIndex);
    float fraction = quotient - lowerIndex;
    vec3 c = cMap[lIndex] + fraction * (cMap[uIndex] - cMap[lIndex]);    
return c;
}

void main(void)
{
    vec2 p = (2.*gl_FragCoord.xy - u_resolution.xy)/(u_resolution.x);
    vec2 mousein = (2.*iMouse.xy - u_resolution.xy)/(u_resolution.x);
    float iCount = fJulia((2.*p), mousein);
    gl_FragColor = vec4(trueCmap(iCount*2.),1.);   
}
