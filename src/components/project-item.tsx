import { PinnedRepositories } from "@/hooks/useGitHub"

interface ProjectItemProps {
  projectItems: PinnedRepositories[]
}

const ProjectItem = ({ projectItems }: ProjectItemProps) => {
  return (
    <div className="grid grid-cols-1 justify-center items-center gap-4 mx-auto max-w-sm sm:max-w-lg p-2">
      {projectItems.map((project, index) => (
        <div
          className="grid grid-cols-2 bg-slate-200 dark:bg-slate-700 shadow shadow-xl justify-items-center p-3 rounded"
          key={index}
        >
          <h2>{project.repo}</h2>
          <p>{project.owner}</p>
          <p>{project.description}</p>
          <p>{project.language}</p>
          <p>{project.languageColor}</p>
          <p>{project.stars}</p>
          <p>{project.forks}</p>
          <p>Link</p>
          <p>Website</p>
        </div>
      ))}
    </div>
  )
}

export default ProjectItem
