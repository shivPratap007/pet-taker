"use client"
export default function SearchForm() {
  return (
    <form className="w-full h-full bg-slate-300">
      <input
        type="text"
        className="h-full w-full bg-white rounded-md px-5 outline-none transition focus:bg-white/50  hover:bg-white/30"
        onChange={(e)=> console.log(e.target.value)}
      />
    </form>
  );
}
