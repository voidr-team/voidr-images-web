import styles from './CodeSnippet.module.scss'

import RadioButton from '@/components/Form/RadioButton'
import CodeBlocks from '@/components/UI/CodeBlocks'
import { Stack } from '@mui/joy'
import { laravel, react, python, html } from './data'
import { useFormContext } from 'react-hook-form'
import { head } from 'ramda'
import { useEffect } from 'react'

const langFrameworksMap = {
  node: ['react', 'html'],
  php: ['laravel'],
  python: ['django'],
}
const options = {
  react,
  laravel,
  django: python,
  html,
}

const languageMap = {
  react: 'jsx',
  html: 'html',
  laravel: 'jsx',
  django: 'jsx',
}
export default function CodeSnippet() {
  const { watch, setValue } = useFormContext()
  const [optionsFramework, optionLanguage] = watch(['framework', 'tech'])

  useEffect(() => {
    setValue('framework', head(langFrameworksMap[optionLanguage]))
  }, [optionLanguage])

  return (
    <Stack marginTop={8}>
      <Stack direction="row" gap={2}>
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
      </Stack>
      <Stack marginTop={3}>
        <Stack className={styles.topSelectFramework} direction="row" gap={2}>
          {optionLanguage === 'node' ? (
            <>
              <RadioButton
                className={styles.radioButtonHorizontal}
                icon="Node_Icon"
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
        </Stack>
        <div className={styles.codeWrapper}>
          <CodeBlocks
            language={languageMap[optionsFramework]}
            code={options[optionsFramework]}
          />
        </div>
      </Stack>
    </Stack>
  )
}
