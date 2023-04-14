import { useEffect } from 'react'
import styles from './style.module.scss'
export default () => {
    useEffect(() => {
        console.log('react-simple-component-vite-boilerplate')
    }, [])
    return (
        <div className={styles.demo}>react-simple-component-vite-boilerplate</div>
    )
}