import { Employees } from "./pages/employees";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Employees />
      </QueryClientProvider>
    </>
  )
}
