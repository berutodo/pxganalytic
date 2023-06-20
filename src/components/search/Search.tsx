import Image from "next/image"
import { useState } from "react";
import searchSvg from "../../helpers/icons/search.svg"
export function Search ({onSearch}: any) {
    const [searchValue, setSearchValue] = useState('');
    const handleSearch = () => {
        onSearch(searchValue);
      };
    return (
        <div className="flex justify-center mb-10 align-center items-center row mt-32">
        <input placeholder="Leaves, Fashion Shoes, Armadillo Claw" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="w-52 md:w-96 h-10 border-2 border-slate-500 rounded-l-lg " type="text" />
        <div className="cursor-pointer border-2 border-slate-500 border-l-0 rounded-r-lg w-14 flex items-center justify-center h-10 ">
        <Image  src={searchSvg} width={28} height={28} alt="" onClick={handleSearch} />
        </div>
        </div>
    )
}