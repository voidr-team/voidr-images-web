import useEditor from './useEditor'
import cx from 'classnames'
import styles from './Editor.module.scss'
import { useController, useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { isEmpty } from 'ramda'

const Editor = ({
  name,
  rules,
  defaultValue: defaultValueFromProps,
  customClass,
}) => {
  const { control, getValues } = useFormContext()
  const defaultValue = getValues(name) || defaultValueFromProps || ''
  const {
    field: { onChange, onBlur, ref },
    fieldState,
    formState: { errors },
  } = useController({
    name,
    control,
    rules,
    defaultValue: defaultValue,
  })
  const {
    wrapperRef,
    editorIsActive,
    currentEditorValue,
    currentEditorText,
    onClick,
  } = useEditor({ name, defaultValue, onChange })
  return (
    <div
      ref={wrapperRef}
      data-editor-wrapper={name}
      className={cx(styles.editor, customClass, {
        [styles.error]: !!fieldState.error,
      })}
    >
      <div
        className={cx(styles.bordered, customClass)}
        ref={ref}
        onBlur={() =>
          onBlur({ text: currentEditorText, raw: currentEditorValue })
        }
      >
        {editorIsActive ? (
          <div>
            <div data-editor={name}></div>
          </div>
        ) : (
          <>
            <div
              className={cx({
                'ql-editor': !!currentEditorValue,
              })}
              dangerouslySetInnerHTML={{
                __html: currentEditorValue,
              }}
            ></div>
            <input onClick={onClick} className={styles.triggerInput} />
          </>
        )}
      </div>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <div className={styles.errorWrapper}>{message}</div>
        )}
      />
    </div>
  )
}

export default Editor
