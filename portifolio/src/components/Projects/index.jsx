import React from 'react'
import ObjProjects from "../../ObjProjects/index";
import styles from "./Projects.module.css";
const Projects = () => {
  return (
    <section className={styles.container} id="projetos">
      <h1 className={styles.title}>Projetos</h1>
        <div className={styles.projectsCard}>
          {ObjProjects.map((item) => (
            <div key={item.title}>
              <div className={styles.projectsDescription}>
              <a href={item.link}target="_blank"> 
                <img src={item.img} alt={item.title} />
                
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Projects
