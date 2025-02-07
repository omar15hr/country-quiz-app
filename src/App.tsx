

function App() {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="flex items-center justify-center z-10 h-screen">
      <div className="p-5 w-[70%] h-[600px] flex flex-col gap-10">

        <div className="flex flex-row justify-between items-center">
          <h1 className="text-4xl text-left text-white">Country Quiz App</h1>
          <div className="flex flex row items-center justify-center points-counter text-white p-1 rounded-full w-30 text-sm shadow-xl">
            <span>2/10 Points</span>
          </div>
        </div>

        <div className="flex flex-col gap-5 items-center justify-center h-full w-full bg-[#343964] rounded-xl shadow-xl">

          <div>
            <div className="flex flex-row gap-5">
              {numbers.map((number) => (
                <div key={number}>{number}</div>
              ))}
            </div>
          </div>

          <div>questions</div>

          <div>answers</div>

        </div>

      </div>
    </div>
  )
}

export default App
