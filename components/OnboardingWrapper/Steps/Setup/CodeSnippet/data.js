export const react = `
import React from 'react';

function ResponsiveImage({ path, quality = 90, format = 'webp', alt }) {
  const voidrUrl = 'https://img.voidr.co';
  const projectName = 'seazone';

  const getSrcWithWidth = (width) =>
    \`\${voidrUrl}/\${projectName}/compress:\${quality}/convert:\${format}/resize:\${width}x/fetch/\${path}\`;

  return (
    <picture>
      <source media="(min-width: 1200px)" srcSet={getSrcWithWidth(1200)} />
      <source media="(min-width: 900px)" srcSet={getSrcWithWidth(900)} />
      <source media="(min-width: 750px)" srcSet={getSrcWithWidth(750)} />
      <source media="(min-width: 640px)" srcSet={getSrcWithWidth(640)} />
      <source media="(min-width: 450px)" srcSet={getSrcWithWidth(450)} />
      <img src={getSrcWithWidth(320)} alt={alt} />
    </picture>
  );
}

export default ResponsiveImage;`

export const laravel = `
@php
    $voidrUrl = 'https://img.voidr.co';
    $projectName = 'seazone';
    $quality = $quality ?? 90;
    $format = $format ?? 'webp';

    function getSrcWithWidth($path, $width) {
        return "{$voidrUrl}/{$projectName}/compress:{$quality}/convert:{$format}/resize:{$width}x/fetch/{$path}";
    }
@endphp

<picture>
    <source media="(min-width: 1200px)" srcset="{{ getSrcWithWidth($path, 1200) }}">
    <source media="(min-width: 900px)" srcset="{{ getSrcWithWidth($path, 900) }}">
    <source media="(min-width: 750px)" srcset="{{ getSrcWithWidth($path, 750) }}">
    <source media="(min-width: 640px)" srcset="{{ getSrcWithWidth($path, 640) }}">
    <source media="(min-width: 450px)" srcset="{{ getSrcWithWidth($path, 450) }}">
    <img src="{{ getSrcWithWidth($path, 320) }}" alt="{{ $alt }}">
</picture>

@include('components.responsive-image', ['path' => 'https://mysite.com/image/path.jpg', 'alt' => 'Image alt'])
`
export const python = `
// templatetags/responsive_image.py
from django import template

register = template.Library()

@register.simple_tag
def get_src_with_width(path, width, quality=90, format='webp'):
    voidr_url = 'https://img.voidr.co'
    project_name = 'seazone'
    return f"{voidr_url}/{project_name}/compress:{quality}/convert:{format}/resize:{width}x/fetch/{path}"


// templates/responsive_image.html 
{% load responsive_image %}

<picture>
  <source media="(min-width: 1200px)" srcset="{% get_src_with_width path 1200 %}">
  <source media="(min-width: 900px)" srcset="{% get_src_with_width path 900 %}">
  <source media="(min-width: 750px)" srcset="{% get_src_with_width path 750 %}">
  <source media="(min-width: 640px)" srcset="{% get_src_with_width path 640 %}">
  <source media="(min-width: 450px)" srcset="{% get_src_with_width path 450 %}">
  <img src="{% get_src_with_width path 320 %}" alt="{{ alt }}">
</picture>


{% include 'responsive_image.html' with path='https://mysite.com/image/path.jpg' alt='Your image description' %}
`

export const html = `
<picture>
  <source 
    media="(min-width: 1200px)" 
    srcset="https://img.voidr.co/my_project/compress:90/convert:webp
            /resize:1200x/fetch/https://mysite.com/image/path.jpg">
  <source 
    media="(min-width: 900px)" 
    srcset="https://img.voidr.co/my_project/compress:90/convert:webp
    /resize:900x/fetch/https://mysite.com/image/path.jpg">

  <source 
    media="(min-width: 750px)" 
    srcset="https://img.voidr.co/my_project/compress:90/convert:webp/
    resize:750x/fetch/https://mysite.com/image/path.jpg">

  <source 
    media="(min-width: 640px)" 
    srcset="https://img.voidr.co/my_project/compress:90/convert:webp/
    resize:640x/fetch/https://mysite.com/image/path.jpg">

  <source 
    media="(min-width: 450px)" 
    srcset="https://img.voidr.co/my_project/compress:90/convert:webp/
    resize:450x/fetch/https://mysite.com/image/path.jpg">

  <img src="https://img.voidr.co/my_project/compress:90/convert:webp/
    resize:320x/fetch/https://mysite.com/image/path.jpg" alt="Alt Text">
</picture>`
