// helpers
import { GET_FORKS_REQUEST } from '_/store/forks/constants'

export const getForksAction = (source: string) => ({
  type: GET_FORKS_REQUEST,
  payload: source,
})

export const getForksPaginationAction = () => ({})
