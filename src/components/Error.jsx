import { IoReloadCircleSharp } from "react-icons/io5";
import { BiSolidError } from "react-icons/bi";
const Error = () => {
  return (
    <div className='bg-black flex flex-col items-center h-screen text-white justify-center'>
      <h1 className='text-7xl items-center flex text-center text-red-700 font-bold animate-pulse'>
      <BiSolidError className="text-yellow-400" />
      Error 404 Occured!!</h1>
      <h1 className='flex mt-10 text-4xl p-5 
        rounded-lg font-semibold items-center gap-2 transition-colors cursor-pointer text-blue-500'
      >
        Try reloading the Page....
        <IoReloadCircleSharp className="animate-spin" />
      </h1>
    </div>
  )
}

export default Error