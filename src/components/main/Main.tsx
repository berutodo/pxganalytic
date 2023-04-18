import { Lista } from "../lista";
import { Inter } from 'next/font/google'


export function Main ({data}: any) {
    return(
        <main>
        <table className="flex flex-col items-center">
          <tbody>
    <Lista data={data}/>
          </tbody>
        </table>



        <div>
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