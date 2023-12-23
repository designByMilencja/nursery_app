"use client"
import { HomePageFilters } from "@/constants/filters"
// import { useRouter, useSearchParams } from "next/navigation";
// import { formUrlQuery } from "@/lib/utils";

const Filters = () => {
  //   const searchParams = useSearchParams();
  //   const router = useRouter();
//   const [active, setActive] = useState<string>("")

  //   const handleTypeClick = (item: string) => {
  //     if (active === item) {
  //       setActive("");
  //       const newUrl = formUrlQuery({
  //         params: searchParams.toString(),
  //         key: "filter",
  //         value: null,
  //       });
  //       router.push(newUrl, { scroll: false });
  //     } else {
  //       setActive(item);
  //       const newUrl = formUrlQuery({
  //         params: searchParams.toString(),
  //         key: "filter",
  //         value: item.toLowerCase(),
  //       });
  //       router.push(newUrl, { scroll: false });
  //     }
  //   };
const active = 'newest'
  return (
    <div className="mt-10 hidden gap-3 md:flex">
      {HomePageFilters.map((item) => (
        <button
          key={item.value}
          onClick={() => {}}
          //   onClickCapture={() => handleTypeClick(item.value)}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${active === item.value ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400" : "bg-light-800 text-light-500 hover:bg-primary-100 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-400"}
        `}
        >
          {item.name}
        </button>
      ))}
    </div>
  )
}

export default Filters
