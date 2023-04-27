import { Lista } from "../lista";


export function Main ({data}: any) {
    return(
        <main>
        <div className="flex mx-auto flex-row flex-wrap justify-center items-center gap-2 w-full sm:w-4/5">
    <Lista data={data}/>
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