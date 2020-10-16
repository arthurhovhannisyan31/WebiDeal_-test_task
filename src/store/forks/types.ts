// todo review
export interface IAction {
  type: string
  payload: any
}

export interface IFork {
  full_name: string
  owner: {
    login: string
  }
  stargazers_count: number
  html_url: string
}

export interface IFetchGitHubForksProps {
  url: string
  page: number
  per_page: number
}
