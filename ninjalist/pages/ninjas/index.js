import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'

// runs on build time
// automatically gets passed on the prop object of the component
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}

const Ninjas = ({ ninjas }) => {
  return ( 
    <div>
      <h1>All Ninjas</h1>
      { ninjas.map(ninja => (
        <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ ninja.name }</h3>
          </a>
        </Link>
      )) }
    </div>
   );
}
 
export default Ninjas;