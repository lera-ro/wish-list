import { Component } from "react";

export class Wish extends Component {
    state = {
        userInput: '',
        wishList: []
    }

    inputOnChange(e){
        this.setState({userInput: e})
    }

    addItem(input){
        if(input===''){
            alert('Please enter your wish!')
        }
        else{
            let listArray = this.state.wishList;
            listArray.push(input);
            this.setState({wishList: listArray, userInput: ''})
        }
    }

    deleteItem(){
        let listArray = this.state.wishList;
        listArray = [];
        this.setState({wishList: listArray});
    }

    crossedItem(event){
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e){
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="container">
                        <input type="text"
                        placeholder="Write your wish"
                        onChange={(e) => {this.inputOnChange(e.target.value)}}
                        value = {this.state.userInput} />
                    </div>

                    <div className="container">
                        <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Add</button>
                    </div>

                    <ul>
                        {this.state.wishList.map((item, index) => (<li onClick={this.crossedItem} key = {index}>{item}</li>))}
                    </ul>

                    <div className="container">
                        <button onClick={() => this.deleteItem()} className="btn delete">Delete</button>
                    </div>
                </form>
            </div>
        )
    }
}