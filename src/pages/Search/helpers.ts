// helpers
import { RootState } from '_/store/store'
import { moduleName } from '_/store/forks/constants'

export const forksSelector = (state: RootState) => state[moduleName]

export const isPageExist = (
  totalCount: number,
  page: number,
  rowsPerPage: number
) => totalCount - (page - 1) * rowsPerPage > 0

export const pageNormalize = (page: number) => (page <= 0 ? 1 : page)
