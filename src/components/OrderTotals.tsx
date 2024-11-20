import { useMemo,Dispatch } from "react"
import type { OrderItems } from "../types/index";
import { formatCurrency } from "../helpers"
import { OrderAction } from "../reducers/order-reducer";

type OrderTotalsProps = {
    order: OrderItems[],
    tip: number,
    dispatch: Dispatch<OrderAction>
}

export default function OrderTotals({ order, tip, dispatch }: OrderTotalsProps) {
    const subtotalAmaunt = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    const tipAmount = useMemo(() => subtotalAmaunt * tip, [tip, order])
    const totalAmount = useMemo(() => subtotalAmaunt + tipAmount, [tip, order])
    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propina:</h2>
                <p>Subtotal a pagar: {''}
                    <span className="font-bold">{formatCurrency(subtotalAmaunt)}</span>
                </p>
                <p>Propina: {''}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>
                <p>Total a Pagar: {''}
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>
            </div>

            <button
                className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
                disabled={totalAmount === 0}
                onClick={() => dispatch({type:'place-order'})}
            >
                Guardar Orden
            </button>
        </>
    )
}
