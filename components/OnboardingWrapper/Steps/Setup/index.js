import { Stack, Typography } from '@mui/joy'
// import styles from './Setup.module.scss'
import CodeSnippet from './CodeSnippet'

// function CredentialsKey() {
//   return (
//     <Stack marginTop={3} direction="row" gap={2}>
//       <div className={styles.copyContentInput}>
//         <label>API Key</label>
//         <div className={styles.inputWrapper}>
//           <input
//             type="text"
//             value="QWxhZGRpbjpvcGVuIHNlc2FtZQ7bB!d2RpYW1vL"
//             name="apiKey"
//           />
//           <button type="button" className={styles.copyButton}>
//             Copy
//           </button>
//         </div>
//       </div>

//       <div className={styles.copyContentInput}>
//         <label>Public Key</label>
//         <div className={styles.inputWrapper}>
//           <input
//             type="text"
//             value="R2VvcmdlIEFpcnBvcnQ=xY@5jPpZ^@z2s!VU"
//             name="apiKey"
//           />
//           <button type="button" className={styles.copyButton}>
//             Copy
//           </button>
//         </div>
//       </div>
//     </Stack>
//   )
// }

export default function Setup() {
  return (
    <Stack
      minHeight="80vh"
      maxWidth="100vh"
      position="relative"
      marginTop={{ xs: 6, sm: 7, md: 15 }}
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

      {/* <CredentialsKey /> */}

      <CodeSnippet />
    </Stack>
  )
}
