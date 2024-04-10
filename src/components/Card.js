export default function Card() {
  const val = 1;
  return (
    <>
      <div
        className={`flex justify-center h-48 w-48 items-center bg-white rounded-md border-2 ${val === 1 ? "shadow-md shadow-slate-400 border-orange-200" : " border-gray-200"} pl-2 pr-2 mt-10 ml-2 mr-2`}
      >
        <h5 className="text-lg mt-2 font-light">
          Choose the highest level you feel confident in - you can always adjust
          later.
        </h5>
      </div>
    </>
  );
}
