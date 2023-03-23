import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { useQuery } from '@tanstack/react-query'
import request from 'graphql-request'
import { useRouter } from 'next/router'
import { Button, Flex } from '@chakra-ui/react'

// utils
import { Movie } from '../utils/types'

// graphql
import { moviesDocument } from '../graphql/movies'

// components
import NavLayout from '@/layouts/nav-layout'
import { MoviesTable } from '@/components/movies-table/movies-table'
import { Loader } from '@/components/loader/loader'

const URL = process.env.NEXT_PUBLIC_GRAPHQL_URL || ''

const Home: NextPage = () => {
  
  // state
  const [currentPage, setCurrentPage] = React.useState<number>(1)

  // hooks
  const router = useRouter()
  
  // data fetching
  const { isLoading, isFetching, isPreviousData, isError, data } = useQuery({
    queryKey: ['movies', currentPage],
    queryFn: async () => request(URL, moviesDocument, { perPage: 20, page: currentPage }),
    keepPreviousData: true
  })

  // memos
  const movies = React.useMemo(() => {
    if(!data) {
      return []
    }
    return data.Page?.media?.map(media => media as Movie)
  }, [data])

  // methods
  const onNext = React.useCallback(() => {
    router.replace({
      query: { ...router.query, page: currentPage + 1}
    })
  }, [currentPage, router])
  
  const onPrevious = React.useCallback(() => {
    router.replace({
      query: { ...router.query, page: currentPage - 1}
    })
  }, [currentPage, router])

  // effects
  React.useEffect(() => {
    if (router.query.page !== undefined && !Array.isArray(router.query.page)) {
      setCurrentPage(parseInt(router.query.page, 10))
    }
  }, [router.query.page])

  if (isLoading) return  (
    <Flex justifyContent='center' alignItems='center' height='100vh'>
      <Button isLoading variant='ghost'   spinner={<Loader size={100} color='teal' />} />
    </Flex>
  )

  if (isError) return <p>Error: Something went wrong fetching data, please try again later</p>

  return (
    <>
      <Head>
        <title>GE Frontend Task</title>
        <meta
          name='description'
          content='GE Frontend Task'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <NavLayout>
        {movies && (
          <MoviesTable
            currentPage={currentPage}
            onNext={onNext}
            onPrevious={onPrevious}
            movies={movies}
            hasMore={data?.Page?.pageInfo?.hasNextPage}
            isPreviousData={isPreviousData}
            isFetching={isFetching}
          />
        )}
      </NavLayout>
    </>
  )
}

export default Home
