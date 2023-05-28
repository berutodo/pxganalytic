import Image from "next/image"
import { useState } from "react";
import searchSvg from "../../helpers/icons/search.svg"
export function Search ({onSearch}: any) {
    const [searchValue, setSearchValue] = useState('');
    const handleSearch = () => {
        // Realize a lógica de busca e obtenha os resultados
        const searchData = []; // Resultado da busca (você precisa implementar isso)
        onSearch(searchValue); // Chame a função do componente pai com os resultados da busca
      };
    return (
        <div className="flex justify-center mb-10 align-center items-center row mt-32">
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="w-96 h-10 border-2 border-slate-500 rounded-l-lg " type="text" />
        <div className="cursor-pointer border-2 border-slate-500 border-l-0 rounded-r-lg w-14 flex items-center justify-center h-10 ">
        <Image  src={searchSvg} width={28} height={28} alt="" onClick={handleSearch} />
        </div>
        </div>
    )
}