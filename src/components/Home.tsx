import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div id="Home" className="h-screen w-full bg-black">
      <div className="min-h-screen flex flex-col justify-center items-center p-5 text-center">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl  sm:text-5xl font-bold text-white">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '<code>Welcome to my <span style="color: #27ae60;">Portfolio!</span></code>'
                  )
                  .callFunction((state) => {
                    state.elements.cursor.style.display = "none";
                  })
                  .start();
              }}
            />
          </h2>
          <p className="text-gray-500  sm:text-2xl py-4 max-w-4xl">
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
