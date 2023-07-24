import axios from 'axios';
import queryString from 'query-string';
import { CompoundInterestInterface, CompoundInterestGetQueryInterface } from 'interfaces/compound-interest';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCompoundInterests = async (
  query?: CompoundInterestGetQueryInterface,
): Promise<PaginatedInterface<CompoundInterestInterface>> => {
  const response = await axios.get('/api/compound-interests', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCompoundInterest = async (compoundInterest: CompoundInterestInterface) => {
  const response = await axios.post('/api/compound-interests', compoundInterest);
  return response.data;
};

export const updateCompoundInterestById = async (id: string, compoundInterest: CompoundInterestInterface) => {
  const response = await axios.put(`/api/compound-interests/${id}`, compoundInterest);
  return response.data;
};

export const getCompoundInterestById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/compound-interests/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCompoundInterestById = async (id: string) => {
  const response = await axios.delete(`/api/compound-interests/${id}`);
  return response.data;
};
