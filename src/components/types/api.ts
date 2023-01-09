export interface ApiResponse<T> {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: T
}

export interface Product {
  id: number
  name: string
  year: number
  color: string
  pantone_value: string
}

export interface RequestParams {
  [key: string]: string | number | undefined
  page?: number
  per_page?: number
}
