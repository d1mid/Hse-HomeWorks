import { Header, Footer, PageBlock } from "./components"
import { AboutUs, HeroMain, Steps, Projects, Reviews, Subscribe } from "./sections"

 export const App = () => {
  return (
      <div className="app-wrapper">
        <PageBlock className="site-header">
            <Header/>
        </PageBlock>
        <main>
            <HeroMain/>
            <AboutUs/>
            <Steps/>
            <Projects/>
            <Reviews/>
            <Subscribe/>
        </main>
        <Footer/>
     </div>
  )
}