import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Panel } from 'primereact/panel';
import { useState } from 'react';

const AddPage = () => {
    const [selectedComodity, setSelectedComodity] = useState("Ishlab chiqarilgan maxsulotni qo'shish");
    return (<>
        <div>
            <Panel className='mb-20' header="Maxsulotni qo'shish">
                <div className="content d-col">
                    <div>Maxsulot</div>
                    <Dropdown placeholder='Maxsulot turi' options={["Ishlab chiqarilgan maxsulotni qo'shish", "Xom ashyo qo'shish"]} value={selectedComodity} onChange={e => setSelectedComodity(e.target.value)} />
                    {
                        selectedComodity === "Ishlab chiqarilgan maxsulotni qo'shish" ?
                            <>
                                <div>Firma</div>
                                <Dropdown placeholder='Firma' options={["Soliq Fayz MCHJ", "Fenix MCHJ", "Karton Studio MCHJ"]} />
                                <Dropdown placeholder='Format' options={["110", "110/K", "150", "150/K"]} />

                            </> :
                            <>
                                <div>Maxsulot</div>
                                <Dropdown placeholder='Maxsulot' options={["Kley", "Makulatura", "Natriy", "Kaliy"]} />
                            </>
                    }
                    <InputNumber placeholder='Vazni' suffix=' kg' />
                    <Button label="Qo'shish" />

                </div>
            </Panel>
        </div>
    </>)
}

export default AddPage; 