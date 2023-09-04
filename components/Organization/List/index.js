import useOrganizationList from './useOrganizationList'

function List() {
  const { data } = useOrganizationList()

  return <div>This should make API calls</div>
}

export default List
