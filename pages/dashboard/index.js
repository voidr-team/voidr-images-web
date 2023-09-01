import useAuth from '@/context/auth/useAuth'

const Dashboard = () => {
  const { user } = useAuth()

  return <div>{JSON.stringify(user)}</div>
}

export default Dashboard
