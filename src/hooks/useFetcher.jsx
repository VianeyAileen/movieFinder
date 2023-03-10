import { useEffect, useState } from 'react'
import { getMovies } from '../utils/getMovies'

const useFetcher = (query, info) => {
  const [dataState, setDataState] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    const { data } = await getMovies(query)
    if (data.Response !== 'False') {
      setDataState(data.Search)
      console.log(data.Search)
    } else {
      setDataState([])
    }
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [query])

  return { dataState, loading }
}

export default useFetcher
