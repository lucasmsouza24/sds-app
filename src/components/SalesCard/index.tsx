import "./styles.css"
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from "../NotificationButton";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import api from "../../Api";
import { Sale } from "../../models/sale";

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(new Date());
    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {
        const dmin = minDate.toISOString().slice(0, 10);
        const dmax = maxDate.toISOString().slice(0, 10);

        api.get(`/sales?minDate=${dmin}&maxDate=${dmax}`)
        .then(({status, data}) => {
            console.log(status);
            console.log(data);
            setSales(data.content);
        })
        .catch(error => {
            console.error(error);
        });
    }, [minDate, maxDate]);

    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>

            {/* inputs */}
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker 
                        selected={minDate}
                        onChange={((date: Date) => setMinDate(date))}
                        className="dsmeta-form-control"
                        dateFormat={"dd/MM/yyyy"}
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker 
                        selected={maxDate}
                        onChange={((date: Date) => setMaxDate(date))}
                        className="dsmeta-form-control"
                        dateFormat={"dd/MM/yyyy"}
                    />
                </div>
            </div>

            {/* table */}
            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show596">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Deals</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>

                    {/* body */}
                    <tbody>
                        {sales.map(({id, sellerName, deals, visited, date, amount}) => {
                            return (
                                <tr key={id}>
                                    <td className="show992">#{id}</td>
                                    <td className="show992">{date}</td>
                                    <td>{sellerName}</td>
                                    <td>{visited}</td>
                                    <td>{deals}</td>
                                    <td>R$ {amount}</td>
                                    <td>
                                        <div className="dsmeta-red-btn-container">
                                            <NotificationButton />
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SalesCard;