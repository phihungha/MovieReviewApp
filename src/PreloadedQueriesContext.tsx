import {createContext} from 'react';
import {PreloadedQueries} from './App';

export const PreloadedQueriesContext =
  createContext<PreloadedQueries>(undefined);
