import PaginationProvider from 'react-paginate'
import styles from './Pagination.module.scss'

export default function Pagination({ onPageChange, pageCount }) {
  return (
    <PaginationProvider
      breakLabel="..."
      pageRangeDisplayed={5}
      pageCount={pageCount}
      nextLabel=">"
      onPageChange={(event) => {
        const pageNumber = event?.selected === 0 ? 1 : event?.selected

        onPageChange(pageNumber)
      }}
      renderOnZeroPageCount={null}
      previousLabel="<"
      className={styles.pagination}
      initialPage={1}
    />
  )
}
