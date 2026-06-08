export default function Modal(props) {
  return (
    <>
      <div className="border border-black-500 items-center min-w-xl self-center flex  flex-col justify-center">
        {/* This is the container for Modal */}
        <div className="flex flex-row justify-between">
          <p className="font-bold flex justify-start">Modal title at the top</p>
          <button className="border border-indigo-500  flex flex-end ">
            X
          </button>
        </div>
        {/* Close Modal */}
        <div className="flex self-center flex-col">
          {/* This is the body of Modal */}
          <p>Modal content goes here</p>
          <div>
            <button className="border border-indigo-500">Yes</button>
            <button className="border border-indigo-500">No</button>
          </div>
        </div>
      </div>
    </>
  );
}
