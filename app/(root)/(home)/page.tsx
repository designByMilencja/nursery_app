import Article from "@/components/articles/Article"
import Filters from "@/components/home/Filters"
import Filter from "@/components/shared/Filter"
import LocalSearch from "@/components/shared/search/LocalSearch"
import { HomePageFilters } from "@/constants/filters"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Strona główna | Aplikacja Medykuj",
  description: "Medykuj to aplikacja mieszcząca oferty pracy i procedury dla zawodów medycznych.",
}

const articles = [
  {
    _id: "1",
    title: "Rewolucja w leczeniu chorób genetycznych",
    tags: [
      { _id: "tag1", name: "medycyna" },
      { _id: "tag2", name: "technika" },
    ],
    src: "/assets/images/blood.jpg",
    createdAt: "2023-01-15",
    desc: "Nowa terapia genowa stanowi obiecujący przełom w dziedzinie leczenia chorób genetycznych. Ta innowacyjna metoda pozwala na precyzyjne modyfikowanie i naprawianie wadliwych genów, otwierając nowe perspektywy dla pacjentów dotkniętych dziedzicznymi schorzeniami..."
  },
  {
    _id: "2",
    title: "Przeszczep serca u najmłodszego pacjenta na świecie",
    tags: [
      { _id: "tag3", name: "kardiologia" },
      { _id: "tag4", name: "medycyna" },
    ],
    src: "/assets/images/surgery.jpg",
    createdAt: "2023-02-02",
    desc: 'Nowa terapia genowa stanowi obiecujący przełom w dziedzinie leczenia chorób genetycznych. Ta innowacyjna metoda pozwala na precyzyjne modyfikowanie i naprawianie wadliwych genów, otwierając nowe perspektywy dla pacjentów dotkniętych dziedzicznymi schorzeniami...'
  },
]

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">Aktualności medyczne</h1>
        <Link href="/add-news" className="flex justify-end max-sm:w-full">
          <button className="primary-gradient m-2 min-h-[46px] rounded-lg px-4 py-3 text-light-900">Dodaj nowy artykuł</button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch route="/" iconPosition="left" imgSrc="/assets/icons/search-outline.svg" placeholder="Szukaj artykułu" otherClasses="flex-1" />
        <Filter filters={HomePageFilters} otherClasses="min-h-[56px] sm:min-w-[170px]" containerClasses="hidden max-md:flex" />
      </div>
      <Filters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {articles.map((article) => (
          <Article key={article._id} desc={article.desc} _id={article._id} title={article.title} src={article.src} tags={article.tags} createdAt={article.createdAt} />
        ))}
      </div>
    </>
  )
}

export default Home
