import { useState } from "react";
import arrow from './img/arrowDrop.png';
const Filter = ({
    methodFilter,
    setMethodFilter, 
    materialFilter, 
    setMaterialFilter,
    methodCheck,
    materialCheck,
    switchState,
    setSwitchState,
    methodFilled,
    materialFilled,} : 
    {methodFilter: string[], 
    setMethodFilter: any,
    materialFilter: string[], 
    setMaterialFilter: any, 
    methodCheck:number,
    materialCheck:number,
    switchState:boolean,
    setSwitchState:any,
    methodFilled:any,
    materialFilled:any,}) => {
    const [methodFilterOpen, setMethodFilterOpen] = useState(false);
    const [materialFilterOpen, setMaterialFilterOpen] = useState(false);
    const handleSwitch = () => {
        if(switchState===true){
            setSwitchState(false);
        } else if(switchState===false){
            setSwitchState(true);
        }
    }
    const handleMethodCheck = (method: string) => {
        if (methodFilter.includes(method)) {
            const newMethodsArr = methodFilter.filter((t) => t !== method);
            setMethodFilter(newMethodsArr);
        } else {
            setMethodFilter([...methodFilter, method]);
        }
    }
    const handleMaterialCheck = (material:string) => {
        if (materialFilter.includes(material)) {
            const newMaterialsArr = materialFilter.filter((t) => t !== material);
            setMaterialFilter(newMaterialsArr);
        } else {
            setMaterialFilter([...materialFilter, material]);
        }
    }
    return (
        <div>
            <div>
                <h3>들어온 요청</h3>
                <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>
                <div id="buttons">
                    <div id="buttonsLeft">
                        <div id="methodButton" className={`${methodFilled}`} onClick={() => setMethodFilterOpen(!methodFilterOpen)}><p>가공방식</p><img src={arrow} className="arrow"></img><p>{methodCheck>0?` (${methodCheck})`:""}</p></div>
                        <div id="methodButton" className={`${materialFilled}`} onClick={() => setMaterialFilterOpen(!materialFilterOpen)}><p>재료</p><img src={arrow} className="arrow"></img><p>{materialCheck>0?` (${materialCheck})`:""}</p></div>
                    </div>
                    <div id="buttonsRight">
                        <div id="switch" onClick={handleSwitch}>
                            <input type="checkbox" className="switch"></input>
                        </div>
                        <p>상담 중인 요청만 보기</p>
                    </div>
                </div>
            </div>
            {methodFilterOpen ? <div id="methodCollapse">
                                    <div> 
                                        <input type="checkbox" name="method" value="밀링" onClick={() => handleMethodCheck("밀링")}/>
                                        <label htmlFor="method1"> 밀링</label> <br/>
                                        <input type="checkbox" name="method" value="선반" onClick={()=> handleMethodCheck("선반")}/>
                                        <label htmlFor="method2"> 선반</label>
                                    </div>
                                </div> : null}
            {materialFilterOpen ?<div id="materialCollapse"> 
                                    <input type="checkbox" name="material" value="알루미늄" onClick={()=>handleMaterialCheck("알루미늄")} />
                                    <label htmlFor="material"> 알루미늄</label> <br/>
                                    <input type="checkbox" name="material" value="탄소강" onClick={()=>handleMaterialCheck("탄소강")} />
                                    <label htmlFor="material"> 탄소강</label> <br/>
                                    <input type="checkbox" name="material" value="구리" onClick={()=>handleMaterialCheck("구리")}/>
                                    <label htmlFor="material"> 구리</label> <br/>
                                    <input type="checkbox" name="material" value="합금강" onClick={()=>handleMaterialCheck("합금강")}/>
                                    <label htmlFor="material"> 합금강</label> <br/>
                                    <input type="checkbox" name="material" value="강철" onClick={()=>handleMaterialCheck("강철")}/>
                                    <label htmlFor="material"> 강철</label> <br/>
                                    <input type="checkbox" name="material" value="스테인리스강" onClick={()=>handleMaterialCheck("스테인리스강")}/>
                                    <label htmlFor="material">스테인리스강</label>
                                </div> : null}
        </div>
    )
}
export default Filter;