"use client"
import Image from "next/image"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Props {
  filters: {
    name: string
    value: string
  }[]
  otherClasses?: string
  containerClasses?: string
}

const Filter = ({ filters, otherClasses, containerClasses }: Props) => {
  return (
    <div className={`relative ${containerClasses}`}>
      <Select>
        <SelectTrigger className={`${otherClasses} body-regular light-border background-light800_dark300 text-dark500_light700 gap-2 border px-5 py-2.5`}>
          <Image src="/assets/icons/filter.svg" alt="filter icon" width={20} height={20} className="invert-colors cursor-pointer" />
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder="Filtruj" />
          </div>
        </SelectTrigger>
        <SelectContent className="text-dark500_light700 small-regular cursor-pointer border-none bg-light-900  dark:bg-dark-300">
          <SelectGroup>
            {filters.map((filter) => (
              <SelectItem key={filter.value} value={filter.value} className="cursor-pointer focus:bg-light-800  dark:focus:bg-dark-400">
                {filter.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default Filter
