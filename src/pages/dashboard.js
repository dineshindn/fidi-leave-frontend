import React from "react"
import { BoardContainer } from "../components/Board/styles"
import SideBar from "../components/SideBar"
import HeaderMain from "../components/header"
import Dashboard from "../components/Dashboard/dashboard"

const DashboardMain = () => {

    // FETCHING USER STORED DATA
    const userData =
        typeof localStorage !== "undefined" &&
        JSON.parse(localStorage.getItem("userData"));

    const userDataMain = userData?.user;

    return (
        <BoardContainer>
            <div id="BoardContainer">
                <SideBar />
                <div
                    id="main_menu"
                    style={{ background: "#FCFAFA" }}
                >
                    {/* userData header */}
                    <HeaderMain
                        title="Dashboard"
                        userDataMain={userDataMain}
                    />
                    {/* Dashboard */}
                    <Dashboard />
                </div>
            </div>
        </BoardContainer>
    )
}
export default DashboardMain
