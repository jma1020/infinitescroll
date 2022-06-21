import type { GetStaticProps, NextPage } from 'next'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL, API_KEY, IMG_BASE_URL } from '../../shared/constant'
import Image from 'next/image'

interface Results{
  results: MovieData[]
}

interface MovieData {
  adult:boolean,
  id: string,
  original_title: string,
  overview: string,
  popularity: number,
  release_data: string,
  poster_path:string
}

const MoviePage: NextPage<Results> = ({results}) => {
  
  const [page,setPage] = useState(1)

  // useEffect(()=>{
    // async function resdata(){
    //   const {data} = await axios(`${BASE_URL}/movie/popular?api_key=850fc882372c0b34a99f081e7c0c855f&page=2`)
    //   console.log(data)
    // }
    // resdata()
  // },[])
  return(
    <div>
      안녕하세요
      {/* <Image src={`${IMG_BASE_URL}/w1280${results[0].poster_path}`} alt="포스터이미지" width={500} height={500}/> */}
    </div>
  )
}


export async function getStaticProps(){
  const {data} = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=850fc882372c0b34a99f081e7c0c855f`)  

  return {
    props: data
  }
}

export default MoviePage