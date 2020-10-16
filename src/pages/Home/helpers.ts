// helpers
import { RootState } from '_/store/store'
import { moduleName } from '_/store/forks/constants'

export const forksSelector = (state: RootState) => state[moduleName]
