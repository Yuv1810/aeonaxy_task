export function Tile(props) {
  const img = props.image;
  const val = props.switch;
  const desc = props.desc;
  const title = props.title;
  return (
    <>
      <div
        className={`tile mt-4 p-2 flex flex-row justify-start items-center w-11/12 sm:w-7/12 h-14
          bg-white rounded-md border-2 ${val === 1 ? "shadow-md shadow-slate-400 border-orange-200" : " border-gray-200"} `}
      >
        <img src={img} style={{ height: "100%" }} className="mr-2 w-10" />
        <h2 className="mr-4">{desc} </h2>
        <p>{title}</p>
      </div>
    </>
  );
}
