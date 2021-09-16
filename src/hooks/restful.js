import { createContext, useContext } from 'react';
import { useGet, useMutate, RestfulProvider } from 'restful-react';

const MockContext = createContext(undefined);
const RestfulMockProvider = MockContext.Provider;

const useGetWithCustomMock = (params) => {
  const mock = useContext(MockContext);
  return useGet({ mock, ...params });
};

const useMutateWithCustomMock = (params) => {
  const mock = useContext(MockContext);
  return useMutate({ mock, ...params });
};

export {
  RestfulMockProvider,
  RestfulProvider,
  useGetWithCustomMock as useGet,
  useMutateWithCustomMock as useMutate,
};
