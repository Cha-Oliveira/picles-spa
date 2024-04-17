import { Link } from "react-router-dom";
import { Header } from "../../components/common/Header/Header";
import { Grid } from "../../components/layout/Grid";
import styles from './Pets.module.css'

export function Pets() {
    return (
        <Grid>
            <div className={styles.container}>
            <Header />
            <Link to="/Pets/20">Ir para Listagem</Link>
            </div>
        </Grid>
    )
}