import React, {Component} from 'react';
import Button from './button.js';
import Star from './star.js';


class Form extends Component {
    constructor()
    {
        super();

        this.state = {
            isActive: false,
            isSubmitted: false,
            rating: 1,
            name: '',
            review: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render()
    {
        return (
            <div className="review-form bg-white content-padding block-margin-top">

                <form className={this.state.isActive ? '' : 'hide'} onSubmit={this.props.submitForm}>

                    {this.props.validation}
                    
                    <textarea name="review" value={this.props.review} placeholder="Put your review here."
                              onChange={this.handleInputChange}/>
                    <Star
                    onClick={(i) => console.log(i)}
                    />;

                    <button className="button">
                        Submit 
                    </button>
                </form>

                {this.showButton()}

            </div>
        )
    }

    showForm()
    {
        this.setState({...this.state, isActive: true});
    }

    showButton()
    {
        return <Button isActive={this.state.isActive} showForm={() => this.showForm()}/>;
    }

    handleInputChange(event)
    {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({...this.state, [name]: value})
    }
}

export default Form;