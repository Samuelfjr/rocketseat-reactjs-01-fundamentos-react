import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
             src="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?q=50&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

             <div className={styles.profile}>
                <Avatar src="https://github.com/Samuelfjr.png"/>

                <strong>Samuelfjr</strong>
                <span>Web Developer</span>
             </div>

             <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
             </footer>
        </aside>
    )
}