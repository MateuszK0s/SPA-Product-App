import { RequestParams } from '../components/types/api'

const useApi = () => {
  async function fetchData (endpoint: string, params?: RequestParams): Promise<any> {
    let queryParams = ''
    if (params != null) {
      queryParams = new URLSearchParams(
        params as Record<string, string>
      ).toString()
    }
    const response = await fetch(
        `https://reqres.in/api/${endpoint}?${queryParams}`
    )

    if (!response.ok) {
      switch (response.status) {
        case 404:
          throw new Error('404 not found!')
        default:
          throw new Error(`Something went wrong! ${response.statusText}`)
      }
    }

    const data = await response.json()

    return data
  }

  return { fetchData }
}

export default useApi
