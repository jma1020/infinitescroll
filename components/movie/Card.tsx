import Image from 'next/image'
import * as Styled from './Card.styled'
import { BASE_URL, API_KEY, IMG_BASE_URL } from '../../shared/constant'

interface MovieData {
  item: {
    adult:boolean,
    id: string,
    original_title: string,
    overview: string,
    popularity: number,
    release_data: string,
    poster_path:string
  }
}


const Card = ({item}:MovieData) => {
  const {adult, id, original_title, overview, popularity, release_data, poster_path} = item
  return(
    <Styled.Container>
      <Styled.ImageContainer>
        <Image src={`${IMG_BASE_URL}/w1280${poster_path}`} alt="포스터이미지" layout='fill' objectFit='contain'/>
      </Styled.ImageContainer>
      <Styled.Title>{original_title}</Styled.Title>
      <Styled.Summary>{overview}</Styled.Summary>
    </Styled.Container>
  )
}


export default Card

