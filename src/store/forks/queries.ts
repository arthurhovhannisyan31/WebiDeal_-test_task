// deps
import axios from 'axios'
// helpers
import { IFetchGitHubForksProps } from '_/store/forks/types'

export function fetchGitHubForksPage({
  page,
  per_page,
  url,
}: IFetchGitHubForksProps) {
  return axios.get(`${process.env.API_URL}/repos/${url}/forks`, {
    params: {
      page,
      per_page,
    },
  })
}

export function fetchGitHubUser(url: string) {
  return axios.get(`${process.env.API_URL}/repos/${url}`)
}
