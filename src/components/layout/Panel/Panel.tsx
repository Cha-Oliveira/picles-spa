import { Sidebar } from '../../common/Sidebar/Sidebar'
import styles from './Panel.module.css'
import { ReactNode } from 'react'

interface IPanel{
    children: ReactNode
}

export function Panel({children}: IPanel){
    return(
        <div className = {styles.panel}>
        <Sidebar/>
        <main className={styles.content}>{children}</main>
        </div>
    )
}