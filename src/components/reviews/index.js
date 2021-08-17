
import React, {Component} from 'react';
import List from './list.js';
import Form from './reviewform.js';
// import './css/reviews.css';



class Review extends Component {
    constructor()
    {
        super();

        this.state = {
            reviews: [
                {
                    rating: 2,
                    name: 'Laleeba',
                    review: 'Aweful Place.\n\n Food is disgusting.',
                    date: new Date(new Date().setDate(new Date().getDate() - 10))
                }
            ],
            validation: ''
        };

        this.submitForm = this.submitForm.bind(this);
    }



    render()
    {
        return (
            <div className="bg-light-gray global-padding-bottom">
                <section className="reviews">

                    <header className="hero bg-black text-color-white global-padding-vertical overlay">
                        <div className="area align-center text-center row">
                            <h1 className="small-12 medium-6 columns">
                                <span className="font-weight-regular">Reviews and ratings</span><br />
                                {/* <span className="font-size-xxlarge text">N/A</span> */}
                            </h1>
                        </div>
                    </header>

                    <div className="row align-center content-margin-top-negative">
                        <div className="small-12 medium-8 large-6 columns">
                            <div className="content-padding bg-white area">

                                <p className="font-size-medium">
                                    Please share your experience!&nbsp;
                                
                                </p>
                            </div>
                            {this.renderForm()}
                            {this.renderReviews()}
                        </div>
                    </div>


                </section>
            </div>

        );
    }

    renderList()
    {
        return <List reviews={this.state.reviews}/>;
    }

    renderForm()
    {
        return <Form submitForm={this.submitForm} validation={this.state.validation}/>;
    }

    renderReviews()
    {
        return this.state.reviews.map(review=>{
            return( <div>
               <div> {
                    review.name
                
                      }</div> 
                <div> {
                    review.review
                
                      }</div> 
                <div> {
                    review.rating
                
                      }</div> 
            </div>)
        });
    }

    submitForm(event)
    {
        event.preventDefault();
        const reviews = this.state.reviews.slice();

        this.setState({
            ...this.state,
            validation: ''
        });

        reviews.push({
            rating: parseInt(event.target.rating.value),
            name: event.target.name.value,
            review: event.target.review.value,
            date: new Date()
        });
        console.log(reviews)
        this.setState({
            ...this.state,
            reviews: reviews,
            validation: ''
        });
    }
}

export default Review;