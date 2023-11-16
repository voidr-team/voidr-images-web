import styles from './CodeSnippet.module.scss'

import RadioButton from '@/components/Form/RadioButton'
import CodeBlocks from '@/components/UI/CodeBlocks'
import { Stack } from '@mui/joy'
import createSnippetData from './data'
import { useFormContext } from 'react-hook-form'
import { head } from 'ramda'
import { useEffect } from 'react'
import useAuth from '@/context/auth/useAuth'

const langFrameworksMap = {
  node: ['react', 'html'],
  php: ['laravel'],
  python: ['django'],
}

const languageMap = {
  react: 'jsx',
  html: 'html',
  laravel: 'jsx',
  django: 'jsx',
}
export default function CodeSnippet({ imageSource }) {
  const { watch, setValue } = useFormContext()
  const [optionsFramework, optionLanguage] = watch(['framework', 'tech'])
  const { user } = useAuth()
  const { laravel, react, python, html } = createSnippetData(imageSource)

  const options = {
    react,
    laravel,
    django: python,
    html,
  }
  useEffect(() => {
    setValue('framework', head(langFrameworksMap[optionLanguage]))
  }, [optionLanguage])

  return (
    <Stack marginTop={1}>
      {/* <Stack direction="row" gap={2}>
        <div className={styles.radioButtonWrapper}>
          <RadioButton
            className={styles.radioButton}
            icon="Node_Icon"
            name="tech"
            value="node"
          />
        </div>
        <div className={styles.radioButtonWrapper}>
          <RadioButton
            className={styles.radioButton}
            icon="Php_Icon"
            name="tech"
            value="php"
          />
        </div>
        <div className={styles.radioButtonWrapper}>
          <RadioButton
            className={styles.radioButton}
            icon="Python_Icon"
            name="tech"
            value="python"
          />
        </div>
      </Stack> */}
      {/* <Stack className={styles.topSelectFramework} direction="row" gap={2}>
          {optionLanguage === 'node' ? (
            <>
              <RadioButton
                className={styles.radioButtonHorizontal}
                icon="React_Icon"
                label="React"
                name="framework"
                value="react"
              />

              <RadioButton
                className={styles.radioButtonHorizontal}
                icon="Html_Icon"
                label="HTML"
                name="framework"
                value="html"
              />
            </>
          ) : null}
          {optionLanguage === 'php' ? (
            <RadioButton
              className={styles.radioButtonHorizontal}
              icon="Laravel_Icon"
              label="Laravel"
              name="framework"
              value="laravel"
            />
          ) : null}
          {optionLanguage === 'python' ? (
            <RadioButton
              className={styles.radioButtonHorizontal}
              icon="Django_Icon"
              label="Django"
              name="framework"
              value="django"
            />
          ) : null}
        </Stack> */}
      <div className={styles.codeWrapper}>
        <CodeBlocks
          language={'html'}
          code={`<img src="${imageSource}" alt="image description" width="300" />`}
        />
      </div>
    </Stack>
  )
}
