import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import './Pagination.css'
function PaginationScreen (props: any){
    const [total, setTotal] = useState<number>(props.total);
    const [page, setPage] = useState<number>(props.page);
    const [pageSize, setPageSize] = useState<number>(props.pageSize);
    const [totalPage, setTotalPage] = useState<number>(0);
    const [array, setArray] = useState<any>();

    useEffect(() => {
        if(props.total && props.total!=null && props.total!=undefined){
            var totalPageNew =props.total/pageSize;
            let totalPageNewToFixed=totalPageNew.toFixed();
            let totalPageNewToFixedNumber=totalPageNewToFixed;
            if(parseInt(totalPageNewToFixed)<totalPageNew){
                totalPageNew =parseInt(totalPageNewToFixedNumber);
                totalPageNew+=1;
            }
            else{
                totalPageNew=parseInt(totalPageNewToFixedNumber);
            }
            let arrayNew=[];
            setTotalPage(totalPageNew);
            if (totalPageNew<=5) {
                for (let index = 1; index <= totalPageNew; index++) {
                    arrayNew.push(index)             
                }       
            }
            else if (props.page < 4 && totalPageNew>=5) {
                for (let index = 1; index <= 5; index++) {
                    arrayNew.push(index)             
                }       
            }
            else if(totalPageNew > 5 && props.page > 3){
                
                let maxPage=props.page + 2;
                let minPage=props.page - 2;
                if(props.page + 2 >= totalPageNew){
                        maxPage=totalPageNew;
                        minPage=totalPageNew-4;
                }
                else if (maxPage==totalPageNew) {
                        minPage=props.page - 4;
                }
                
                    
                for (let index = minPage; index <= maxPage; index++) {
                    arrayNew.push(index)             
                } 
            }
            setArray(arrayNew);
        }     
    }, [page,props.total]);

    const previous = () => {
        setPage(page-1);
        props.setPage(page-1);
        props.clickPage(page-1);
    }

    const next = () => {
        setPage(page+1);
        props.setPage(page+1);
        props.clickPage(page+1);

    }

    const clickPage = (value:number) => {
        setPage(value);
        props.setPage(value);
        props.clickPage(value);

    }

    return (
        <>
            <div className=" col-md-12 pagination-view">                         
                <div className="col-md-6 pagination-center" >
                    <ul className="pagination">
                        <li className="page-item" style={page==1 ? {pointerEvents:"none"} : {}} onClick={()=>clickPage(1)}><a className="page-link" href="#">First</a></li>
                        <li className="page-item" style={page==1 ? {pointerEvents:"none"} : {}} onClick={()=>previous()}><a className="page-link previous" href="#">Previous</a></li>                    
                        {
                        array && array.length>0 && array.map(function(item:any){
                            if(item)
                            {
                            return <li className={page==item ? "page-item active" : "page-item"} onClick={()=>clickPage(item)}><a className="page-link" href="#">{item}</a></li> 
                            }                     
                        }) 
                        }
                        <li className="page-item" style={page>=totalPage ? {pointerEvents:"none"} : {}} onClick={()=>next()}><a className="page-link next" href="#">Next</a></li>
                        <li className="page-item" style={page>=totalPage ? {pointerEvents:"none"} : {}} onClick={()=>clickPage(totalPage)}><a className="page-link" href="#">Last</a></li>

                    </ul>
                </div>
            </div>
        </>
    )
}
export default PaginationScreen;