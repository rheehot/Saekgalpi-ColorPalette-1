// 낱개 팔레트 회원과 해당 팔레의 userid가 같다면 딜리트 버튼이 있어야 함
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const PaletteWrapper = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
`;

const PaletteColors = styled.div`
    position: absolute;
    display: grid;
    grid-template-columns: repeat(${(props) => props.number}, 1fr);
    width: 200px;
    height: 200px;
`;
// TODO: 추후 데이터받아서 props.number로 넘겨주기

const PaletteInfo = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 200px;
    background-color: #f1f2f6;
    padding: 5px 0;
    bottom: 0px;
`;

const PaletteColor = styled.div`
    background-color: ${(props) => props.color};
`;

const PaletteListEntry = ({ history }) => {
    //주석 나중에 제거하거나 다듬을 것
    //숫자에 맞게 div를 생성하는 헬퍼 함수를 만들어야 합니다 -> 받은 숫자에 맞게 map으로 div를 만들어주는 건 어떨까요?
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [colors, setColors] = useState(['red', 'blue', 'black']);

    const toggleInfo = () => {
        setIsMouseOver((prevState) => !prevState);
    };

    const onClickPalette = () => {
        history.push('/paletteDetail/:id');
    };

    return (
        <PaletteWrapper className='palette__wrapper' onClick={onClickPalette}>
            {/* wrapper */}
            <PaletteColors
                className='palette__colors'
                onMouseOver={toggleInfo}
                onMouseOut={toggleInfo}
                number={colors.length}
            >
                {/* div를 묶어 줘야 됨 */}
                {colors.map((color) => (
                    <PaletteColor className='palette__color' color={color} />
                ))}
            </PaletteColors>
            {isMouseOver ? (
                <PaletteInfo className='palette__info--hidden'>
                    {/* hover page */}
                    <span className='palette__title'>타이틀</span>
                    <div className='palette__icons'>
                        <button className='palette__like'>ㅁ</button>
                        <button className='palette__save'>저장</button>
                        <button className='palette__share'>공유</button>
                    </div>
                </PaletteInfo>
            ) : (
                <></>
            )}
            <button className='palette__delete--hidden'>삭제</button>
        </PaletteWrapper>
    );
};

export default withRouter(PaletteListEntry);
