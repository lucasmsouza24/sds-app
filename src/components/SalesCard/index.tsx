import "./styles.css"
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from "../NotificationButton";
import DatePicker from "react-datepicker";
import { useState } from "react";

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(new Date());
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
                            <th className="show992">Visitas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>

                    {/* body */}
                    <tbody>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show992">08/07/2022</td>
                            <td>Anakin</td>
                            <td>15</td>
                            <td>11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show992">08/07/2022</td>
                            <td>Anakin</td>
                            <td>15</td>
                            <td>11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show992">08/07/2022</td>
                            <td>Anakin</td>
                            <td>15</td>
                            <td>11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SalesCard;