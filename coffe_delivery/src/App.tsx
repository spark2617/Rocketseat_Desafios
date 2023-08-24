import { Header } from "./components/Header.tsx"
import { defaultTheme } from "./style/themes/defalt.ts"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./style/themes/global.ts"
import { Home } from "./pag/home/index.tsx"
import { ServiceDelivery } from "./pag/checkout/Index.tsx"
import { SuccessPag } from "./pag/sucess/index.tsx"

function App() {
  

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
          <Header/>
          {/* <Home/> */}
          {/* <ServiceDelivery/> */}
          <SuccessPag/>


          <GlobalStyle/>
      </ThemeProvider>
    </>
  )
}

export default App
