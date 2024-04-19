import { Header } from "../../components/common/Header/Header";
import { Grid } from "../../components/layout/Grid";
import styles from './Pets.module.css'
import { Card } from "../../components/common/Card";
import { useQuery } from "@tanstack/react-query";
import {getPets} from '../../services/pets/getPets'
import { Skeleton } from "../../components/common/Skeleton";
import { Pagination } from "../../components/common/Pagination";
import { useSearchParams } from "react-router-dom";

export function Pets() {
    const [searchParams, setSearshParams] = useSearchParams()
    const urlParams = {
        page: searchParams.get('page') ? Number(searchParams.get('page')) : 1
    }


    function changePage(page: number){
        setSearshParams((params) => {
            params.set('page', String(page))
            return params
        })
    }

    return (
        <Grid>
            <div className={styles.container}>
            <Header />
            {isLoading && (
                <Skeleton containerClassName={styles.skeleton} count={10}/>
            )}
            <main className={styles.list}>
                {
                    data?.items?.map((pet) => (
                        <Card
                        key={pet.id}
                        href={`/pets/${pet.id}`}
                        text={pet.name}
                        thumb={pet.photo}
                        />
                    )
                )}                
             </main>
             {             
             data?.currentPage && (
             <Pagination
             currentPage={data.currentPage}
             totalPages={data.totalPages}
             OnPageChange={number => changePage(number)}
              />
             )}
            </div>
        </Grid>
    )
}