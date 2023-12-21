import Filters from "@/components/home/Filters";
import Filter from "@/components/shared/Filter";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { HomePageFilters } from "@/constants/filters";
import { Metadata } from "next";
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Strona główna | Aplikacja Medykuj",
  description:
    "Medykuj to aplikacja mieszcząca oferty pracy i procedury dla zawodów medycznych.",
}; 

const Home = () => {
  return (
    <>
        <h2 className="text-dark100_light900 mb-[50px]">Nasza aplikacja wychodzi naprzeciw Twoim potrzebom! Jesteś medykiem? To miejsce gdzie możesz się codziennie rozwijać - poszerzając swoje kwalifikacje - przy okazji znajdując pracę! Zarejestruj u nas konto, by korzystać z wszystkich możliwości: ogłoszenia i procedury medyczne - wszystko w jednym miejscu, dla Twojego komfortu. Jesteś pracodawcą - to tutaj moesz znaleźć idealnego dla Ciebie pracownika, specjalistę, który nieustannie się rozwija. Niżej przedstawiamy najnowsze artykuły z branży medycznej dostępne bez konieczności logowania. Zapraszamy!</h2>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">Aktualności</h1>
      <Link href="/add-news" className="flex justify-end max-sm:w-full">
        <button className="primary-gradient m-2 min-h-[46px] rounded-lg px-4 py-3 text-light-900">Dodaj</button>
      </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search-outline.svg"
          placeholder="Szukaj artykułu"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
        <Filters/>

      <h2>Rewolucja w leczeniu chorób genetycznych.</h2>
      <Image src="/assets/images/blood.jpg" alt="blood picture" width={300} height={600} />
      <p>Nowa terapia genowa stanowi obiecujący przełom w dziedzinie leczenia chorób genetycznych. Ta innowacyjna metoda pozwala na precyzyjne modyfikowanie i naprawianie wadliwych genów, otwierając nowe perspektywy dla pacjentów dotkniętych dziedzicznymi schorzeniami. Dzięki technologii genetycznej, badacze i lekarze mają teraz możliwość wprowadzania zmian na poziomie DNA, co może prowadzić do skuteczniejszych i bardziej spersonalizowanych terapii. Wraz z postępem w dziedzinie terapii genowej, otwierają się nowe horyzonty nadziei dla osób dotkniętych rzadkimi chorobami genetycznymi, obiecując rewolucję w podejściu do leczenia tego rodzaju schorzeń... &rarr; </p>
    </>
  )
}

export default Home

  
    
      // <HomeFilters />
      // <div className="mt-10 flex w-full flex-col gap-6">
      //   {result.questions.length > 0 ? (
      //     result.questions.map((question) => (
      //       <QuestionCard
      //         key={question._id}
      //         _id={question._id}
      //         title={question.title}
      //         tags={question.tags}
      //         author={question.author}
      //         upvotes={question.upvotes}
      //         views={question.views}
      //         answers={question.answers}
      //         createdAt={question.createdAt}
      //       />
      //     ))
      //   ) : (
      //     <NoResult
      //       title="There's no question to show"
      //       description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
      //   discussion. our query could be the next big thing others learn from. Get
      //   involved! 💡"
      //       link={"/ask-questions"}
      //       linkTitle="Ask a Question"
      //     />
      //   )}
      // </div>
      // <div className="mt-10">
      //   <Pagination
      //     pageNumber={searchParams?.page ? +searchParams.page : 1}
      //     isNext={result.isNext}
      //   />
