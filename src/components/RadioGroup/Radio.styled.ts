import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-around;
`;

export const RadioButtonLabel = styled.label`
    position: absolute;
    top: 25%;
    left: 4px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: white;
    border: 1px solid ${({ theme }) => theme.grey};
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    height: 48px;
    position: relative;
`;


export const RadioButton = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin-right: 10px;
    &:hover ~ ${RadioButtonLabel} {
        background: ${({ theme }) => theme.grey};
        &::after {
            content: "";
            display: block;
            border-radius: 50%;
            width: 12px;
            height: 12px;
            margin: 6px;
            background: #eeeeee;
        }
    }
    &:checked + ${RadioButtonLabel} {
        background: ${({ theme }) => theme.darkGrey};
        border: 1px solid ${({ theme }) => theme.darkGrey};
        &::after {
            content: "";
            display: block;
            border-radius: 50%;
            width: 12px;
            height: 12px;
            margin: 6px;
            box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
            background: white;
        }
    }
`;
