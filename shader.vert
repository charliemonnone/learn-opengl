#version 330 core
layout(location = 0) in vec3 aPos;   // the position variable has attribute position 0
layout(location = 1) in vec3 aColor; // the color variable has attribute position 1
out vec3 ourColor;
uniform float xPos;
uniform float yPos;
void main()
{
	gl_Position = vec4(aPos.x + xPos, aPos.y + yPos, aPos.z, 1.0);
	ourColor  = aColor;
};