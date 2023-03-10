import React from "react";
import "./NavBar.css";
function NavBar(props) {
	return (
		<div className='navbar-container'>
			<a className='logo'>
				<i className='fa-solid fa-compass'></i>
			</a>
			{!props.isLoggedIn ? (
				<div className='nav-item'>
					<span>Login</span>
					<a onClick={props.handleLogin} className='login-button'>
						<i className='fa-solid fa-arrow-right-to-bracket log'></i>
					</a>
				</div>
			) : (
				<div className='nav-item'>
					<span>Hi, {props.user.displayName}</span>
					<i
						onClick={props.handleLogOut}
						className='fa-solid fa-arrow-right-from-bracket log'
					></i>
				</div>
			)}
		</div>
	);
}

export default NavBar;
