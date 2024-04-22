import React from "react";
import './NewTests.css'
import new_tests from "../Asset/images/new_tests";
import Item from "../Item/Item";

const NewTests = () => {
    return (
        <div className="new-tests">
            <h1>NEW TESTS</h1>
            <hr />
            <div className="tests">
                {new_tests.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}

export default NewTests;