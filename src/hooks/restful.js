import { createContext, useContext } from 'react';
import { useGet, useMutate, RestfulProvider } from 'restful-react';

const MockContext = createContext(undefined);
const RestfulMockProvider = MockContext.Provider;

const useGetWithCustomMock = (mockKey, params) => {
  const mocks = useContext(MockContext);
  const mock = mocks ? mocks[mockKey] : undefined;
  return useGet({ mock, ...params });
};

const useMutateWithCustomMock = (mockKey, params) => {
  const mocks = useContext(MockContext);
  const mock = mocks ? mocks[mockKey] : undefined;
  return useMutate({ mock, ...params });
};

export {
  RestfulMockProvider,
  RestfulProvider,
  useGetWithCustomMock,
  useMutateWithCustomMock,
};
