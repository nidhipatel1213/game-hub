import useGenre from "@/hooks/useGenre";


const GenreList = () => {
    const {data} = useGenre();
  return (
    <div>
      <ul>{data.map(data => <li key={data.id}>{data.name}</li>)}</ul>
    </div>
  )
}

export default GenreList
