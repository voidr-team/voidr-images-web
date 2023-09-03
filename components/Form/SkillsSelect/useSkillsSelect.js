import { useState, useEffect } from 'react'
import http from '../../../services/http'

export default function useSkillsSelect() {
  const [skills, setSkills] = useState(null)

  const mapSkills = (currentSkills) =>
    currentSkills.map(({ slug, label }) => ({ value: slug, label }))

  useEffect(() => {
    http('app/skills/')
      .then(({ data }) => setSkills(mapSkills(data.skills)))
      .catch((err) => {
        console.error('Error on get skills', err)
      })
  }, [])

  return {
    isLoading: !skills,
    skills,
  }
}
