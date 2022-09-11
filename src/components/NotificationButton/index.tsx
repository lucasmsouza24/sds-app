import "./styles.css";
import icon from "../../assets/img/notification-icon.svg";
import Api from "../../Api";
import { toast } from 'react-toastify';

type Props = {
    saleId: number;
}

function NotificationButton({saleId} : Props) {

    function handleClick(id: number) {
        Api.post(`/sales/${id}/notification`)
        .then(({status}) => {
            if (status == 201) {
                toast("SMS enviado")
            }
        });
    }

    return(
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="user icon" />
        </div>
    );
}

export default NotificationButton;