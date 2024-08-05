import { Post } from "./Post"

export function App() {

  return (
    <>
      <Post 
        author="Samuel Fernandes Junior" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sapiente perferendis, id eligendi vitae doloremque, ipsam aperiam iste voluptate, in temporibus quidem reiciendis incidunt! Quisquam consequuntur necessitatibus nostrum vero assumenda!"
      />
      <Post 
        author="Eslen Delanogare"
        content="Post sobre Neurociência!!"
      />
    </>
  )
}