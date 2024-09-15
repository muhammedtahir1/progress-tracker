import { WeekForm } from "./week-form"

const WeekCycle = () => {
  return (
    // Adding shadCN forms
    <div className="flex flex-col items-center ">
        <h1 className="mt-10 font-semibold text-3xl p-2">6 week cycle</h1>
        <p className="text-center max-w-xs mb-10 opacity-75 text-sm">Enter minimum 3 weekly goal / target that you want to achieve.</p>
        <div>
            <WeekForm/>
        </div>
    </div>
  )
}

export default WeekCycle