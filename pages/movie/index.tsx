import type { GetStaticProps, NextPage } from 'next';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { BASE_URL, API_KEY, IMG_BASE_URL } from '../../shared/constant';
import Image from 'next/image';
import Card from '../../components/movie/Card';
import styled from 'styled-components';

interface Results {
  results: MovieData[];
}

interface MovieData {
  adult: boolean;
  id: string;
  original_title: string;
  overview: string;
  popularity: number;
  release_data: string;
  poster_path: string;
}

const MoviePage: NextPage<Results> = ({ results }) => {
  const [page, setPage] = useState<number>(1);
  const [movieData, setMovieData] = useState<MovieData[]>(results);
  const bottom = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (page >= 2) {
      (async function () {
        const { data } = await axios(
          `${BASE_URL}/movie/popular?api_key=850fc882372c0b34a99f081e7c0c855f&page=${page}`
        );
        setMovieData(movieData.concat(data.results));
      })();
    }
  }, [page]);

  return (
    <div>
      <Container>
        {movieData.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </Container>
      <button onClick={() => setPage((prev) => prev + 1)}>
        페이지 상태 증가
      </button>
      <div ref={bottom}>더 불러오는 중~</div>
    </div>
  );
};

export async function getStaticProps() {
  const { data } = await axios(
    `https://api.themoviedb.org/3/movie/popular?api_key=850fc882372c0b34a99f081e7c0c855f`
  );

  return {
    props: data
  };
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;

export default MoviePage;
