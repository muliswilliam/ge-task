import { graphql } from '../gql'


export const moviesDocument = graphql(`
  query GetMovies($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(
        type: ANIME
        sort: START_DATE
        genre_in: ["ACTION"]
        startDate_greater: 20200000
      ) {
        id
        title {
          native
        }
        externalLinks {
          url
        }
      }
    }
  }
`)
