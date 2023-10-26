import { Stack, Typography } from '@mui/joy'
import Button from '../../../UI/Button'
import styles from './Setup.module.scss'
import CodeSnippet from './CodeSnippet'

export default function Setup({ steps }) {
  return (
    <Stack
      minHeight="80vh"
      maxWidth="100vh"
      position="relative"
      marginY={{ xs: 6, sm: 7, md: 15 }}
    >
      <Stack>
        <Typography fontWeight="600" fontSize={20}>
          Setup &gt; Stack
        </Typography>
        <Typography
          marginTop={1}
          textColor="primary.100"
          fontWeight="500"
          fontSize={18}
        >
          Choose the right SDK for your stack.
        </Typography>
      </Stack>

      <Stack marginTop={3} direction="row" gap={2}>
        <div className={styles.copyContentInput}>
          <label>API Key</label>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              value="QWxhZGRpbjpvcGVuIHNlc2FtZQ7bB!d2RpYW1vL"
              name="apiKey"
            />
            <button type="button" className={styles.copyButton}>
              Copy
            </button>
          </div>
        </div>

        <div className={styles.copyContentInput}>
          <label>Public Key</label>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              value="R2VvcmdlIEFpcnBvcnQ=xY@5jPpZ^@z2s!VU"
              name="apiKey"
            />
            <button type="button" className={styles.copyButton}>
              Copy
            </button>
          </div>
        </div>
      </Stack>

      <CodeSnippet />

      <Stack marginY={6} direction="row" gap={2}>
        <Button onClick={steps.backStep} inverted type="button">
          Back
        </Button>

        <Button type="submit">Next</Button>
      </Stack>
    </Stack>
  )
}
