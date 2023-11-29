import { useState, useEffect, useRef } from 'react'

export default function useEditor({ name, defaultValue, onChange }) {
  const [currentEditorContent, setEditorContent] = useState(null)
  const [currentEditorValue, setEditorValue] = useState()
  const [currentEditorText, setEditorText] = useState('')
  const [isTouched, setIsTouched] = useState(false)
  const [editorIsActive, setEditorActive] = useState(false)
  const [currentEditor, setEditor] = useState(null)
  const wrapperRef = useRef(null)

  const updateEditor = (editor) => {
    const editorContent = editor.getContents()
    const editorValue = editor.root.innerHTML
    const editorText = editor.getText()

    setEditorContent(editorContent)
    setEditorValue(editorValue)
    setEditorText(editorText)
  }

  const onEditorChange = (editor) => {
    updateEditor(editor)
  }

  useEffect(() => {
    if (defaultValue) {
      setEditorActive(true)
    }
  }, [defaultValue])

  useEffect(() => {
    const hljs = require('highlight.js')
    const Quill = require('quill')

    if (editorIsActive) {
      const editor = new Quill(`[data-editor="${name}"]`, {
        modules: {
          syntax: {
            highlight: (text) => hljs.highlightAuto(text).value,
          },
          toolbar: [
            [{ header: 2 }],
            ['bold', 'italic', 'underline'],
            ['code-block'],
            ['link'],
            [{ color: [] }],
            ['blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ align: [] }],
          ],
        },
        theme: 'snow',
      })

      setEditor(editor)

      if (isTouched) {
        setTimeout(() => {
          editor.setSelection(9999)
        }, 200)
      }

      if (defaultValue) {
        editor.root.innerHTML = defaultValue
      }
    }
  }, [editorIsActive])

  useEffect(() => {
    if (currentEditor) {
      if (currentEditorContent) {
        currentEditor.setContents(currentEditorContent)
      }

      if (defaultValue) {
        updateEditor(currentEditor)
      }

      currentEditor.on('text-change', () => {
        const editorText = currentEditor.getText()
        const rawMarkup = currentEditor.root.innerHTML

        onEditorChange(currentEditor)
        onChange(rawMarkup)
      })
    }
  }, [currentEditor])

  const onClick = () => {
    setIsTouched(true)

    if (!editorIsActive) {
      setEditorActive(true)
    }
  }

  return {
    editorIsActive,
    currentEditorValue,
    currentEditorContent,
    currentEditorText,
    onClick,
    setEditorValue,
    wrapperRef,
    currentEditor,
    onEditorChange,
    updateEditor,
  }
}
