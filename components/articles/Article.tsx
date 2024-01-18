import React from "react"
import Link from "next/link"
import Tag from "../shared/Tag"

interface Props {
  _id: string
  title: string
  desc: string
  tags: {
    _id: string
    name: string
  }[]
  src: string
  createdAt: string
}
const Article = ({ _id, title, tags, src, createdAt, desc }: Props) => {
  return (
    <div className="card-wrapper mt-8 flex w-full flex-col gap-5 rounded-[10px] p-2 sm:px-11 md:items-center">
      <div className="mt-8 flex flex-col gap-2">
        <p className="body-regular text-dark500_light700">{createdAt}</p>
        <Link href={`/article/${_id}`}>
          <h3 className="sm:h3-semibold base-semibold text-dark200_light900 max-w-[500px]">{title}</h3>
        </Link>
        <div className="h-[25vh] w-full max-w-[500px] rounded-lg bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('${src}')` }}></div>
        <p className="body-regular text-dark500_light700 my-1.5 max-w-[500px] flex-1 text-justify ">{desc}</p>
        <div className="my-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag _id={tag._id} name={tag.name} key={tag._id} />
          ))}
        </div>
        <Link href={`/article/${_id}`} className="mb-8 flex">
          <button className="paragraph-medium min-h-[46px] w-full rounded-lg bg-primary-500 px-4 py-3 text-light-900 hover:bg-primary-500 dark:bg-primary-500 dark:text-light-900">Zobacz artykuł</button>
        </Link>
      </div>
    </div>
  )
}

export default Article
