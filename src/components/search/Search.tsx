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
        <div className="flex justify-center mb-10 align-center row mt-32">
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="w-96 h-10 border-2 border-slate-500 rounded-lg " type="text" />
        <Image src={searchSvg} width={32} height={32} alt="" onClick={handleSearch} />
        </div>
    )
}