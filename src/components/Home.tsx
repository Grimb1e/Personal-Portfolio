import Typewriter from "typewriter-effect";


const Home = () => {
  return (
    <div id="Home" className="h-screen w-full bg-black">
      <div className="min-h-screen flex flex-col justify-center items-center p-5 text-center">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-6xl  sm:text-5xl font-bold text-white">
           <Typewriter
              options={{
                strings: [
                  "Welcome to my Portfolio",
                  "HI! I'm Grimble",
                  "I'm a Software Developer",
                ],
                autoStart: true,

                loop: true,
              }}
            />
          </h2>
          <p className="text-gray-500 text-2xl sm:text-2xl py-4 max-w-4xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            velit sunt magnam iure, vero distinctio similique aliquam. Error
            odio aperiam maiores, possimus, eum amet a corporis animi, impedit
            quaerat vel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
