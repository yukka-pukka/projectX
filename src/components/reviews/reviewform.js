import React, {Component} from 'react';
import Star from './star.js';


class Form extends Component {
    constructor()
    {
        super();

        this.state = {
            isActive: false,
            isSubmitted: false,
            rating: 0,
            name: '',
            review: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render()
    {
        return (
            <div className="review-form content-padding block-margin-top">

                <form className={this.state.isActive ? '' : 'hide'} onSubmit={this.props.submitForm}>

                    {this.props.validation}
                    
                <label className="rating__prefix font-size-small">Review</label>
                    <textarea name="review" value={this.props.review} placeholder="Put your review here."
                              onChange={this.handleInputChange}/>
                    <Star 
                    rating = {this.state.rating}
                    onClick={(rating) => this.setState({...this.state,rating})}
                       
                    />

                    <button className="btn btn-primary mt-2" type="submit" value="Submit">
                        Submit 
                    </button>
                </form>

            

            </div>
        )
    }

    showForm()
    {
        this.setState({...this.state, isActive: true});
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


// class addCommentForm extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         author_name: '',
//         rating: 5,
//         text: ''
//       };
//     }
  
//     onChangeHander = e => {
//       let value = e.target.value;
//       switch (e.target.name) {
//         case 'author':
//           this.setState({
//             author_name: value
//           });
//           break;
//         case 'comment_text':
//           this.setState({
//             text: value
//           });
//           break;
//         case 'star':
//           this.setState({
//             rating: parseInt(value, 10)
//           });
//           break;
//         default:
//           return null;
//       }
//     };
  
//     onSubmitHandler = e => {
//       e.preventDefault();
//     };
  
//     render() {
//       let form = null;
  
//       // properties
//       const { active, targetRestaurant, filterObject } = this.props;
  
//       // Methods
//       const {
//         toggleCommentForm,
//         addComment,
//         turnOffAddCommentButton,
//         filterRestaurants,
//         mapBounds
//       } = this.props;
  
//       if (active) {
//         form = (
//           <div className="form-backdrop">
//             <div onClick={toggleCommentForm} className="close-btn">
//               <i className="far fa-window-close" />
//             </div>
//             <form
//               autoComplete="off"
//               className="AddCommentForm border border-success px-5 py-2 rounded"
//               onSubmit={e => {
//                 this.onSubmitHandler(e);
//                 addComment(
//                   { ...this.state, time: getTimeStamp() },
//                   targetRestaurant
//                 );
//                 turnOffAddCommentButton(targetRestaurant);
//                 filterRestaurants(filterObject, mapBounds);
//               }}
//             >
//               <div className="form-group">
//                 <label className="text-light" htmlFor="">
//                   Name: <span className="text-danger">*</span>
//                 </label>
//                 <input
//                   name="author"
//                   type="text"
//                   className="form-control"
//                   onChange={e => {
//                     this.onChangeHander(e);
//                   }}
//                   required
//                 />
//               </div>
//               <RatingStar onchange={this.onChangeHander} />
//               <div className="form-group">
//                 <label className="text-light" htmlFor="">
//                   Comment:
//                 </label>
//                 <textarea
//                   className="form-control"
//                   name="comment_text"
//                   onChange={e => {
//                     this.onChangeHander(e);
//                   }}
//                 />
//               </div>
//               <input
//                 type="submit"
//                 className="btn btn-success btn-sm"
//                 value="Submit"
//               />
//             </form>
//           </div>
//         );
//       }
//       return form;
//     }
//   }
  