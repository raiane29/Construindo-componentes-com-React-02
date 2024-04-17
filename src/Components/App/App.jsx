import Caixa from "../Caixa/Caixa"
import './App.css'
import CaixaNumeros from "../Caixa_Numeros/CaixaNumeros"
import Imagem from "../Imagem/Imagem"
import foto from '../../images/desktop.jpg'
import React from "react"

const App = () => {
    return(
         <>
         <section className="Container">
            <div className="Caixa_Total">
            <Caixa
            h="Get insights that help your business grow."
            p="Discover the benefits of dat analytics and make better decisions regarding revenue, customer experience, and overall efficiency.
            "/>

            <div className="CaixaNumeros">

              <div className="caixa_CaixaNumeros"> 
            <CaixaNumeros 
            num="10k+"
            texto="COMPANIES"
            />
              </div>


              <div className="caixa_CaixaNumeros"> 
            <CaixaNumeros
            num="314"
            texto="TEMPLATES"
            />
               </div>

             <div className="caixa_CaixaNumeros"> 
            <CaixaNumeros
            num="12M+"
            texto="QUERIES"
            />
              </div>

            </div>
            </div>

            <Imagem
            foto={foto}/>
         </section>
         </>
    )
}
export default App