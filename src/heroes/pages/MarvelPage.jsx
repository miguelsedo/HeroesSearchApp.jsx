import { HeroeList } from "../components"

export const MarvelPage = () => {
  return (
    <>
    <h1 className="mt-3">Marvel Comics</h1>
    <hr/>
    <HeroeList publisher = 'Marvel Comics'/>
    </>
  )
}
