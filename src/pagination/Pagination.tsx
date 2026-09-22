import {useSearchParams} from "react-router";
import './Pagination.css'
import {type FC} from "react";

interface PaginationProps {
    total: number;
    limit: number;
}
export const Pagination:FC<PaginationProps> = ({total,limit}) => {
    const [searchParam,setSearchParam]=useSearchParams({page:'1'});
    let currentPage=Number(searchParam.get('page') ||'1');
    let maxPage = Math.ceil(total / limit);
    console.log({ currentPage, maxPage });
    return (
        <div className={'main-button'}>
            <button className={'button'} onClick={()=>{
                if(currentPage>1){
                    setSearchParam({page:(--currentPage).toString()})
                }}}>Prev</button>
            <button className={'button'} onClick={()=>{
                setSearchParam({page:(currentPage+1).toString()
                })
            }}
                    disabled={currentPage >= maxPage}>Next</button>
        </div>
    );
};
