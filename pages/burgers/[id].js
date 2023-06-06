import Image from "next/image";

import styles from "../../styles/Burgers.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/items");
  const data = await res.json();

  const paths = data.map((burger) => {
    return {
      params: { id: burger.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`http://localhost:5000/items/${id}`);
  const data = await res.json();

  return {
    props: { burger: data },
  };
};

const Details = ({ burger }) => {
  const router = useRouter();

  return (
    <div className={styles.singleBurger}>
      <h1>{burger.name}</h1>
      <div>
        <Image
          src={`${burger.image}`}
          alt={`${burger.name}`}
          width="200"
          height="200"
          style={{
            Layout: "responsive",
            objectFit: "cover",
          }}
        />
      </div>
      <div>
        <p>{burger.desc}</p>
        <p>Ціна: {burger.price} грн</p>
        {/* <button className={styles.btn} onClick={() => router.push("/burgers")}>
          Back to burgers
        </button> */}
        <Link href="/burgers" className={styles.btn}>
          Всі бургери
        </Link>
      </div>
    </div>
  );
};

export default Details;
