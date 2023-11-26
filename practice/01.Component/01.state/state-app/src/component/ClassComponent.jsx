import React from 'react'

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);

        // 상태 정의
        this.state = {
            name: "Aloha",
        };

        // this 바인딩
        this.handleClickAloha = this.handleClickAloha.bind(this);
        this.handleClickJoeun = this.handleClickJoeun.bind(this);

    }
    
    handleClickAloha() {
        console.log('Aloha Click!');

        // 상태 설정
        this.setState({ name: 'Aloha' });
    }

    handleClickJoeun() {
        console.log('Joeun Click!');

        // 상태 설정
        this.setState({ name : 'Joeun' });
    }

    render() {
        const { name } = this.state;
        return (
            <div>
                <h1>클래스 컴포넌트</h1>
                <h2>Hello I'm {name}</h2>
                <button onClick={this.handleClickAloha}>Aloha</button>
                <button onClick={this.handleClickJoeun}>Joeun</button>
            </div>
        )
    }

}
export default ClassComponent