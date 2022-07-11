// function Components
const Profile = (props) => {
    const showMessage = () => {
        alert('user is ' + props.user)
    };
    const handleClick = () => {
        // 请注意，由于这里并没有查询接口，所以通过 setTimeout 来模拟网络请求
        setTimeout(showMessage, 3 * 1000);
    };
    return (
        <button onClick={handleClick}>search</button>
    );
}

// Class Component
class Profile extends React.component {
    showMessage = () => {
        alert('user is ' + props.user)
    };
    handleClick = () => {
        // 请注意，由于这里并没有查询接口，所以通过 setTimeout 来模拟网络请求
        setTimeout(this.showMessage, 3 * 1000);
    };
    render() {
        return <button onClick={this.handleClick}>search</button>
    }
}