// helpers
import {
  GET_FORKS_PAGE_REQUEST,
  GET_FORKS_COUNT_REQUEST,
} from '_/store/forks/constants'
import { IFetchGitHubForksProps } from '_/store/forks/types'

export const getForksCountAction = (url: string) => ({
  type: GET_FORKS_COUNT_REQUEST,
  payload: url,
})

export const getForksPageAction = (params: IFetchGitHubForksProps) => ({
  type: GET_FORKS_PAGE_REQUEST,
  payload: params,
})
