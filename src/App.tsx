import { Employees } from "./pages/employees";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router'

const queryClient = new QueryClient()

export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Employees />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}
