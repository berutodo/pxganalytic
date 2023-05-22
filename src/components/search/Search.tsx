import Image from "next/image"
import searchSvg from "../../helpers/icons/search.svg"
export function Search () {
    return (
        <div className="flex justify-center align-center row mt-32">
        <input className="w-96 h-10 border-2 border-slate-500 rounded-lg " type="text" />
        <Image src={searchSvg} width={32} height={32} alt="" />
        </div>
    )
}