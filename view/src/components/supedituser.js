import React from 'react';
import './adminpage.css';

class Supedituser extends React.Component {
	constructor(){
		super();
		this.state = {
			'name': "",
			'category': "",
			'address': "",
			'website': "",
			'cater': "",
			'hours': "",
			'fservice': ""
		}
		this.update_field = this.update_field.bind(this);
	}

	store_field = (e, field) => {
        this.setState({
            [e.target.name]: e.target.value
        });
	}

	update_field = (e) => {
		console.log(this.state);
	}
	render(){
		return (
			<div className="supBody">
			<form>
 			 	<label className="label-adm-input">
				    Name:
    				<input onChange={(e) => this.store_field(e)} type="text" name="name" />
  				</label>
 			 	<label className="label-adm-input">
				    E-mail:
    				<input onChange={(e) => this.store_field(e)} type="text" name="website" />
  				</label>
 			 	<label className="label-admin">
				    Password:
    				<input onChange={(e) => this.store_field(e)} type="text" name="address" />
					<button type="button" onClick={() => this.update_field('address')} className="btn btn-success">Commit</button>
  				</label>
			</form>
			</div>
		)
	}
}

export default Supedituser;