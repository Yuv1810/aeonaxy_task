export default function Button(props) {
  // const fun = props.fun();
  return (
    <>
      <button
        onClick={props.onClick}
        className="bg-black text-center text-zinc-50 rounded-md w-36 h-10 mt-6 mb-6"
      >
        Continue
      </button>
    </>
  );
}
