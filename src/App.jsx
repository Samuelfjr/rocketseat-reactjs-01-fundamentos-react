import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css'

export function App() {

  return (
    <>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author="Samuel Fernandes Junior" 
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sapiente perferendis, id eligendi vitae doloremque, ipsam aperiam iste voluptate, in temporibus quidem reiciendis incidunt! Quisquam consequuntur necessitatibus nostrum vero assumenda!"
          />
          <Post 
            author="Eslen Delanogare"
            content="Post sobre Neurociência!!"
          />
        </main>
      </div>
    </>
  )
}