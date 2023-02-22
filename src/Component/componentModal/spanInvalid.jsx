

// component span invalid 
const SpanInvalid = ({msg})=>{
    return (
        <>
        <span className=" text-[0.7em] text-red-300 peer-invalid:block peer-valid:hidden ">{msg}</span> 
        </>
    )
}

export default SpanInvalid;