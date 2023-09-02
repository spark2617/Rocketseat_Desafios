import { createContext, ReactNode } from "react"

import expressoTradicional from "../assets/imgCard/expressoTradicional.svg"
import expressoAmericano from "../assets/imgCard/expressoAmericano.svg";
import expressoCremoso from "../assets/imgCard/expressoCremoso.svg";
import expressoGelado from "../assets/imgCard/expressoGelado.svg";
import cafeComLeite from "../assets/imgCard/CafeComLeite.svg";
import latte from "../assets/imgCard/latte.svg";
import capuccino from "../assets/imgCard/capuccino.svg";
import macchiato from "../assets/imgCard/macchiato.svg";
import mocaccino from "../assets/imgCard/mocaccino.svg";
import chocolateQuente from "../assets/imgCard/chocolateQuente.svg";
import cubano from "../assets/imgCard/cubano.svg";
import havaiano from "../assets/imgCard/havaiano.svg";
import arabe from "../assets/imgCard/Árabe.svg";
import irlandes from "../assets/imgCard/Irlandês.svg";


interface Coffe{
    
    id:number,
    name:string,
    description:string,
    categoria:string[],
    price:string,
    urlImg:string
}

interface CoffeeContextType{
    listCoffe:Coffe[]
}

interface CoffeeContextProps{
    children: ReactNode
}


const listCoffe:Coffe[]=[
    {
        id:1,
        name:"Expresso Tradicional",
        description:"O tradicional café feito com água quente e grãos moídos",
        categoria:["Tradicional"],
        price:"9,90",
        urlImg:expressoTradicional
        
    },
    {
        id: 2,
        name: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        categoria: ["Tradicional"],
        price: "9,90",
        urlImg: expressoAmericano,
      },
      {
        id: 3,
        name: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        categoria: ["Tradicional"],
        price: "9,90",
        urlImg: expressoCremoso,
      },
      {
        id: 4,
        name: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        categoria: ["Tradicional", "Gelado"],
        price: "9,90",
        urlImg: expressoGelado,
      },
      {
        id: 5,
        name: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        categoria: ["Tradicional", "Com Leite"],
        price: "9,90",
        urlImg: cafeComLeite,
      },
      {
        id: 6,
        name: "Latte",
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        categoria: ["Tradicional", "Com Leite"],
        price: "9,90",
        urlImg: latte,
      },
      {
        id: 7,
        name: "Capuccino",
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        categoria: ["Tradicional", "Com Leite"],
        price: "9,90",
        urlImg: capuccino,
      },
      {
        id: 8,
        name: "Macchiato",
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        categoria: ["Tradicional", "Com Leite"],
        price: "9,90",
        urlImg: macchiato,
      },
      {
        id: 9,
        name: "Mocaccino",
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        categoria: ["Tradicional", "Com Leite"],
        price: "9,90",
        urlImg: mocaccino,
      },
      {
        id: 10,
        name: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        categoria: ["Especial", "Com Leite"],
        price: "9,90",
        urlImg: chocolateQuente,
      },
      {
        id: 11,
        name: "Cubano",
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        categoria: ["Especial", "Alcoólico", "Gelado"],
        price: "9,90",
        urlImg: cubano,
      },
      {
        id: 12,
        name: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        categoria: ["Especial"],
        price: "9,90",
        urlImg: havaiano,
      },
      {
        id: 13,
        name: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        categoria: ["Especial"],
        price: "9,90",
        urlImg: arabe,
      },
      {
        id: 14,
        name: "Irlandês",
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        categoria: ["Especial", "Alcoólico"],
        price: "9,90",
        urlImg: irlandes,
      },
]


export const CoffeeContext=createContext({} as CoffeeContextType)

export function ContentCoffeProvider({ children }: CoffeeContextProps){


    
    return(
        
        <CoffeeContext.Provider value={{ listCoffe }}>
      
            {children}
        </CoffeeContext.Provider>
        
    )
}

