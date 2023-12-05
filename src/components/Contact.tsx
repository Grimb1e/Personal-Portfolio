const Contact = () => {
  return (
    <div id="Contact" className="w-full h-screen bg-black p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-6xl font-bold border-gray-500 p-2 text-center">
            Contact
          </p>
          <p className="py-6 text-2xl text-gray-500 text-center">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className=" flex justify-center items-center">
          <form className=" flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required={true}
              className="p-2 bg-transparent border-2 border-gray-700 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Email address"
              required={true}
              className="my-4 p-2 bg-transparent border-2 border-gray-700 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={10}
              required={true}
              className="p-2 bg-transparent border-2 border-gray-700 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
