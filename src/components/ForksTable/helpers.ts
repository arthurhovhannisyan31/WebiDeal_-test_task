// helpers
import { IRow, IFork } from '_/components/ForksTable/types'

export const rowSelector = ({
  full_name,
  owner: { login },
  stargazers_count,
  html_url,
}: IFork): IRow => ({
  name: full_name,
  owner: login,
  stars: stargazers_count,
  link: html_url,
})
