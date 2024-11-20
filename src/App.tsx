import { useReducer } from "react"
import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { initialState, orderReducer } from "./reducers/order-reducer"

function App() {

  const [state, dispatch] = useReducer(orderReducer, initialState)
  
  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>
      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className='p-5 space-y-5'>
          <h2 className='font-black text-4xl'>Menú</h2>
          {state.data.map(item => (
            <MenuItem
              key={item.id}
              dispatch={dispatch}
              item={item}
            />
          ))}

        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <div className='mt-10 space-y-3'>
            {state.order.length ? (
              <>
                <OrderContents
                  order={state.order}
                  dispatch={dispatch}
                />

                <TipPercentageForm
                  dispatch={dispatch}
                  tip={state.tip}

                />

                <OrderTotals
                  order={state.order}
                  tip={state.tip}
                  dispatch={dispatch}
                />
              </>
            ) : (
              <p className=" text-center">la orden esta vacia</p>
            )}
          </div>
        </div>
      </main>

    </>
  )
}

export default App
