import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, []);

  return (
    <div className="not-found">
      <h1>Ой...</h1>
      <h2>Такої сторінки не вснує</h2>
      <p>
        Переходжу <Link href="/">головну сторінку</Link> через 4 секунди...
      </p>
    </div>
  );
};

export default NotFoundPage;
