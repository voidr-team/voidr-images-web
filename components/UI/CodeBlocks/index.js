import { CopyBlock, dracula } from 'react-code-blocks'

export default function CodeBlocks({ code, language = 'javascript' }) {
  return (
    <CopyBlock
      text={code}
      showLineNumbers={false}
      language={language}
      theme={dracula}
      wrapLines
      customStyle={{
        fontFamily: 'Fira Code',
        border: '1px solid #4b4b4b',
        borderTop: '0',
        borderRadius: '0 0 6px 6px',
      }}
    />
  )
}
