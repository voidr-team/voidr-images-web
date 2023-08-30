import MultiSelect from '../MultiSelect/v2'
import useSkillsSelect from './useSkillsSelect'

const SkillsSelect = ({
  defaultValue = [],
  label = 'Habilidades necessárias',
  help = 'São os conhecimentos e as habilidades necessárias para o desenvolvimento da tarefa. Você pode selecionar mais de uma opção.',
  name,
  rules,
  customClass,
  theme,
}) => {
  const { isLoading, skills } = useSkillsSelect()
  return (
    <MultiSelect
      theme={theme}
      customClass={customClass}
      isLoading={isLoading}
      options={skills}
      defaultValue={defaultValue}
      rules={rules}
      label={label}
      help={help}
      name={name}
      iconId="code"
    />
  )
}

export default SkillsSelect
