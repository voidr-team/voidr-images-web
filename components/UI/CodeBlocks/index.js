import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import oneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/one-dark'

export default function CodeBlocks({ code = '', language = 'javascript' }) {
  return (
    <SyntaxHighlighter
      language={language}
      style={oneDark}
      lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
      wrapLines={true}
      codeTagProps={{
        style: { background: '#0C1019' },
      }}
      customStyle={{
        fontSize: '12px',
        padding: '18px',
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
