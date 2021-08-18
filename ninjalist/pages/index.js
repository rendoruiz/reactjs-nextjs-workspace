import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quisquam nisi, amet quo quidem tenetur obcaecati placeat voluptate exercitationem vel ullam atque. Repellendus animi dolorum laboriosam rem similique facilis praesentium!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quisquam nisi, amet quo quidem tenetur obcaecati placeat voluptate exercitationem vel ullam atque. Repellendus animi dolorum laboriosam rem similique facilis praesentium!</p>
      <Link href="/ninjas"><a>See Ninja Listing</a></Link>
    </div>
  )
}
