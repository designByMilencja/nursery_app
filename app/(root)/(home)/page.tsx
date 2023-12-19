import Image from "next/image"
import Link from "next/link"
const Home = () => {
  return (
    <>
      <div>
        <p className="mb-[20px]"> --- Opis aplikacji --- </p>
        <h1 className="h1-bold text-dark100_light900">Opieka medyczna przyszłości</h1>
        <h2 className="text-dark100_light900 mb-[50px]">Nasza aplikacja wychodzi naprzeciw Twoim potrzebom! Jesteś medykiem? To miejsce gdzie możesz się codziennie rozwijać - poszerzając swoje kwalifikacje - przy okazji znajdując pracę! Zarejestruj u nas konto, by korzystać z wszystkich możliwości: ogłoszenia i procedury medyczne - wszystko w jednym miejscu, dla Twojego komfortu. Jesteś pracodawcą - to tutaj moesz znaleźć idealnego dla Ciebie pracownika, specjalistę, który nieustannie się rozwija. Niżej przedstawiamy najnowsze artykuły z branży medycznej dostępne bez konieczności logowania. Zapraszamy!</h2>
      </div>
      <p>--- przycisk dla admina ---</p>
      <Link href="/add-news">
        <button className="primary-gradient m-2 min-h-[46px] rounded-lg px-4 py-3 text-light-900">Dodaj aktualności</button>
      </Link>
      <p className="mb-[20px]"> --- Aktualności - widoczne dla wszystkich bez koniecznosci logowania ---</p>

      <h2>Rewolucja w leczeniu chorób genetycznych.</h2>
      <Image src="/assets/images/blood.jpg" alt="blood picture" width={300} height={600} />
      <p>Nowa terapia genowa stanowi obiecujący przełom w dziedzinie leczenia chorób genetycznych. Ta innowacyjna metoda pozwala na precyzyjne modyfikowanie i naprawianie wadliwych genów, otwierając nowe perspektywy dla pacjentów dotkniętych dziedzicznymi schorzeniami. Dzięki technologii genetycznej, badacze i lekarze mają teraz możliwość wprowadzania zmian na poziomie DNA, co może prowadzić do skuteczniejszych i bardziej spersonalizowanych terapii. Wraz z postępem w dziedzinie terapii genowej, otwierają się nowe horyzonty nadziei dla osób dotkniętych rzadkimi chorobami genetycznymi, obiecując rewolucję w podejściu do leczenia tego rodzaju schorzeń... &rarr; </p>
    </>
  )
}

export default Home
