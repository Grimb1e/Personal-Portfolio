import { ProjectList } from "../helper/ProjectList";

const Projects = () => {
  return (
    <div id="Projects" className="bg-black w-full md:h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-6xl font-bold border-gray-500 p-2 text-center">
            Projects
          </p>
          <p className="py-6 text-2xl text-gray-500 text-center">
            Check out some of my work right here
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center px-12 sm:px-0">
          {ProjectList.map(({ title, image }) => (
            <div
              key={title}
              className="hover:scale-105 duration-500 pb-5 border rounded-lg  border-gray-700 dark:bg-black"
            >
              <img src={image} alt="" className="rounded-t-md w-full" />
              <h2 className="mt-4">{title}</h2>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
