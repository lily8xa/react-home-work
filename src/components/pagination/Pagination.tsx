import {useSearchParams} from "react-router";
import './Psgination.css'

export const Pagination = () => {
    const [searchParam,setSearchParam]=useSearchParams({page:'1'});
    let currentPage=Number(searchParam.get('page') ||'1');
    return (
        <div className={'main-button'}>
            <button className={'button'} onClick={()=>{
                if(currentPage>1){
                    setSearchParam({page:(--currentPage).toString()})
            }}}>Prev</button>
            <button className={'button'} onClick={()=>{
                setSearchParam({page:(++currentPage).toString()})
                }}>Next</button>
        </div>
    );
};
