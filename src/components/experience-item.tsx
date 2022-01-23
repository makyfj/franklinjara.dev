interface ExperienceItemProps {
  title: string
  company: string
  date: string
  description: string
}

const ExperienceItem = ({
  title,
  company,
  date,
  description,
}: ExperienceItemProps) => {
  return (
    <div className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded p-4 my-2 mx-auto shadow shadow-xl">
      <div className="mb-4 text-center">
        <h2 className="text-lg sm:text-xl">{title}</h2>
        <p className="text-sm sm:text-md">{date}</p>
      </div>
      <h3 className="text sm:text-lg mb-2">{company}</h3>
      <p>{description}</p>
    </div>
  )
}

export default ExperienceItem
