import React from "react";

import { Prod_state } from "../connectors/ContextApi";

const Search = () => {

    const {item:{searchKey},disp}=Prod_state();



    return (

        <div>

            <form class="form-inline my-2 my-lg-0">

                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"

                onChange={(event)=>{

                    disp({

                        type:"SEARCH",

                        payload:event.target.value

                    })

                }}  

                />  

            </form>

        </div>

    );

}

 

export default Search ;