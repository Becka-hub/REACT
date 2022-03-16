import React, { FC ,createContext} from 'react'
import Personne from './components/Personne'
const App: FC = () => {
  // const name: string = "Pedro"
  // const age: number = 23
  // const isMarried: boolean = false

  // const getName=(name:string):number =>{
  //    if(name==="Pedro"){
  //      return 20;
  //    }else{
  //      return 0;
  //    }
  // }
  interface AppContextInterface{
    name:string;
    age:number;
    country:string;
  }
  const AppContext= createContext<AppContextInterface|null>(null);
  
  const contextValue:AppContextInterface={
    name:"Pedro",
    age:20,
    country:"Brasil"
  }
  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <Personne name='Beckas' age={23} email='MAMINIAINAZAIN@gmail.com'/>
    </div>
    </AppContext.Provider>
  )
}

export default App
