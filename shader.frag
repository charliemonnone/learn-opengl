#version 330 core
out vec4 FragColor;
in vec3 ourColor;
uniform float colorRotationR;
uniform float colorRotationG;
uniform float colorRotationB;
void main()
{
   FragColor = vec4(
		ourColor.x + colorRotationR , 
		ourColor.y + colorRotationG ,
		ourColor.y + colorRotationB ,
		1.0
	);
};