export interface CreateAIRecord {
  id?: number;
  userId: string;
  status: string;
  query: any;
  data?: any;
  message?: string;
  error?: string;
  createdAt: Date;
  updatedAt?: Date;
}

export interface Pagination {
  page: number
  limit: number
}