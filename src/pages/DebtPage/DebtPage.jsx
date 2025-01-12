import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Panel } from 'primereact/panel';
import { RadioButton } from 'primereact/radiobutton';

const DebtPage = () => {
    const value = [
        {name: "Soliq Fayz MCHJ", debt: 100000},
        {name: "Fenix MCHJ", debt: 200000},
        {name: "Karton Studio MCHJ", debt: 3000000}
    ];

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'UZS' });
    };

    const debtBodyTemplate = (rowData) => {
        return formatCurrency(rowData.debt);
    };

    return (
        <div>
           <DataTable value={value}>
                <Column field="name" header="Firma" />
                <Column field="debt" header="Qarz" body={debtBodyTemplate} />
                <Column body={<Button text label="To'lash"/>} /> 
           </DataTable>
        </div>
    );
}

export default DebtPage;