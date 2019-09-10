import React from "react"
import Container from "../components/container"
import styles from "./about-css-modules.module.css"
console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.usersname}</h2>
      <p classname={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default () => (
  <Container>
    <h1>About CSS Modules</h1>
    <p>CSS modules are cool</p>
  </Container>
)
