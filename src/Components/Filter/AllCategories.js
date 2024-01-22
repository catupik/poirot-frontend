import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div >
            <h3>Choose a service:</h3>
            <div className="allCategories">

           
            {['All services','Criminal Investigations','Consultation Services','Educational Services']
            .map(category => <Filter key={category} category={category}/>)}
             </div>
        </div>
    )
}

export default AllCategories;