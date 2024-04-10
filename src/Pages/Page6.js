import Card2 from "../components/Card2";

export default function Page6() {
  // const val = 0;
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-xl sm:text-3xl font-semibold mt-4 sm:mt-24 mb-10">
          Learning paths based on your answers
        </h1>
        <h5 className="text-lg mt-2 font-light">
          Choose one to get started. You can switch anytime.
        </h5>
        <div className="grid sm:grid-cols-2 sm:grid-rows-1 grid-cols-1 grid-rows-2 lg:grid-cols-2 md:grid-rows-1 relative">
          <Card2 />
          <Card2 />
        </div>
      </div>
    </>
  );
}
