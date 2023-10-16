const Contact = () => {
  return (
    <div className="text-center flex flex-col gap-5">
      <div>
        <h1 className="font-bold text-lg mt-8 mb-2">This is Contact US</h1>
      </div>
      <div>
        <input
          type="text"
          className="border border-black rounded-md py-1 px-2"
          placeholder="name"
        />
      </div>
      <div>
        <input
          type="text"
          className="border border-black rounded-md py-1 px-2"
          placeholder="message"
        />
      </div>
      <div>
        <button className="bg-green-200 px-5 py-1 rounded-md">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
