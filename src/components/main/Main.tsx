import { Lista } from "../lista";


export function Main ({data}: any) {
    return(
        <main>
        <div className="flex flex-col items-center">
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