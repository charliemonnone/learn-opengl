#version 330 core

in vec3 ourColor;
in vec2 TexCoord;

uniform sampler2D texture0;
uniform sampler2D texture1;

uniform float mixAmount;

out vec4 FragColor;

void main()
{
   FragColor = mix(texture(texture0, TexCoord), texture(texture1, vec2(TexCoord.x * -1, TexCoord.y)), mixAmount);
};