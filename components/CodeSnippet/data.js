export default function createSnippetData(imageSource) {
  const react = `
  import React from 'react';
  
  function ResponsiveImage({ path, quality = 90, format = 'webp', alt }) {
    const voidrUrl = 'https://img.voidr.co';
    const projectName = '${imageSource}';
  
    const getSrcWithWidth = (width) =>
      \`\${voidrUrl}/\${imageSource}/compress:\${quality}/convert:\${format}/resize:\${width}x/fetch/\${path}\`;
  
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

  const laravel = `
  @php
      $voidrUrl = 'https://img.voidr.co';
      $projectName = '${imageSource}';
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
  const python = `
  // templatetags/responsive_image.py
  from django import template
  
  register = template.Library()
  
  @register.simple_tag
  def get_src_with_width(path, width, quality=90, format='webp'):
      voidr_url = 'https://img.voidr.co'
      project_name = '${imageSource}'
      return f"{voidr_url}/{project_name}/compress:{quality}/convert:{format}/resize:{width}x/fetch/{path}"
  
  
  // templates/responsive_image.html 
  {% load responsive_image %}
  
  <picture>
    
  <img src="{% get_src_with_width path 320 %}" alt="{{ alt }}">
  <img src={${imageSource}} alt="image description" width="300" />
  `

  const html = `<img src={${imageSource}} alt="image description" width="300" />`

  return { react, laravel, python, html }
}
