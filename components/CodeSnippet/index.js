import styles from './CodeSnippet.module.scss'
import CodeBlocks from '@/components/UI/CodeBlocks'
import { useFormContext } from 'react-hook-form'
import { head } from 'ramda'
import { useEffect } from 'react'

const langFrameworksMap = {
  node: ['react', 'html'],
  php: ['laravel'],
  python: ['django'],
}

export default function CodeSnippet({ imageSource }) {
  const { watch, setValue } = useFormContext()
  const [optionsFramework, optionLanguage] = watch(['framework', 'tech'])

  useEffect(() => {
    setValue('framework', head(langFrameworksMap[optionLanguage]))
  }, [optionLanguage])

  return (
    <div className={styles.codeWrapper}>
      <CodeBlocks
        language={'html'}
        code={`<img src="${imageSource}" alt="image description" width="300" />`}
      />
    </div>
  )
}
