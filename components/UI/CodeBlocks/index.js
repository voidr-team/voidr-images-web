import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import oneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/one-dark'

export default function CodeBlocks({ code = '', language = 'javascript' }) {
  return (
    <SyntaxHighlighter
      language={language}
      style={oneDark}
      codeTagProps={{
        style: { background: '#0C1019' },
      }}
      customStyle={{
        background: '#0C1019',
        'pre > code': {
          'background-color': '#0C1019',
        },
      }}
    >
      {code.trim()}
    </SyntaxHighlighter>
  )
}
