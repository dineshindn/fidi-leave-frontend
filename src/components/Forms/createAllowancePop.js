import React from "react";
import { CreateAllowancePopStyles } from "../Allowance/styles";
import { Switch, Dropdown } from "antd";
import { PlusCircleOutlined, MinusOutlined } from "@ant-design/icons";
import LeaveType from "../leavePopup/leave_type";
import { monthData } from "../../utils/mockdata";
import DropDownCompo from "../DropDown/index";

const CreateAllowancePop = (props) => {
  const {
    container,
    AddContainer,
    RemoveContainer,
    editContainerFun,
    newPolicyName,
    setNewPolicyName,
    setStartMonth,
    startMonthOpen,
    setStartMonthOpen,
    endMonthOpen,
    setEndMonthOpen,
    startMonthObj,
    setEndMonth,
    endMonthObj,
    setCreateLeavePop,
    dropVal,
    setDropVal,
    leaveTypes
  } = props;


  return (
    <CreateAllowancePopStyles>
      <div id="add_employee_main">
        <div id="employee_wrap">
          <div id="input_wrap">
            <label htmlFor="input">Policy name *</label>
            <input type="text" value={newPolicyName} placeholder="Policy name"
              onChange={(e) => setNewPolicyName(e.target.value)}
            />
          </div>
        </div>
        <div id="employee_wrap">
          <div id="input_wrap">
            <label htmlFor="input">Start Month *</label>
            <Dropdown overlay={
              <LeaveType
                leaveFun={setStartMonth}
                setLeaveDrop={setStartMonthOpen}
                userDataMain={monthData}
              />
            } trigger={['click']} placement="bottomLeft" visible={startMonthOpen}>
              <input type="text" value={startMonthObj?.label} placeholder="Start Month" onClick={() => { setStartMonthOpen(!startMonthOpen); setEndMonthOpen(false) }} />
            </Dropdown>
          </div>
          <div id="input_wrap">
            <label htmlFor="input">End month *</label>
            <Dropdown overlay={
              <LeaveType
                leaveFun={setEndMonth}
                setLeaveDrop={setEndMonthOpen}
                userDataMain={monthData}
              />
            } trigger={['click']} placement="bottomLeft" visible={endMonthOpen}>
              <input type="text" value={endMonthObj?.label} placeholder="End month" onClick={() => { setEndMonthOpen(!endMonthOpen); setStartMonthOpen(false) }} />
            </Dropdown>
          </div>
        </div>

        {container?.map((item, index) => {
          return (
            <div id="add_allowance_container" key={index}>
              {index > 0 && (
                <div className="btn_container">
                  <button
                    className="remove_allowance_btn"
                    onClick={() => RemoveContainer(item)}
                  >
                    <MinusOutlined style={{ margin: `0 10px 0 0 ` }} />
                    Remove Allowance
                  </button>
                </div>
              )}
              <div id="employee_wrap">
                <div id="input_wrap">
                  <label htmlFor="input">Allowance name *</label>
                  <input
                    value={item?.name}
                    type="text" placeholder="Allowance name"
                    onChange={(e) => {
                      editContainerFun(index, "name", e.target.value)
                    }} />
                </div>
                <div id="input_wrap">
                  <label htmlFor="input">Leave Type *</label>
                  <DropDownCompo
                    arrayData={leaveTypes}
                    dropVal={dropVal}
                    setDropVal={setDropVal}
                    index={index}
                    setCreateLeavePop={setCreateLeavePop}
                    setValFun={(value) => editContainerFun(index, 'type', value)}
                    editvalue=""
                  />
                </div>
              </div>
              <div id="employee_wrap_policy">
                <div id="input_wrap">
                  <label htmlFor="input">No of Days *</label>
                  <input type="number"
                    value={item?.days}
                    placeholder="No of Days"
                    onChange={(e) => editContainerFun(index, 'days', e.target.value)}
                  />
                </div>
                <div id="input_wrap">
                  <label htmlFor="input">Max Limit *</label>
                  <input type="number"
                    value={item?.limitToggle && !(item?.maxLimit > item?.days) && !(item?.maxLimit < 0) ? item?.maxLimit : 0}
                    placeholder="Max Limit"
                    disabled={!(item?.limitToggle)}
                    onChange={(e) => { editContainerFun(index, 'maxLimit', e.target.value) }}
                  />
                </div>
                <div id="input_wrap" className="input_wrap">
                  <label htmlFor="input">Allow Max Limit *</label>
                  <Switch
                    checked={item?.limitToggle}
                    onChange={(e) => editContainerFun(index, "limitToggle", e)}
                    className="switch"
                  />
                </div>
              </div>

              {/* <div id="employee_wrap" className="employee_wrap_description">
                <div id="input_wrap">
                  <label htmlFor="input">Description</label>
                  <textarea type="text"
                    value={item?.description}
                    placeholder="Description"
                    onChange={(e) => editContainerFun(index, "description", e.target.value)}
                  />
                </div>
              </div> */}
            </div>
          )
        })}
        <div className="btn_container">
          <button id="add_allowance_btn" onClick={() => AddContainer()}>
            <PlusCircleOutlined style={{ margin: `0 10px 0 0 ` }} />
            Add Allowance
          </button>
        </div>
      </div>
    </CreateAllowancePopStyles>
  )
}
export default CreateAllowancePop
