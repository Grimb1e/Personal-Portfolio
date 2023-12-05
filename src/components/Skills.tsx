import { SkillList } from "../helper/SkillList";


const Skills = () => {
  return (
    <div className="bg-black h-screen">
    <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
      <div>
        <p className="text-6xl font-bold border-gray-500 p-2 text-center">
          Skills
        </p>
        <p className="py-6 text-2xl text-gray-500 text-center">
          These are the technologies I've worked with
        </p>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
        {SkillList.map(({ image, name }) => (
          <div className="hover:scale-105 duration-500 py-8 bg-black border border-gray-700 rounded-md">
            <img src={image} alt="" className="w-20 mx-auto " />
            <p className="mt-4">{name}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Skills