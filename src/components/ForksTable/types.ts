export interface IFork {
  full_name: string
  owner: {
    login: string
  }
  stargazers_count: number
  html_url: string
}

export interface IRow {
  name: string
  owner: string
  stars: number
  link: string
}
