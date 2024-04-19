import styles from './Pagination.module.css'

interface IPagination {
    currentPage: number
    totalPages: number
    OnPageChange: (page: number) => void
}


export function Pagination ({currentPage, totalPages, OnPageChange}: IPagination){
    const pageNumber = Array.from({length: totalPages}, (_, i) => i +1)
    return (
        <nav>
            <ul className={styles.pagination}>
                {pageNumber.map((number) => (
                    <li key={number} className={`${currentPage === number ? styles.active : null}`}
                    >
                        <button onClick={() => OnPageChange(number)}>{number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}