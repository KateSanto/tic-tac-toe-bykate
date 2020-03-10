import React from 'react';


class Restart extends React.Component {
    clearBoard = () => {
        this.props.clearBoardFunc()
    }

    render() {
        return <div className="row restart">
            <div className="col-6">
                <button type="button" className="btn btn-success" onClick={this.clearBoard}>Restart</button>
            </div>

        </div>
    };
}

export default Restart;
