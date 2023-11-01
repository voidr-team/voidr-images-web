import PaginationProvider from 'react-paginate'
import styles from './Pagination.module.scss'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Pagination({ onPageChange, pageCount }) {
  return (
    <PaginationProvider
      breakLabel="..."
      pageRangeDisplayed={5}
      pageCount={pageCount}
      nextLabel={<ChevronRight />}
      onPageChange={(event) => {
        const pageNumber = event?.selected === 0 ? 1 : event?.selected

        onPageChange(pageNumber)
      }}
      renderOnZeroPageCount={null}
      previousLabel={<ChevronLeft />}
      className={styles.pagination}
      initialPage={1}
    />
  )
}
