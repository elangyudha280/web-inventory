// component book info
import BookInfo from "./ComponentHomeDashboard/BookInfo";



const ContainerHomeDashboard = ()=>{
    return (
        <section className="container-home  pt-[100px] px-4 pb-5 overflow-x-hidden overflow-y-auto z-[1] relative w-full h-[100vh] border-2 border-red-500">
            <section className="sub-container mx-auto relative max-w-6xl ">
                  <BookInfo/>

                {/* component card book item */}
                <div className="container-card-book-item mt-10 relative w-full border-2 border-red-600">
                    

                </div>
            </section>
        </section>
    )
}

export default ContainerHomeDashboard;