import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Panel } from 'primereact/panel';
import { RadioButton } from 'primereact/radiobutton';

const SellPage = () => {
    return (
        <div>
            <Panel header="Sotish">
                <div className="content d-col">
                    <div>Firma</div>
                    <Dropdown placeholder='Firma' options={["Soliq Fayz MCHJ", "Fenix MCHJ", "Karton Studio MCHJ"]} />
                    <div>Maxsulot</div>
                    <Dropdown placeholder='Format' options={["110", "110/K", "150", "150/K"]} />
                    <InputNumber placeholder='Vazni' suffix=' kg' />
                    <div>To'lov turi</div>
                    <div className="row">
                        <div>
                            <RadioButton inputId='paymentMethodCash' name='payment' />
                            <label htmlFor='paymentMethodCash' className='ml-10'>Naqd</label>
                        </div>
                        <div>
                            <RadioButton inputId='paymentMethodDebt' name='payment' />
                            <label htmlFor='paymentMethodDebt' className='ml-10'>Qarz</label>
                        </div>
                    </div>

                    <Button label="Sotish" />

                </div>
            </Panel>

        </div>
    );
}

export default SellPage;