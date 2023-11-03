export const react =
  "import React from 'react';\n" +
  '\n' +
  "function ResponsiveImage({ path, quality = 90, format = 'webp', alt }) {\n" +
  "  const voidrUrl = 'https://img.voidr.co';\n" +
  "  const projectName = 'my_project';\n" +
  '\n' +
  '  const getSrcWithWidth = (width) =>\n' +
  '    `${voidrUrl}/${projectName}/compress:${quality}/\n' +
  '    convert:${format}/resize:${width}x/fetch/${path}`;\n' +
  '\n' +
  '  return (\n' +
  '    <picture>\n' +
  '      <source\n' +
  '        media="(min-width: 1200px)"\n' +
  '        srcSet={getSrcWithWidth(1200)}\n' +
  '      />\n' +
  '      <source\n' +
  '        media="(min-width: 900px)"\n' +
  '        srcSet={getSrcWithWidth(900)}\n' +
  '      />\n' +
  '      <source\n' +
  '        media="(min-width: 750px)"\n' +
  '        srcSet={getSrcWithWidth(750)}\n' +
  '      />\n' +
  '      <source\n' +
  '        media="(min-width: 640px)"\n' +
  '        srcSet={getSrcWithWidth(640)}\n' +
  '      />\n' +
  '      <source\n' +
  '        media="(min-width: 450px)"\n' +
  '        srcSet={getSrcWithWidth(450)}\n' +
  '      />\n' +
  '      <img src={getSrcWithWidth(320)} alt={alt} />\n' +
  '    </picture>;\n' +
  '}\n' +
  '\n' +
  'export default ResponsiveImage;'

export const laravel =
  "@props(['path', 'quality' => 90, 'format' => 'webp', 'alt'])\n" +
  '\n' +
  '@php\n' +
  "    $voidrUrl = 'https://img.voidr.co';\n" +
  "    $projectName = 'my_project';\n" +
  '\n' +
  '    function getSrcWithWidth($width, $quality, $format, $path) {\n' +
  '        return `${voidrUrl}/${projectName}/compress:${quality}\n/convert:${format}/resize:${width}x/fetch/${path}`;\n' +
  '    }\n' +
  '@endphp\n' +
  '\n' +
  '<picture>\n' +
  '    <source media="(min-width: 1200px)" \n srcset="{{ getSrcWithWidth(1200, $quality, $format, $path) }}" />\n' +
  '    <source media="(min-width: 900px)" \n srcset="{{ getSrcWithWidth(900, $quality, $format, $path) }}" />\n' +
  '    <source media="(min-width: 750px)" \n srcset="{{ getSrcWithWidth(750, $quality, $format, $path) }}" />\n' +
  '    <source media="(min-width: 640px)" \n srcset="{{ getSrcWithWidth(640, $quality, $format, $path) }}" />\n' +
  '    <source media="(min-width: 450px)" \n srcset="{{ getSrcWithWidth(450, $quality, $format, $path) }}" />\n' +
  '    <img src="{{ getSrcWithWidth(320, $quality, $format, $path) }}" \n alt="{{ $alt }}" />\n' +
  '</picture>'

export const python = `
  from django import template
  
  register = template.Library()
  
  @register.simple_tag
  def responsive_image(path, quality=90, format='webp', alt=''):
      voidr_url = 'https://img.voidr.co'
      project_name = 'my_project'
  
      def get_src_with_width(width):
        return f'{voidr_url}/{project_name}/compress:{quality}
        /convert:{format}/resize:{width}x/fetch/{path}'
      
      sources = [
          f'<source media="(min-width: 1200px)"
           srcset="{get_src_with_width(1200)}">',
          f'<source media="(min-width: 900px)"
           srcset="{get_src_with_width(900)}">',
          f'<source media="(min-width: 750px)"
           srcset="{get_src_with_width(750)}">',
          f'<source media="(min-width: 640px)"
           srcset="{get_src_with_width(640)}">',
          f'<source media="(min-width: 450px)"
           srcset="{get_src_with_width(450)}">'
      ]
      
      img = f'<img src="{get_src_with_width(320)}" alt="{alt}">'
      
      return '\\n'.join(sources) + img
  `

export const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <title>Responsive Image</title>
  </head>
  <body>
    <picture>
      <source 
        media="(min-width: 1200px)" 
        srcset="https://img.voidr.co/my_project/compress:90/convert:webp
                /resize:1200x/fetch/your_path">
      <source 
        media="(min-width: 900px)" 
        srcset="https://img.voidr.co/my_project/compress:90/convert:webp
        /resize:900x/fetch/your_path">

      <source 
        media="(min-width: 750px)" 
        srcset="https://img.voidr.co/my_project/compress:90/convert:webp/
        resize:750x/fetch/your_path">

      <source 
        media="(min-width: 640px)" 
        srcset="https://img.voidr.co/my_project/compress:90/convert:webp/
        resize:640x/fetch/your_path">

      <source 
        media="(min-width: 450px)" 
        srcset="https://img.voidr.co/my_project/compress:90/convert:webp/
        resize:450x/fetch/your_path">

      <img src="https://img.voidr.co/my_project/compress:90/convert:webp/
        resize:320x/fetch/your_path" alt="Alt Text">
    </picture>
  </body>
  </html>`
