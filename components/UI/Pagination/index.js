import PaginationProvider from 'react-paginate'
import styles from './Pagination.module.scss'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function Pagination({
  onPageChange,
  pageCount,
  initialPage = 1,
}) {
  const [page, setPage] = useState(initialPage)

  return (
    <PaginationProvider
      breakLabel="..."
      pageRangeDisplayed={5}
      pageCount={pageCount}
      nextLabel={<ChevronRight />}
      onPageChange={(event) => {
        const pageNumber = Number(event?.selected) + 1
        onPageChange(pageNumber)
        setPage(pageNumber)
      }}
      renderOnZeroPageCount={null}
      previousLabel={<ChevronLeft />}
      className={styles.pagination}
      forcePage={Number(page) - 1}
    />
  )
}
