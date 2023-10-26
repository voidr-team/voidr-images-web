import styles from './CodeSnippet.module.scss'

import RadioButton from '@/components/Form/RadioButton'
import CodeBlocks from '@/components/UI/CodeBlocks'
import { Stack } from '@mui/joy'
// import { useFormContext } from 'react-hook-form'

export default function CodeSnippet() {
  // const { watch } = useFormContext()
  // const [optionsTech] = watch(['tech'])
  const codeString = `
  import VoidrImage from '@voidr/image'

  const ReactComponent = () => {
    return (
        <VoidrImage 
            src="https://yourhosting.com/uncompressed.jpeg"
            remote
            convertWebp
            optimizeLowBandwidth
            compress={80}
            cropTo={{
              width: 250,
              height: 250
            }}
        />
    )
  }
  `

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
            icon="Ruby_Icon"
            name="tech"
            value="ruby"
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
        <div className={styles.radioButtonWrapper}>
          <RadioButton
            className={styles.radioButton}
            icon="Java_Icon"
            name="tech"
            value="java"
          />
        </div>
      </Stack>
      <Stack marginTop={3}>
        <Stack className={styles.topSelectFramework} direction="row" gap={2}>
          <RadioButton
            className={styles.radioButtonHorizontal}
            icon="Node_Icon"
            label="NextJS"
            name="framework"
            value="next"
          />
          <RadioButton
            className={styles.radioButtonHorizontal}
            icon="Node_Icon"
            label="React"
            name="framework"
            value="react"
          />
          <RadioButton
            className={styles.radioButtonHorizontal}
            icon="Node_Icon"
            label="VueJS"
            name="framework"
            value="vue"
          />
        </Stack>
        <CodeBlocks code={codeString} />
      </Stack>
    </Stack>
  )
}
