import React from 'react'
import todo from './to do.png'
import { useEffect, useState } from 'react';
import Card from './Card.js'
import './Status.css'
import plusmore from './plusmore.png'
import done from './Done.png'
import Cancelled from './canceled.png'
import backlogimg from './backlog.png'
import inprogressimg from './in progress.png'
import nopriorityimg from './nopriority.png'
import urgentimg from './urgent.png'
import highimg from './high.png'
import mediumimg from './medium.png'
import lowimg from './low.png'



const  Board=(props)=> {
    const [todono, settodono] = useState();
    let usersdata = [''];
    const [tick, setTick] = useState([{ "id": "CAM" }]);
    const [todolist, settodolist] = useState([]);
    const [inProgressno, setinProgressno] = useState(0);
    const [doneno, setdoneno] = useState(0);
    const [cancelled, setcancelled] = useState(0);
    const [backlog, setbacklog] = useState(0);

    // const [count, setCount] = useState(0);
    // let todonum = 0;
    const [todonum, setTodonum] = useState(0);

    // const [first, setfirst] = useState(second)

    useEffect(() => {

        hello();
        count();


    }, []);

    async function hello() {
        try {
            const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");

            const result = await response.json();


            setTick(result.tickets);

            console.log("tickets", tick);


            // settodolist( tick.filter((ele) => ele.status === 'Todo')) ;
            // setTimeout(() => {

            // }, 2000);

            // // setTodonum((prevTodonum) => {
            // //     const todolist = tick.filter((ele) => ele.status === 'Todo');
            // //     console.log(todolist.length); // Now this will give you the expected result
            // //     return todolist.length; // Return the new value for todonum
            // //   });
            // //   console.log(todolist.length);

            // //     console.log(todolist);
            // console.log(todolist.length);
            // // todonum = todolist.length;
            // setTodonum(todolist.length);
            // console.log(todonum);

        } catch (error) {
            console.error("Error:", error);
        }


    }
    function count() {
        tick.map((ticket) => {
            if (ticket.status === "Todo") {
                settodono(todono + 1)
                console.log("smd")
            }
            if (ticket.status === "In Progress") setinProgressno(inProgressno + 1)
            if (ticket.status === "Done") setdoneno(doneno + 1);
            if (ticket.status === "cancelled") setcancelled(cancelled + 1);
            if (ticket.status === "backlog") setbacklog(backlog + 1);

            console.log("todono");

        })


    }



  return (
    <div className='Board'>
                <div className='boardHeading'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 1C1.91067 1 1 1.91067 1 3V13C1 14.0893 1.91067 15 3 15H13C14.0893 15 15 14.0893 15 13V3C15 1.91067 14.0893 1 13 1H3ZM7 4H9L8.75391 8.99836H7.25L7 4ZM9 11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55228 10 9 10.4477 9 11Z" fill="#FB773F"/>
                    </svg>
                    <p className='cText' style={{width: "190px"}} >No-Priority</p>
                    <p className='cText' style={{fontSize: "10px"}}>{backlog}</p>
                    <div className='boardHeading' id='pluske'>

                    <img src={plusmore} className='headingImg' alt=''></img>
                    </div>


                </div>

                <div className='Cards'>

                    {
                        tick.length > 0 &&
                        tick.map((ticket) => {
                            return (
                                (ticket.priority === 0 && <Card  ticket={ticket}></Card>)
                            )
                        })     
                    }
                </div>

            </div>

  )
}



export default Board;
