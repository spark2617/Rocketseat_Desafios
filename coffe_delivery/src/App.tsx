import { defaultTheme } from "./style/themes/defalt.ts"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./style/themes/global.ts"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router.tsx"
import { ContentCoffeProvider } from "./content/CoffeContent.tsx"


function App() {
  


  return (
    <>
      <ThemeProvider theme={defaultTheme}>

        <BrowserRouter>

          <ContentCoffeProvider>
              <Router/>
          </ContentCoffeProvider>
        
        </BrowserRouter>
        
          {/* <Header/> */}
          {/* <Home/> */}
          {/* <ServiceDelivery/> */}
          {/* <SuccessPag/> */}


          <GlobalStyle/>
      </ThemeProvider>
    </>
  )
}

export default App
