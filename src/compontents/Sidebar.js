function Sidebar() {
    //sidebar
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <h3>Chats</h3>
                {/* <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton> */}
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    {/* <SearchOutlined /> */}
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>
            <div className="sidebar__chats">
                {/* <SidebarChat />
                <SidebarChat />
                <SidebarChat /> */}
            </div>
        </div>
    )
}

export default Sidebar;