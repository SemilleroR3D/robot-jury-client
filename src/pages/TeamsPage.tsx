import { useState, useEffect } from 'react'
import { getAllTeam } from '../services/Team'
import useUserStore from '../store/userStore.ts'
import { User } from '../types/User'
import { Team } from '../types/Team'
import TeamList from '../components/TeamsList.tsx'

export default function TeamsPage () {
  const user = useUserStore(state => state.user) as User
  const [teams, setTeams] = useState<Team[]>([])

  useEffect(() => {
    const accessToken = user.accessToken

    const fetchTeams = async () => {
      try {
        const TeamsData = await getAllTeam(accessToken)
        setTeams(TeamsData)
      } catch (error) {
        console.error('Error fetching Teams:', error)
      }
    }

    fetchTeams()
  }, [user.accessToken])
  return (
    <>
      <TeamList teams={teams} />
    </>
  )
}
