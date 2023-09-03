import useOrganizationList from './useOrganizationList'

function List() {
  const { data } = useOrganizationList()

  console.log(data)

  return <div>This should make API calls</div>
}

export default List
