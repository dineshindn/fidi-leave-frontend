import React from "react";
// import { Button, Dropdown, Menu } from 'antd';
import { LeaveDetailstyle } from "../Board/styles"

const LeaveDetails = ({ leaveDetailContent, desecision }) => {

    let data = leaveDetailContent;

    return (
        <LeaveDetailstyle>
            <div id="add_employee_main">
                <div id="pop_headder">
                    <div id="profile_box">
                        <img src="https://i.pinimg.com/550x/4b/0e/d9/4b0ed906554fb9f66b1afabea90eb822.jpg" alt="img" id="profile" />
                        <div id="profile_text">
                            <h2>{data?.item?.username}</h2>
                            <p>{data?.item?.userId[0] + data?.item?.userId[1] + data?.item?.userId[2] + data?.item?.userId[3] + data?.item?.userId[4]}</p>
                        </div>
                    </div>
                    <div id="leave_details">
                        <span>{data?.item?.type === 'cos' ? 'Casual Leave' : 'Paid Leave'}</span>
                        <span>{data?.item?.startDate} to {data?.item?.endDate}</span>
                    </div>
                </div>
                <div id="pop_body">
                    <span>Fidisys Technologies</span>
                    <span>naveen@fidisys.com</span>
                    <textarea value={data?.item?.reason} disabled />
                    <div id="pop_btns">
                        {data?.item?.status === 'approved' ? <p style={{
                            color: `#00D241`, fontSize: `1.2vw`, fontWeight: `700`
                        }}>Approved</p> : data?.item?.status === 'rejected' ?
                            <p style={{
                                color: `#FF0000`, fontSize: `1.2vw`, fontWeight: `700`
                            }}>Rejected</p> :
                            <>
                                <button onClick={() => { desecision('reject', data?.item?.id) }}>Reject</button>
                                <button onClick={() => { desecision('approve', data?.item?.id) }}>Approve</button>
                            </>
                        }
                    </div>
                </div>
            </div>
        </LeaveDetailstyle>
    )
}

export default LeaveDetails;