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
        <div className="flex mx-auto flex-row flex-wrap justify-center items-center gap-2 w-full sm:w-4/5">
          <Search onSearch={handleSearch} />
    <Lista data={data} searchData={searchData}/>
        </div>



        <div className="flex flex-row">
          <a
            href="estilista"
            rel="noopener noreferrer"
          >
            <h2>
              Estilista <span>-&gt;</span>
            </h2>
        
          </a>

          <a
            href="engineer"
            rel="noopener noreferrer"
          >
            <h2>
              Engenheiro <span>-&gt;</span>
            </h2>
        
          </a>

          <a
            href="professor"
            rel="noopener noreferrer"
          >
            <h2>
              Professor <span>-&gt;</span>
            </h2>
       
          </a>

          <a
            href="adventurer"
            rel="noopener noreferrer"
          >
            <h2>
              Aventureiro <span>-&gt;</span>
            </h2>
          </a>
        </div>
      </main>
    )
}