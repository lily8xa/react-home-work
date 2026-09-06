import {useSearchParams} from "react-router";

export const Pagination = () => {
    const [searchParam,setSearchParam]=useSearchParams({page:'1'});
    let currentPage=Number(searchParam.get('page') ||'1');
    return (
        <div>
            <button onClick={()=>{
                if(currentPage>1){
                    setSearchParam({page:(--currentPage).toString()})
            }}}>Prev</button>
            <button onClick={()=>{
                setSearchParam({page:(++currentPage).toString()})
                }}>Next</button>
        </div>
    );
};
