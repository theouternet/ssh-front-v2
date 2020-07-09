class TopNav extends React.Component {
    return (
        <div className="nav-top">
            < Link className="nav-item" to="/home">
                Home
            </Link>
            < Link className="nav-item" to="/list">
                Software
            </Link>
        </div>


// add session links here later?


    )
}

const mapStateToProps = (state) => ({
    //currentUser
})

const mapDispatchToProps = dispatch => ({
 //   signOut: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)
