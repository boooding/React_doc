
// constructor bind state and function'
class Counter extends React.component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick().bind(this)
    }
    handleClick() {}
    render() {
        return null
    }
}
