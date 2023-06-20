import { useState } from "react";
import { Lista } from "../lista";
import { Search } from "../search";


export function Main ({data}: any) {
  const [searchData, setSearchData] = useState()
  function handleSearch(item:any){
    setSearchData(item)
  }
    return(
        <main>
        <div className="flex mx-auto flex-row flex-wrap justify-center items-center gap-2 w-full sm:w-4/5 mb-10">
          <Search onSearch={handleSearch} />
    <Lista data={data} searchData={searchData}/>
        </div>
      </main>
    )
}