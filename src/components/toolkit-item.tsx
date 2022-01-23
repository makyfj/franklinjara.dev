import type { IconType } from "react-icons"

interface ToolkitItemProps {
  icon: IconType
  name: string
}

const ToolkitItem = ({ icon, name }: ToolkitItemProps) => {
  return (
    <div className="flex space-x-2 justify-center items-center">
      <span>{icon({ className: "w-6 h-6" })}</span>
      <p className="text-sm">{name}</p>
    </div>
  )
}

export default ToolkitItem
