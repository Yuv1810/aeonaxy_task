import images from "../assets/images1.png";

export default function Card2() {
  const val = 0;
  return (
    <>
      <div
        className={`flex justify-center h-48 w-80 items-center bg-white lg:w-96 rounded-md border-2 ${val === 1 ? "shadow-md shadow-slate-400 border-orange-200" : " border-gray-200"} p-8 mt-10 ml-2 mr-2 relative`}
      >
        <h5 className="text-base mt-2 font-light lg:text-lg">
          <h1 className="font-medium">Foundational Math</h1> Build your
          foundational skills in algebra, geometry, and probability.
        </h5>
        <img src={images} style={{ height: "100%", width: "100%" }} />
      </div>
    </>
  );
}
