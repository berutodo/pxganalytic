export function Modal ({x}: any){
    return (
        <div className="w-96 h-96 absolute z-10 bg-black border-2 mx-auto">
            <p className="text-2xl">{x}</p>
        </div>
    )
}